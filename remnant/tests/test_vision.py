"""Shrine vision tests. Synthetic tests always run; capture replays run when the
desk captures are present (AMULITH_CAPTURES, default ../data/captures)."""

import asyncio
import os
from pathlib import Path

import cv2
import numpy as np
import pytest

from remnant.vision.detector import UNKNOWN, ShrineDetector, Stabilizer

MINT = (154, 200, 150)  # BGR, close to the measured figure green


def scene(seed: int = 0) -> np.ndarray:
    rng = np.random.default_rng(seed)
    img = np.zeros((480, 640, 3), np.uint8)
    img[:250] = (140, 138, 136)   # wall
    img[250:] = (150, 160, 175)   # desk
    cv2.ellipse(img, (320, 400), (110, 25), 0, 0, 360, (30, 30, 30), -1)  # dark platform
    return np.clip(img + rng.normal(0, 2, img.shape), 0, 255).astype(np.uint8)


def figure(img: np.ndarray, angry: bool) -> np.ndarray:
    img = img.copy()
    if angry:  # standing, wings spread, open dark eyes
        cv2.ellipse(img, (320, 255), (118, 30), 0, 180, 360, (150, 175, 200), -1)  # tan wings
        cv2.ellipse(img, (320, 290), (55, 100), 0, 0, 360, MINT, -1)
        cv2.line(img, (225, 300), (415, 300), MINT, 18)  # arms held out
        cv2.circle(img, (320, 190), 42, MINT, -1)
        for x in (300, 340):  # open eyes with angled brows
            cv2.circle(img, (x, 188), 9, (20, 20, 20), -1)
            cv2.line(img, (x - 12, 170 if x < 320 else 176), (x + 12, 176 if x < 320 else 170), (20, 20, 20), 4)
    else:  # sitting, folded wings, closed eyes
        cv2.ellipse(img, (320, 320), (48, 75), 0, 0, 360, MINT, -1)
        cv2.circle(img, (320, 230), 42, MINT, -1)
        for x in (305, 335):
            cv2.line(img, (x - 5, 226), (x + 5, 226), (40, 50, 40), 1)
    return img


def hand(img: np.ndarray) -> np.ndarray:
    img = img.copy()
    cv2.rectangle(img, (320, 0), (440, 230), (90, 120, 190), -1)  # skin-coloured arm from the top edge
    return img


def run(det: ShrineDetector, frames, t0: float = 0.0, dt: float = 0.2):
    out = []
    for i, f in enumerate(frames):
        out.append(det.process(f, now=t0 + i * dt))
    return out


def calibrated() -> ShrineDetector:
    det = ShrineDetector()
    run(det, [scene(i) for i in range(12)])
    assert det.ref is not None, "empty shrine was not learned automatically"
    return det


def test_learns_empty_and_reports_empty():
    det = calibrated()
    assert det.process(scene(99), now=10).label == "empty"


def test_dark_or_covered_abstains_and_is_not_learned():
    det = ShrineDetector()
    dark = np.full((480, 640, 3), 6, np.uint8)
    res = run(det, [dark] * 12)
    assert all(r.label == UNKNOWN for r in res)
    assert det.ref is None


def test_no_reference_while_figure_present():
    det = ShrineDetector()
    run(det, [figure(scene(i), angry=False) for i in range(12)])
    assert det.ref is None


def test_sleepy_and_angry_with_and_without_reference():
    for det in (calibrated(), ShrineDetector()):
        s = run(det, [figure(scene(i), False) for i in range(4)], t0=20)[-1]
        a = run(det, [figure(scene(i), True) for i in range(4)], t0=40)[-1]
        assert s.label == "sleepy", (s.reason, s.cues.votes)
        assert a.label == "angry", (a.reason, a.cues.votes)


def test_hand_from_edge_wins_over_figure():
    det = calibrated()
    run(det, [figure(scene(i), True) for i in range(3)], t0=20)
    r = run(det, [hand(figure(scene(i), True)) for i in range(3)], t0=30)[-1]
    assert r.label == "hand"


def test_two_figures_abstain():
    det = calibrated()
    img = scene(1)
    left = figure(img, True)[:, 220:420]
    img[:, 170:370] = left
    img[:, 330:530] = figure(scene(2), False)[:, 220:420]
    r = run(det, [img] * 3, t0=20)[-1]
    assert r.label in (UNKNOWN, "hand")


def test_stabilizer_needs_hold_and_ignores_flicker():
    st = Stabilizer(hold_s=0.6)
    t = 0.0
    for _ in range(3):
        st.update("sleepy", 0.9, t); t += 0.2
    assert st.state is None or st.state == "sleepy"
    for _ in range(3):
        st.update("sleepy", 0.9, t); t += 0.2
    assert st.state == "sleepy"
    st.update("angry", 0.9, t); t += 0.2   # one stray frame
    st.update(UNKNOWN, 0.0, t); t += 0.2
    st.update("sleepy", 0.9, t); t += 0.2
    assert st.state == "sleepy"
    for _ in range(6):
        st.update(UNKNOWN, 0.0, t); t += 0.2
    assert st.state == "sleepy", "abstention must hold the last state"


def test_stabilizer_hand_is_fast():
    st = Stabilizer(hold_s=0.6, hand_hold_s=0.3)
    t = 0.0
    for _ in range(5):
        st.update("angry", 0.9, t); t += 0.2
    for _ in range(3):
        st.update("hand", 0.8, t); t += 0.2
    assert st.state == "hand"


def test_server_does_not_forward_hand_over_empty_shrine():
    from remnant.server import Hub
    hub = Hub()
    sent = []

    async def fake_send(msg):
        sent.append(msg)
    hub.send = fake_send

    async def go():
        await hub.on_shrine("hand", 0.8)
        await hub.on_shrine("empty", 0.9)
        await hub.on_shrine("sleepy", 0.9)
        await hub.on_shrine("hand", 0.8)
        await hub.on_shrine("sleepy", 0.9)
    asyncio.run(go())
    assert [m["state"] for m in sent] == ["sleepy", "hand", "sleepy"]
    assert all(set(m) == {"type", "state", "confidence"} for m in sent)


CAPTURES = Path(os.environ.get("AMULITH_CAPTURES", Path(__file__).resolve().parents[2] / "data" / "captures"))
needs_captures = pytest.mark.skipif(not (CAPTURES / "desk1" / "empty").is_dir(), reason="desk captures not present")


@needs_captures
@pytest.mark.parametrize("shift", ["none", "dark x0.55", "warm light", "cool light", "blur s2", "dark+warm+blur"])
def test_captures_per_class(shift):
    from remnant.vision.evaluate import replay
    for label, floor in (("empty", 0.95), ("sleepy", 0.9), ("angry", 0.9)):
        pf, _, _, _ = replay(CAPTURES, "desk1", label, shift)
        assert pf[label] / sum(pf.values()) >= floor, (label, dict(pf))


@needs_captures
@pytest.mark.parametrize("shift", ["none", "dark x0.55", "bright x1.5", "warm light", "cool light", "blur s2", "noise s8", "dark+warm+blur"])
@pytest.mark.parametrize("calibrate", [True, False])
def test_captures_never_swap_factions(shift, calibrate):
    """Abstaining is allowed under a hard shift; calling the wrong figure is not,
    with or without the learned empty reference."""
    from remnant.vision.evaluate import replay
    for label, wrong in (("sleepy", "angry"), ("angry", "sleepy")):
        pf, _, _, _ = replay(CAPTURES, "desk1", label, shift, calibrate=calibrate)
        assert pf[wrong] == 0, (label, shift, calibrate, dict(pf))
