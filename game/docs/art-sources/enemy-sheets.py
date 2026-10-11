"""Rebuild the Chomper and Petalborn sheets without cut-off frames.

The old splitter cut strips at transparent gaps, but the walk poses touch each other, so
frames were sliced through the body and picked up pieces of their neighbours. Here each
strip is cut at the emptiest column between pose centres (found by 1D k-means on the
pixel mass), loose pieces that belong to a neighbour are dropped, and every pose is fitted
inside its 384 px cell with padding, one scale per strip, feet on the bottom edge.

Usage: python -I enemy-sheets.py <out_root>   (writes <out_root>/<name>/sheet.png)
"""
import json
import sys
from pathlib import Path

import numpy as np
from PIL import Image

HERE = Path(__file__).parent
CELL, COLS, PAD = 384, 10, 14


def centres(mass, n):
    xs = np.arange(len(mass))
    c = np.linspace(xs[mass > 0].min(), xs[mass > 0].max(), n)
    for _ in range(50):
        lab = np.abs(xs[:, None] - c[None]).argmin(1)
        c = np.array([np.average(xs[lab == k], weights=mass[lab == k] + 1e-9) for k in range(n)])
    return np.sort(c)


def main_blob(a):
    """Keep the pieces that make up the pose: drop small loose bits at the slice edges."""
    from collections import deque
    h, w = a.shape
    lab = np.zeros((h, w), np.int32)
    sizes, touch = [0], [False]
    for y in range(h):
        for x in range(w):
            if a[y, x] and not lab[y, x]:
                n = len(sizes); lab[y, x] = n; q = deque([(y, x)]); size = 0; edge = False
                while q:
                    cy, cx = q.popleft(); size += 1; edge |= cx in (0, w - 1)
                    for dy in (-1, 0, 1):
                        for dx in (-1, 0, 1):
                            ny, nx = cy + dy, cx + dx
                            if 0 <= ny < h and 0 <= nx < w and a[ny, nx] and not lab[ny, nx]:
                                lab[ny, nx] = n; q.append((ny, nx))
                sizes.append(size); touch.append(edge)
    big = max(sizes)
    keep = np.array([s >= big * 0.25 or (not t and s >= big * 0.002) for s, t in zip(sizes, touch)])
    keep[0] = False
    return keep[lab]


def split(path, n, region=None):
    im = Image.open(HERE / path).convert('RGBA')
    if region:
        im = im.crop(region)
    a = np.array(im)
    on = a[..., 3] > 24
    mass = on.sum(0).astype(float)
    c = centres(mass, n)
    sm = np.convolve(mass, np.ones(9) / 9, 'same')
    cuts = [0] + [int(c[i] + sm[int(c[i]):int(c[i + 1])].argmin()) for i in range(n - 1)] + [im.width]
    frames = []
    for x0, x1 in zip(cuts, cuts[1:]):
        sub = a[:, x0:x1].copy()
        sub[..., 3] = np.where(main_blob(sub[..., 3] > 24), sub[..., 3], 0)
        f = Image.fromarray(sub)
        frames.append(f.crop(f.getbbox()))
    return frames


def sheet(name, strips, anims, fps, out_root):
    cells = []
    for frames in strips:
        s = min((CELL - PAD) / max(f.height for f in frames), (CELL - 2 * PAD) / max(f.width for f in frames))
        for f in frames:
            f = f.resize((max(1, round(f.width * s)), max(1, round(f.height * s))), Image.LANCZOS)
            cell = Image.new('RGBA', (CELL, CELL))
            cell.alpha_composite(f, ((CELL - f.width) // 2, CELL - f.height - 2))
            cells.append(cell)
    rows = (len(cells) + COLS - 1) // COLS
    out = Image.new('RGBA', (CELL * COLS, CELL * rows))
    for i, c in enumerate(cells):
        out.alpha_composite(c, ((i % COLS) * CELL, (i // COLS) * CELL))
    d = Path(out_root) / name
    d.mkdir(parents=True, exist_ok=True)
    out.save(d / 'sheet.png')
    json.dump({"frameWidth": CELL, "frameHeight": CELL, "columns": COLS, "fps": fps, "animations": anims}, open(d / 'sheet.json', 'w'))
    print(name, len(cells), 'frames')


if __name__ == '__main__':
    root = sys.argv[1]
    dead = Image.open(HERE / 'enemies-defeated.png')
    half = dead.width // 2
    sheet('chomper', [split('chomper-walk8.png', 7), split('chomper-attack5.png', 5), split('enemies-defeated.png', 1, (0, 0, half, dead.height))],
          {"idle_side": [0, 2], "walk_side": [0, 1, 2, 3, 4, 5, 6], "attack": [7, 8, 9, 10, 11], "defeated": [12]}, 11, root)
    sheet('petalborn', [split('petalborn-walk8.png', 8), split('petalborn-attack5.png', 5), split('enemies-defeated.png', 1, (half, 0, dead.width, dead.height))],
          {"idle_side": [0, 4], "walk_side": [0, 1, 2, 3, 4, 5, 6, 7], "attack": [8, 9, 10, 11, 12], "defeated": [13]}, 11, root)
