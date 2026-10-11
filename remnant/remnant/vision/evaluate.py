"""Replay saved captures through the detector, with synthetic room shifts.

Captures are laid out as <root>/<session>/<label>/<epoch_ms>.jpg (vision/capture.py).
Each class folder is replayed as a sequence with its real timestamps. Before it,
the first 2 s of the session's empty folder are replayed so the detector learns
the empty shrine by itself, as it would at the venue. The same shift is applied
to the calibration frames (the shrine is calibrated in the new room).

Split: the first 30% of each folder by time is only used to build the embedding
gallery; every number reported is on the remaining 70%.
"""

from __future__ import annotations

from collections import Counter
from pathlib import Path

import cv2
import numpy as np

from .detector import LABELS, UNKNOWN, Config, ShrineDetector, Stabilizer

TRAIN_SHARE = 0.3


def _scale(img, b=1.0, g=1.0, r=1.0, k=1.0):
    return np.clip(img.astype(np.float32) * np.array([b * k, g * k, r * k], np.float32), 0, 255).astype(np.uint8)


SHIFTS = {
    "none": lambda im: im,
    "dark x0.55": lambda im: _scale(im, k=0.55),
    "bright x1.5": lambda im: _scale(im, k=1.5),
    "warm light": lambda im: _scale(im, b=0.7, r=1.2),
    "cool light": lambda im: _scale(im, b=1.25, r=0.75),
    "blur s2": lambda im: cv2.GaussianBlur(im, (0, 0), 2.0),
    "noise s8": lambda im: np.clip(im.astype(np.float32) + np.random.default_rng(0).normal(0, 8, im.shape), 0, 255).astype(np.uint8),
    "dark+warm+blur": lambda im: cv2.GaussianBlur(_scale(im, b=0.7, r=1.2, k=0.6), (0, 0), 1.5),
}


def frames(root: Path, session: str, label: str) -> list[tuple[float, Path]]:
    files = sorted((root / session / label).glob("*.jpg"))
    return [(int(f.stem) / 1000.0, f) for f in files]


def split(seq):
    cut = int(len(seq) * TRAIN_SHARE)
    return seq[:cut], seq[cut:]


def build_gallery(root: Path, session: str, embedder) -> dict[str, list[np.ndarray]]:
    """Embeddings of the first 30% of each figure folder (crop from the green box)."""
    det = ShrineDetector()
    gallery: dict[str, list[np.ndarray]] = {"sleepy": [], "angry": []}
    for label in gallery:
        train, _ = split(frames(root, session, label))
        for _, f in train:
            small = det.prepare(cv2.imread(str(f)))
            cu = det.cues(small)
            if cu.figure_box is None:
                continue
            x0, y0, x1, y1 = det.roi_box()
            from .embed import crop_square
            gallery[label].append(embedder.embed(crop_square(small[y0:y1, x0:x1], cu.figure_box)))
    return gallery


def replay(root: Path, session: str, label: str, shift: str = "none", embedder=None,
           calibrate: bool = True, drift: str | None = None, config: Config | None = None):
    """Returns (per-frame label Counter, stabilized-state Counter, per-frame results)."""
    fx = SHIFTS[shift]
    det = ShrineDetector(config, embedder)
    stab = Stabilizer()
    t_offset = 0.0
    if calibrate:
        empties = frames(root, session, "empty")
        t0 = empties[0][0]
        for t, f in empties:
            if t - t0 > 2.0:
                break
            det.process(fx(cv2.imread(str(f))), now=t - t0)
            t_offset = t - t0 + 0.25
    _, test = split(frames(root, session, label))
    fx2 = SHIFTS[drift] if drift else fx
    per_frame: Counter = Counter()
    stable: Counter = Counter()
    results = []
    base = test[0][0]
    for t, f in test:
        now = t - base + t_offset
        res = det.process(fx2(cv2.imread(str(f))), now=now)
        stab.update(res.label, res.confidence, now)
        per_frame[res.label] += 1
        stable[stab.state or "none"] += 1
        results.append((f.name, res))
    return per_frame, stable, results, det


def table(root: Path, session: str = "desk1", embedder=None, shifts=None, calibrate: bool = True) -> str:
    lines = []
    cols = list(LABELS) + [UNKNOWN]
    for shift in shifts or SHIFTS:
        lines.append(f"\nshift: {shift}  ({'auto empty reference' if calibrate else 'no reference'}"
                     f"{', embedding vote' if embedder else ''})")
        lines.append(f"{'true':8s} " + " ".join(f"{c:>7s}" for c in cols) + "  frame acc  stable acc")
        for label in LABELS:
            pf, st, _, _ = replay(root, session, label, shift, embedder, calibrate)
            n = sum(pf.values())
            lines.append(f"{label:8s} " + " ".join(f"{pf[c]:7d}" for c in cols)
                         + f"  {pf[label] / n:8.1%}  {st[label] / n:9.1%}")
    return "\n".join(lines)
