"""Reproduce Amulith's original CC0 loops and cues with Python's standard library.

Author: Juan Castillo. No samples, models, third-party music or runtime synthesis.
Run from any directory: python3 game/src/audio/make-audio.py
"""
from array import array
from math import exp, pi, sin, tanh
from pathlib import Path
import sys
import wave

RATE = 22050
ROOT = Path(__file__).resolve().parents[2] / "public" / "audio"
ROOT.mkdir(parents=True, exist_ok=True)


def frequency(note):
    return 440 * 2 ** ((note - 69) / 12)


def add_tone(track, start, duration, note, level, kind="bell", pan=0):
    f = frequency(note)
    for n in range(int(duration * RATE)):
        t = n / RATE
        attack = min(1, t / (0.18 if kind == "pad" else 0.012))
        release = min(1, (duration - t) / (0.3 if kind == "pad" else 0.08))
        if kind == "pad":
            value = (sin(2 * pi * f * t) + 0.22 * sin(2 * pi * f * 2 * t)) * 0.55
        else:
            value = (sin(2 * pi * f * t) + 0.18 * sin(2 * pi * f * 2.003 * t)) * exp(-t * 2.6)
        value *= level * attack * release
        i = (int(start * RATE) + n) % len(track[0])
        track[0][i] += value * (1 - pan * 0.35)
        track[1][i] += value * (1 + pan * 0.35)


def write(name, track):
    # Keep music audible at the quiet default mix, with ample room for effects and voice.
    scale = 0.75 / max(abs(tanh(x)) for channel in track for x in channel) if name in ("bloom", "blight") else 1
    samples = array("h")
    for l, r in zip(*track):
        samples.extend((round(tanh(l) * scale * 28000), round(tanh(r) * scale * 28000)))
    if sys.byteorder != "little":
        samples.byteswap()
    with wave.open(str(ROOT / f"{name}.wav"), "wb") as out:
        out.setnchannels(2)
        out.setsampwidth(2)
        out.setframerate(RATE)
        out.writeframes(samples.tobytes())


def blank(seconds):
    return [array("f", [0]) * int(seconds * RATE) for _ in range(2)]


# Eight four-beat bars at 72 BPM. Tail notes wrap into the beginning for a seamless loop.
beat = 60 / 72
seconds = 32 * beat
for name, chords, melody in [
    ("bloom", [(48, 55, 60, 64), (45, 52, 57, 60), (41, 48, 53, 57), (43, 50, 55, 62)], [76, 79, 74, 72, 76, 81, 79, 74]),
    ("blight", [(45, 52, 57, 60), (41, 48, 53, 59), (40, 47, 52, 55), (43, 50, 55, 58)], [72, 71, 69, 67, 72, 74, 71, 68]),
]:
    track = blank(seconds)
    for bar in range(8):
        chord = chords[bar % 4]
        for j, note in enumerate(chord):
            add_tone(track, bar * 4 * beat, 4 * beat + 0.8, note, 0.04, "pad", (j - 1.5) / 2)
        for step in range(8):
            note = chord[(step + bar) % 4] + 12
            add_tone(track, (bar * 4 + step / 2) * beat, 1.6, note, 0.065, pan=sin(step * 1.2))
        add_tone(track, (bar * 4 + 1) * beat, 2.4, melody[bar], 0.08 if name == "bloom" else 0.055, pan=-0.2)
    write(name, track)

for name, notes, gap, tail in [
    ("pulse", [48, 60, 67], 0.05, 0.45),
    ("shard-found", [79, 86], 0.12, 0.7),
    ("shard-resolved", [72, 76, 79, 84], 0.09, 1.0),
    ("hurt", [43, 40], 0.07, 0.3),
    ("faction-flip", [60, 63, 67, 72], 0.1, 0.8),
    ("pause", [67, 60], 0.06, 0.3),
    ("select", [79], 0.04, 0.18),
]:
    track = blank(tail + gap * len(notes))
    for i, note in enumerate(notes):
        add_tone(track, gap * i, tail, note, 0.22)
    write(name, track)

print(f"Wrote 9 original stereo WAV files to {ROOT}")
