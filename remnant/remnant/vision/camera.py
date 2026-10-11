"""Camera worker: one thread owns /dev/video0, runs the detector a few times a
second, and reports accepted state changes. Also renders the debug overlay on
demand for the preview stream.
"""

from __future__ import annotations

import os
import threading
import time
from typing import Callable

import cv2
import numpy as np

from .detector import Config, Result, ShrineDetector, Stabilizer

DEVICE = os.environ.get("AMULITH_CAMERA", "/dev/video0")
FPS = float(os.environ.get("AMULITH_VISION_FPS", "4"))
# While the LLM generates, fewer frames: at 5 fps the detector cut llama tok/s from
# about 18.8 to 15.5 on the Orin Nano; at 2 fps it was within noise (18.3).
BUSY_FPS = float(os.environ.get("AMULITH_VISION_BUSY_FPS", "2"))
STALE_S = 1.5
cv2.setNumThreads(1)  # leave cores for the game and the LLM
RECONNECT_S = 2.0


def load_embedder():
    """The embedding vote is optional; missing weights or gallery just skip it."""
    try:
        from .embed import GALLERY_PATH, MODEL_PATH, Embedder
        if MODEL_PATH.exists() and GALLERY_PATH.exists():
            return Embedder()
    except Exception as exc:  # pragma: no cover - depends on device files
        print(f"vision: embedder disabled ({exc})", flush=True)
    return None


def draw_overlay(frame: np.ndarray, det: ShrineDetector, res: Result | None, stab: Stabilizer,
                 fps: float, note: str = "") -> np.ndarray:
    img = frame.copy()
    H, W = img.shape[:2]
    sx, sy = W / det.cfg.work_size[0], H / det.cfg.work_size[1]
    x0, y0, x1, y1 = det.roi_box()
    cv2.rectangle(img, (int(x0 * sx), int(y0 * sy)), (int(x1 * sx), int(y1 * sy)), (0, 220, 0), 2)
    if res is not None and res.cues.figure_box is not None:
        gx, gy, gw, gh = res.cues.figure_box
        cv2.rectangle(img, (int((x0 + gx) * sx), int((y0 + gy) * sy)),
                      (int((x0 + gx + gw) * sx), int((y0 + gy + gh) * sy)), (255, 200, 0), 1)

    def put(text, y, color=(255, 255, 255), scale=0.5, thick=1):
        cv2.putText(img, text, (8, y), cv2.FONT_HERSHEY_SIMPLEX, scale, (0, 0, 0), thick + 2, cv2.LINE_AA)
        cv2.putText(img, text, (8, y), cv2.FONT_HERSHEY_SIMPLEX, scale, color, thick, cv2.LINE_AA)

    state = stab.state or "none yet"
    colors = {"sleepy": (255, 210, 120), "angry": (120, 120, 255), "hand": (0, 200, 255), "empty": (220, 220, 220)}
    put(f"STATE {state.upper()}  {stab.confidence:.2f}", 26, colors.get(state, (255, 255, 255)), 0.75, 2)
    y = 48
    if res is not None:
        put(f"frame: {res.label} {res.confidence:.2f} ({res.reason})", y); y += 18
        c = res.cues

        def f(v, d=2):
            return "-" if v is None else f"{v:.{d}f}"
        put(f"green {f(c.green, 3)}  fg {f(c.fg, 3)}  motion {f(c.motion, 3)}  edge {f(c.border, 3)}", y); y += 18
        put(f"eyes {f(c.eyes)}  wing {f(c.wing)}  sil h/w {f(c.sil_aspect)}  green h/w {f(c.green_aspect)}  emb {f(c.embed, 3)}", y); y += 18
        if c.votes:
            put("votes (+angry/-sleepy): " + "  ".join(f"{k} {v:+.1f}" for k, v in c.votes.items()), y); y += 18
    ref = "not learned (keep the shrine empty and still)" if det.ref is None else \
        f"learned {time.monotonic() - (det.ref_time or 0):.0f}s ago, x{det.calibrations}"
    put(f"empty reference: {ref}", H - 30, (200, 255, 200))
    put(f"{fps:.1f} fps  {note}", H - 10, (200, 200, 200))
    return img


class ShrineCamera:
    """Background camera loop. `on_change(state, confidence)` runs on the worker thread."""

    def __init__(self, on_change: Callable[[str, float], None] | None = None, device: str = DEVICE,
                 fps: float = FPS, config: Config | None = None, embedder="auto") -> None:
        self.on_change = on_change
        self.device = device
        self.period = 1.0 / max(fps, 0.5)
        self.busy_period = 1.0 / max(min(BUSY_FPS, fps), 0.5)
        self.busy = False
        self.detector = ShrineDetector(config, load_embedder() if embedder == "auto" else embedder)
        self.stabilizer = Stabilizer()
        self.last_frame_t = 0.0
        self.last_result: Result | None = None
        self.fps = 0.0
        self.proc_ms = 0.0
        self.opened = False
        self.preview_wanted_until = 0.0
        self._jpeg: bytes | None = None
        self._lock = threading.Lock()
        self._calibrate = threading.Event()
        self._stop = threading.Event()
        self.thread = threading.Thread(target=self._run, daemon=True, name="shrine-camera")

    def start(self) -> "ShrineCamera":
        self.thread.start()
        return self

    def stop(self) -> None:
        self._stop.set()

    @property
    def ready(self) -> bool:
        return self.opened and time.monotonic() - self.last_frame_t < STALE_S

    def set_busy(self, busy: bool) -> None:
        """The LLM is generating: drop to BUSY_FPS so the GPU/CPU stay with it."""
        self.busy = busy

    def request_calibration(self) -> None:
        self._calibrate.set()

    def debug_jpeg(self) -> bytes | None:
        self.preview_wanted_until = time.monotonic() + 3.0
        with self._lock:
            return self._jpeg

    def status(self) -> dict:
        r = self.last_result
        return {
            "ready": self.ready, "state": self.stabilizer.state, "confidence": round(self.stabilizer.confidence, 3),
            "frame_label": r.label if r else None, "reason": r.reason if r else None,
            "fps": round(self.fps, 2), "process_ms": round(self.proc_ms, 1), "busy": self.busy,
            "reference": self.detector.ref is not None, "embedder": self.detector.embedder is not None,
        }

    def _open(self):
        cap = cv2.VideoCapture(self.device, cv2.CAP_V4L2)
        cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
        cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
        cap.set(cv2.CAP_PROP_BUFFERSIZE, 1)
        if not cap.isOpened():
            cap.release()
            return None
        return cap

    def _run(self) -> None:
        try:  # lower priority for this thread only, never for the web server
            os.setpriority(os.PRIO_PROCESS, threading.get_native_id(), 10)
        except (OSError, AttributeError):
            pass
        cap = None
        next_t = 0.0
        ema = None
        while not self._stop.is_set():
            if cap is None:
                cap = self._open()
                if cap is None:
                    self.opened = False
                    self.stabilizer.reset()
                    time.sleep(RECONNECT_S)
                    continue
                self.opened = True
            if not cap.grab():
                cap.release()
                cap = None
                self.opened = False
                self.stabilizer.reset()  # unplugged: no state is invented, the last sent one stays
                time.sleep(RECONNECT_S)
                continue
            now = time.monotonic()
            if now < next_t:
                continue  # keep draining the driver queue so frames stay fresh
            ok, frame = cap.retrieve()
            if not ok or frame is None:
                continue
            next_t = now + (self.busy_period if self.busy else self.period)
            t0 = time.perf_counter()
            if self._calibrate.is_set():
                self._calibrate.clear()
                self.detector.calibrate(frame, now)
            res = self.detector.process(frame, now)
            changed = self.stabilizer.update(res.label, res.confidence, now)
            self.proc_ms = (time.perf_counter() - t0) * 1000
            if self.last_frame_t:
                inst = 1.0 / max(now - self.last_frame_t, 1e-3)
                ema = inst if ema is None else 0.8 * ema + 0.2 * inst
                self.fps = ema
            self.last_frame_t = now
            self.last_result = res
            if changed and self.on_change and self.stabilizer.state:
                try:
                    self.on_change(self.stabilizer.state, self.stabilizer.confidence)
                except Exception as exc:  # never let a callback kill the camera loop
                    print(f"vision: on_change failed: {exc}", flush=True)
            if now < self.preview_wanted_until:
                img = draw_overlay(frame, self.detector, res, self.stabilizer, self.fps,
                                   f"{self.proc_ms:.0f} ms/frame")
                ok, buf = cv2.imencode(".jpg", img, [cv2.IMWRITE_JPEG_QUALITY, 75])
                if ok:
                    with self._lock:
                        self._jpeg = buf.tobytes()
        if cap is not None:
            cap.release()
