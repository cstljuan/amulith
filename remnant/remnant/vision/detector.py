"""Shrine state detector that needs no training session at the venue.

Layers, cheapest first:
1. Empty reference: learned automatically while the shrine region is static and
   holds no figure-green pixels. Frames are gain-aligned to the reference before
   differencing, because the webcam re-exposes when a figure appears.
2. Hand: foreground (vs the reference) that touches the top or side edge of the
   region of interest and is not figure green, or strong motion between frames.
   A figure never moves by itself, so motion means a hand.
3. Figure present: a large blob of Lenny green (pastel mint on the real figures).
4. Sleepy versus angry: explicit cues measured on the real figures. Angry stands
   with spread wings and has dark open eyes with brows; sleepy sits with folded
   wings and closed eyes. An optional pretrained embedding votes as a backup.
   If the cues disagree, the frame is `unknown` (abstain), never a guess.
5. Temporal stability: `Stabilizer` only switches after a label held for a
   window of time.

Everything works on a 320 x 240 copy of the frame. Thresholds are constants in
`Config`; nothing here is trained.
"""

from __future__ import annotations

import time
from collections import deque
from dataclasses import dataclass, field

import cv2
import numpy as np

LABELS = ("empty", "sleepy", "angry", "hand")
UNKNOWN = "unknown"
# Cues reliable enough that a strong opposite vote makes the frame abstain.
# Silhouette aspect and the embedding only add weight.
VETO_CUES = ("eyes", "wing", "green_aspect")


@dataclass
class Config:
    # Region of interest as fractions of the frame (x0, y0, x1, y1). Default is the
    # framing box drawn by the capture preview: "whole Lenny + platform inside".
    roi: tuple[float, float, float, float] = (0.25, 0.125, 0.75, 0.917)
    work_size: tuple[int, int] = (320, 240)
    # Figure green in OpenCV HSV (hue 0..180), after gray-world white balance.
    green_hue: tuple[int, int] = (33, 88)
    green_sat_min: int = 40
    green_val_min: int = 60
    figure_min_frac: float = 0.03   # green share of the ROI for "a figure is here"
    empty_green_max: float = 0.006  # green share below which the ROI may be empty
    fg_diff: float = 20.0           # Lab distance that counts as foreground
    empty_fg_max: float = 0.04      # foreground share allowed on an empty shrine
    # Hand cues.
    hand_border_min: float = 0.08   # share of ROI top/side edge covered by non-green foreground
    hand_motion_min: float = 0.10   # share of ROI pixels that changed since the last frame
    # Sleepy (-) versus angry (+) cues: (midpoint, half width). Values past
    # midpoint +- half width count as a full vote.
    eyes_mid: tuple[float, float] = (-3.4, 0.9)      # log dark share of the face band
    wing_mid: tuple[float, float] = (1.11, 0.07)     # silhouette width at shoulders / green width
    sil_aspect_mid: tuple[float, float] = (1.12, 0.10)  # silhouette height / width (angry is wider)
    green_aspect_mid: tuple[float, float] = (1.56, 0.12)  # green height / width
    embed_scale: float = 0.04       # cosine similarity gap that is a full vote
    weights: dict = field(default_factory=lambda: {
        "eyes": 1.0, "wing": 1.0, "sil_aspect": 0.7, "green_aspect": 0.5, "embed": 0.4})
    min_green_aspect: float = 0.95  # wider than this is two figures side by side
    decide_min: float = 0.25        # |combined vote| below this abstains
    disagree_strong: float = 0.5    # two cues at least this strong with opposite signs abstain
    min_brightness: float = 28.0    # mean gray below this is a covered lens or a dark room
    min_contrast: float = 6.0
    # Reference learning.
    calib_static_s: float = 1.5     # static + no figure for this long learns the empty shrine
    refresh_static_s: float = 4.0   # re-learn while confidently empty and static


@dataclass
class Cues:
    green: float = 0.0
    fg: float | None = None
    motion: float | None = None
    border: float | None = None
    eyes: float | None = None
    wing: float | None = None
    sil_aspect: float | None = None
    green_aspect: float | None = None
    embed: float | None = None
    blobs: int = 0
    figure_box: tuple[int, int, int, int] | None = None  # in ROI work coordinates
    votes: dict = field(default_factory=dict)


@dataclass
class Result:
    label: str
    confidence: float
    cues: Cues
    reason: str = ""


def _vote(value: float | None, mid: tuple[float, float], sign: float = 1.0) -> float | None:
    if value is None:
        return None
    return float(np.clip(sign * (value - mid[0]) / mid[1], -1.0, 1.0))


def gray_world(img: np.ndarray) -> np.ndarray:
    """Cheap white balance so the green window survives warm or cool room light."""
    means = img.reshape(-1, 3).mean(0) + 1e-3
    gains = np.clip(means.mean() / means, 0.6, 1.7)
    return np.clip(img.astype(np.float32) * gains, 0, 255).astype(np.uint8)


def align_gain(img: np.ndarray, ref: np.ndarray) -> np.ndarray:
    """Per-channel median ratio over the whole frame cancels auto exposure and white balance changes."""
    f = img.reshape(-1, 3).astype(np.float32) + 1.0
    r = ref.reshape(-1, 3).astype(np.float32) + 1.0
    ok = (f.max(1) < 246) & (r.max(1) < 246) & (f.min(1) > 8) & (r.min(1) > 8)
    if ok.sum() > 500:
        f, r = f[ok], r[ok]
    gain = np.clip(np.median(r / f, 0), 0.4, 2.5)
    return np.clip(img.astype(np.float32) * gain, 0, 255).astype(np.uint8)


class ShrineDetector:
    """Per-frame decisions plus the self-learned empty reference. Not thread safe."""

    def __init__(self, config: Config | None = None, embedder=None) -> None:
        self.cfg = config or Config()
        self.embedder = embedder
        self.ref: np.ndarray | None = None
        self.ref_time: float | None = None
        self.prev: np.ndarray | None = None
        self._static_since: float | None = None
        self._empty_since: float | None = None
        self.calibrations = 0

    # Geometry -----------------------------------------------------------------
    def roi_box(self) -> tuple[int, int, int, int]:
        w, h = self.cfg.work_size
        x0, y0, x1, y1 = self.cfg.roi
        return int(x0 * w), int(y0 * h), int(x1 * w), int(y1 * h)

    def prepare(self, frame: np.ndarray) -> np.ndarray:
        small = cv2.resize(frame, self.cfg.work_size, interpolation=cv2.INTER_AREA)
        return cv2.GaussianBlur(small, (3, 3), 0)

    # Reference ----------------------------------------------------------------
    def calibrate(self, frame: np.ndarray, now: float | None = None, prepared: bool = False) -> None:
        """Learn the empty shrine from this frame (manual key or automatic)."""
        self.ref = frame.copy() if prepared else self.prepare(frame)
        self.ref_time = time.monotonic() if now is None else now
        self.calibrations += 1

    def reset_reference(self) -> None:
        self.ref = None
        self.ref_time = None

    # Cues ---------------------------------------------------------------------
    def _green_mask(self, roi_bgr: np.ndarray) -> np.ndarray:
        c = self.cfg
        hsv = cv2.cvtColor(roi_bgr, cv2.COLOR_BGR2HSV)
        m = ((hsv[..., 0] >= c.green_hue[0]) & (hsv[..., 0] <= c.green_hue[1])
             & (hsv[..., 1] >= c.green_sat_min) & (hsv[..., 2] >= c.green_val_min)).astype(np.uint8)
        return cv2.morphologyEx(m, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8))

    def _foreground(self, small: np.ndarray, box) -> np.ndarray | None:
        if self.ref is None:
            return None
        x0, y0, x1, y1 = box
        aligned = align_gain(small, self.ref)
        a = cv2.cvtColor(aligned[y0:y1, x0:x1], cv2.COLOR_BGR2LAB).astype(np.int16)
        b = cv2.cvtColor(self.ref[y0:y1, x0:x1], cv2.COLOR_BGR2LAB).astype(np.int16)
        d = np.abs(a - b)
        dist = 0.5 * d[..., 0] + d[..., 1] + d[..., 2]
        # Lab differences shrink in a dim room; scale the threshold with reference brightness.
        thresh = self.cfg.fg_diff * float(np.clip(b[..., 0].mean() / 150.0, 0.5, 1.2))
        clipped = (small[y0:y1, x0:x1].max(2) >= 250) & (self.ref[y0:y1, x0:x1].max(2) >= 250)
        fg = ((dist > thresh) & ~clipped).astype(np.uint8)
        return cv2.morphologyEx(fg, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8))

    def _motion(self, small: np.ndarray, box) -> float | None:
        if self.prev is None:
            return None
        x0, y0, x1, y1 = box
        a = cv2.cvtColor(small[y0:y1, x0:x1], cv2.COLOR_BGR2GRAY).astype(np.float32)
        b = cv2.cvtColor(self.prev[y0:y1, x0:x1], cv2.COLOR_BGR2GRAY).astype(np.float32)
        a *= (b.mean() + 1) / (a.mean() + 1)  # ignore global exposure steps
        return float((np.abs(a - b) > 25).mean())

    def cues(self, small: np.ndarray) -> Cues:
        c = self.cfg
        box = self.roi_box()
        x0, y0, x1, y1 = box
        balanced = gray_world(small)
        roi = balanced[y0:y1, x0:x1]
        green = self._green_mask(roi)
        fg = self._foreground(small, box)
        if fg is not None:
            # Green that matches the empty reference is background (a green tablecloth).
            green = green & fg
        out = Cues(green=float(green.mean()), motion=self._motion(small, box))
        if fg is not None:
            out.fg = float(fg.mean())
            nongreen = fg & (1 - cv2.dilate(green, np.ones((5, 5), np.uint8)))
            edge = np.concatenate([nongreen[0], nongreen[:, 0], nongreen[:, -1]])
            out.border = float(edge.mean())

        n, lbl, st, _ = cv2.connectedComponentsWithStats(green)
        if n <= 1:
            return out
        areas = st[1:, cv2.CC_STAT_AREA]
        order = np.argsort(areas)[::-1]
        k = 1 + int(order[0])
        big = areas[order[0]]
        if big < c.figure_min_frac * green.size:
            return out
        gx, gy, gw, gh = (int(v) for v in st[k, :4])
        # Merge nearby green parts of the same figure (arms, feet split by the belly).
        near = [1 + int(i) for i in order[1:] if areas[i] > 15]
        for j in near:
            jx, jy, jw, jh = (int(v) for v in st[j, :4])
            if jx < gx + gw + 6 and jx + jw > gx - 6 and jy < gy + gh + 6 and jy + jh > gy - 6:
                nx0, ny0 = min(gx, jx), min(gy, jy)
                gw, gh = max(gx + gw, jx + jw) - nx0, max(gy + gh, jy + jh) - ny0
                gx, gy = nx0, ny0
        out.figure_box = (gx, gy, gw, gh)
        # A second large blob away from the merged figure is a second figure.
        out.blobs = 1
        for i in order[1:]:
            jx, jy, jw, jh = (int(v) for v in st[1 + int(i), :4])
            apart = jx > gx + gw + 4 or jx + jw < gx - 4 or jy > gy + gh + 4 or jy + jh < gy - 4
            if apart and areas[i] > 0.35 * big:
                out.blobs += 1
        out.green_aspect = gh / max(gw, 1)

        # Eyes: dark pixels in the face band, relative to the face's own brightness.
        face = cv2.cvtColor(roi[gy + int(gh * 0.12): gy + int(gh * 0.35), gx + int(gw * 0.2): gx + int(gw * 0.8)],
                            cv2.COLOR_BGR2GRAY)
        if face.size > 30:
            dark = float((face < 0.45 * np.median(face)).mean())
            out.eyes = float(np.log(dark + 0.005))

        if fg is not None:
            n2, l2, _, _ = cv2.connectedComponentsWithStats(cv2.dilate(fg, np.ones((3, 3), np.uint8)))
            ids = np.unique(l2[lbl == k])
            ids = ids[ids > 0]
            sil = np.isin(l2, ids)
            # Keep the figure's own rows: the platform and shadow below it are not shape.
            top = max(0, gy - int(gh * 0.15))
            sil[:top] = False
            sil[gy + gh + 2:] = False
            ys, xs = np.nonzero(sil)
            if len(xs) and (out.border or 0.0) < 0.05:
                sw = int(xs.max() - xs.min() + 1)
                sh = int(ys.max() - ys.min() + 1)
                out.sil_aspect = sh / max(sw, 1)
                band = sil[gy: gy + int(gh * 0.6)]
                widths = [int(np.ptp(np.nonzero(r)[0]) + 1) for r in band if r.any()]
                if widths:
                    out.wing = max(widths) / max(gw, 1)

        if self.embedder is not None:
            out.embed = self.embedder.score(roi, (gx, gy, gw, gh))
        return out

    # Decision -----------------------------------------------------------------
    def decide(self, cu: Cues) -> Result:
        c = self.cfg
        hand_score = 0.0
        if cu.border is not None:
            hand_score = max(hand_score, cu.border / c.hand_border_min)
        if cu.motion is not None:
            hand_score = max(hand_score, cu.motion / c.hand_motion_min)
        if hand_score >= 1.0:
            return Result("hand", float(min(0.99, 0.6 + 0.2 * (hand_score - 1.0))), cu, "edge or motion")

        if cu.figure_box is None:
            if cu.green < c.empty_green_max and (cu.fg is None or cu.fg < c.empty_fg_max):
                conf = 0.9 if cu.fg is not None else 0.7
                return Result("empty", conf, cu, "no figure green")
            return Result(UNKNOWN, 0.0, cu, "something non-figure on the shrine")
        if cu.blobs > 1:
            return Result(UNKNOWN, 0.0, cu, "more than one green blob")
        if cu.green_aspect is not None and cu.green_aspect < c.min_green_aspect:
            return Result(UNKNOWN, 0.0, cu, "too wide for one figure")

        votes = {
            "eyes": _vote(cu.eyes, c.eyes_mid),
            "wing": _vote(cu.wing, c.wing_mid),
            "sil_aspect": _vote(cu.sil_aspect, c.sil_aspect_mid, -1.0),
            "green_aspect": _vote(cu.green_aspect, c.green_aspect_mid, -1.0),
            "embed": None if cu.embed is None else float(np.clip(cu.embed / c.embed_scale, -1, 1)),
        }
        cu.votes = {k: v for k, v in votes.items() if v is not None}
        if not cu.votes:
            return Result(UNKNOWN, 0.0, cu, "no cues")
        # The embedding is a tie-breaker, never a veto: its sleepy/angry gap collapsed
        # under the synthetic room shifts, while the explicit cues held.
        strong = [v for k, v in cu.votes.items() if k in VETO_CUES and abs(v) >= c.disagree_strong]
        if strong and min(strong) < 0 < max(strong):
            return Result(UNKNOWN, 0.0, cu, "cues disagree")
        wsum = sum(c.weights[k] for k in cu.votes)
        combined = sum(c.weights[k] * v for k, v in cu.votes.items()) / wsum
        if abs(combined) < c.decide_min:
            return Result(UNKNOWN, 0.0, cu, "weak cues")
        if "wing" not in cu.votes:
            # No silhouette (no empty reference yet, or a hand at the edge): only two
            # cues left, so the eyes must clearly agree before naming a figure.
            eyes = cu.votes.get("eyes")
            if eyes is None or abs(eyes) < c.disagree_strong or (eyes > 0) != (combined > 0):
                return Result(UNKNOWN, 0.0, cu, "eyes unclear without silhouette")
        # Fewer independent cues (no reference yet) caps the confidence.
        coverage = min(1.0, wsum / sum(c.weights[k] for k in ("eyes", "wing", "sil_aspect", "green_aspect")))
        conf = float(np.clip((0.5 + 0.5 * abs(combined)) * (0.75 + 0.25 * coverage), 0, 0.99))
        return Result("angry" if combined > 0 else "sleepy", conf, cu, "figure cues")

    # Main entry ----------------------------------------------------------------
    def process(self, frame: np.ndarray, now: float | None = None) -> Result:
        now = time.monotonic() if now is None else now
        small = self.prepare(frame)
        gray = cv2.cvtColor(small, cv2.COLOR_BGR2GRAY)
        if gray.mean() < self.cfg.min_brightness or gray.std() < self.cfg.min_contrast:
            # Lens covered or lights off: abstain, and never learn this as the empty shrine.
            self.prev = small
            self._static_since = self._empty_since = None
            return Result(UNKNOWN, 0.0, Cues(), "too dark or covered")
        cu = self.cues(small)
        res = self.decide(cu)
        self._learn(small, cu, res, now)
        self.prev = small
        return res

    def _learn(self, small: np.ndarray, cu: Cues, res: Result, now: float) -> None:
        c = self.cfg
        static = cu.motion is not None and cu.motion < 0.01
        if static:
            self._static_since = self._static_since if self._static_since is not None else now
        else:
            self._static_since = None
        quiet = now - self._static_since if self._static_since is not None else -1.0
        if self.ref is None:
            if quiet >= c.calib_static_s and cu.green < c.empty_green_max:
                self.calibrate(small, now, prepared=True)
            return
        if res.label == "empty" and static:
            self._empty_since = self._empty_since if self._empty_since is not None else now
            if now - self._empty_since >= c.refresh_static_s and now - (self.ref_time or 0) >= c.refresh_static_s:
                self.calibrate(small, now, prepared=True)
                self._empty_since = now
        else:
            self._empty_since = None


class Stabilizer:
    """Switch the published state only after a label held for a time window.

    `unknown` frames never win; they only dilute the window so a flicker cannot
    switch the state. Hand is accepted faster than figures because it should win
    while present, and leaving hand needs the full window (hysteresis).
    """

    def __init__(self, hold_s: float = 0.6, hand_hold_s: float = 0.3, agree: float = 0.75, stale_s: float = 1.0) -> None:
        self.hold_s = hold_s
        self.hand_hold_s = hand_hold_s
        self.agree = agree
        self.stale_s = stale_s
        self.window: deque[tuple[float, str, float]] = deque()
        self.state: str | None = None
        self.confidence = 0.0
        self.last_t: float | None = None

    def reset(self) -> None:
        self.window.clear()
        self.state = None
        self.confidence = 0.0
        self.last_t = None

    def update(self, label: str, confidence: float, now: float) -> bool:
        """Returns True when the accepted state changed."""
        if self.last_t is not None and now - self.last_t > self.stale_s:
            self.window.clear()  # stale frames: restart the evidence, keep the last state
        self.last_t = now
        self.window.append((now, label, confidence))
        horizon = max(self.hold_s, self.hand_hold_s)
        while self.window and now - self.window[0][0] > horizon:
            self.window.popleft()
        changed = False
        for cand, hold in (("hand", self.hand_hold_s), (None, self.hold_s)):
            recent = [w for w in self.window if now - w[0] <= hold]
            if not recent or now - recent[0][0] < hold * 0.8:
                continue
            labels = [w[1] for w in recent]
            top = cand or max(set(labels), key=labels.count)
            if top == UNKNOWN:
                continue
            share = labels.count(top) / len(labels)
            if share >= self.agree:
                conf = float(np.mean([w[2] for w in recent if w[1] == top]) * share)
                if top != self.state:
                    changed = True
                self.state = top
                self.confidence = conf
                break
        return changed
