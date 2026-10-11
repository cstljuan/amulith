"""Overgrow a pixel sprite with moss and vines (T.K. asleep), following the IX hero art.

Moss settles on upward-facing armor edges, vines hang from the shoulders, small red
berries dot the moss, and the visor glow goes dark. Seeded, so reruns are identical.
Usage: python -I moss.py <in.png> <out.png> [seed]
"""
import random
import sys

import numpy as np
from PIL import Image

MOSS = [(0x24, 0x57, 0x30), (0x34, 0x8D, 0x43), (0x4E, 0xAF, 0x52), (0x7C, 0xC8, 0x6C)]
VINE, LEAF, BERRY = (0x24, 0x57, 0x30), (0x4E, 0xAF, 0x52), (0xC8, 0x3C, 0x3C)
GLOW = {(0xE8, 0xFF, 0xFF), (0x9C, 0xF0, 0xFC)}
DARK = (0x1F, 0x28, 0x35)


def main(src, dst, seed=7):
    rnd = random.Random(seed)
    a = np.array(Image.open(src).convert('RGBA'))
    h, w = a.shape[:2]
    op = a[..., 3] > 0
    out = a.copy()
    put = lambda y, x, c: (0 <= y < h and 0 <= x < w and op[y, x]) and out.__setitem__((y, x), (*c, 255))
    # visor goes dark in the head (top fifth)
    for y in range(h // 5):
        for x in range(w):
            if tuple(a[y, x, :3]) in GLOW:
                out[y, x, :3] = DARK
    # moss clumps on surfaces that face up, densest on the helmet and shoulders
    tops = [(y, x) for y in range(1, h) for x in range(w) if op[y, x] and not op[y - 1, x] and y < h * 0.5]
    rnd.shuffle(tops)
    for y, x in tops[: max(6, len(tops) // 4)]:
        r = rnd.choice((2, 2, 3, 3, 4))
        for dy in range(-r, r + 1):
            for dx in range(-r - 1, r + 2):
                if dx * dx / (r + 1) ** 2 + dy * dy / r ** 2 > 1 or rnd.random() < 0.12:
                    continue
                yy, xx = y + dy, x + dx
                if not (0 <= yy < h and 0 <= xx < w) or (not op[yy, xx] and dy > 0):
                    continue
                shade = dy + dx * 0.5  # light from the upper left
                c = MOSS[3] if shade < -r * 0.6 else MOSS[2] if shade < 0.2 else MOSS[1] if shade < r * 0.7 else MOSS[0]
                out[yy, xx] = (*c, 255)
        if rnd.random() < 0.3:
            out[y - 1, x] = (*BERRY, 255)
    # outline the moss where it rises above the armor
    al = out[..., 3] > 0
    for y in range(1, h - 1):
        for x in range(1, w - 1):
            if al[y, x] and not op[y, x] and (not al[y - 1, x] or not al[y, x - 1] or not al[y, x + 1]):
                out[y, x] = (0x14, 0x24, 0x20, 255)
    # a few vines hang from the shoulders, with leaf pairs
    for y, x in rnd.sample(tops, k=min(6, len(tops))):
        for i in range(rnd.randint(int(h * 0.12), int(h * 0.3))):
            put(y, x, VINE)
            put(y, x + 1, VINE)
            if i % 5 == 2:
                put(y, x - 1, LEAF)
                put(y, x + 2, LEAF)
            y += 1
            x += rnd.choice((-1, 0, 0, 0, 0, 1))
    Image.fromarray(out).save(dst)


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 7)
