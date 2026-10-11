"""House style pass: makes every sprite, prop and portrait share one pixel look.

Per asset: area-downscale 384 px art to its 192 px native grid, snap to a limited palette
taken from the asset itself, cel-shade the silhouette edges with light from the upper left
(shadows shift toward blue-violet, highlights toward warm gold), outline the silhouette in
the shared ink color, then scale back up 2x with hard pixels. Lenny and T.K. (already
native) get the same shading and ink, so the whole cast reads as one set.

Usage:
  python -I finish.py restyle <in.png> <out.png> [--colors 20] [--cell W H]
  python -I finish.py shade <native.png> <out.png>
"""
import colorsys
import sys

import numpy as np
from PIL import Image

INK = np.array([0x14, 0x24, 0x20], np.uint8)
LIGHT = np.array([-1.0, -1.0]) / np.sqrt(2)  # toward the light, image coords (x right, y down)


def box_blur(a, r):
    k = 2 * r + 1
    p = np.pad(a, r, mode='edge')
    c = p.cumsum(0).cumsum(1)
    c = np.pad(c, ((1, 0), (1, 0)))
    return (c[k:, k:] - c[:-k, k:] - c[k:, :-k] + c[:-k, :-k]) / (k * k)


def shift(rgb, dv, ds, hue_to, amount):
    out = np.empty_like(rgb)
    for i, (r, g, b) in enumerate(rgb / 255.0):
        h, s, v = colorsys.rgb_to_hsv(r, g, b)
        d = ((hue_to - h + 0.5) % 1.0) - 0.5
        h = (h + d * amount * min(1.0, s * 2)) % 1.0
        out[i] = np.array(colorsys.hsv_to_rgb(h, min(1, s * ds), min(1, v * dv))) * 255
    return out


def shade(img, keep=()):
    """Cel shading on the edge band of the silhouette, plus ink outline. img: native RGBA."""
    a = np.array(img.convert('RGBA'))
    alpha = a[..., 3] > 127
    rgb = a[..., :3].astype(np.float64)
    ink = (np.abs(rgb - INK).max(-1) < 30) | (rgb.max(-1) < 40)
    protected = ink.copy()
    for c in keep:
        protected |= np.abs(rgb - np.array(c)).max(-1) < 8
    b = box_blur(alpha.astype(np.float64), 5)
    gy, gx = np.gradient(b)
    n = -np.stack([gx, gy], -1)  # outward normal
    norm = np.linalg.norm(n, axis=-1) + 1e-9
    facing = (n @ LIGHT) / norm
    edge = norm > 0.02
    # distance to the outside, in pixels (up to 4)
    dist = np.zeros(alpha.shape)
    cur = alpha.copy()
    for d in range(1, 7):
        p = np.pad(cur, 1)
        cur = cur & p[:-2, 1:-1] & p[2:, 1:-1] & p[1:-1, :-2] & p[1:-1, 2:]
        dist += cur
    hi = alpha & ~protected & edge & (facing > 0.3) & (dist >= 1) & (dist <= 3)
    lo = alpha & ~protected & edge & (facing < -0.25) & (dist >= 1) & (dist <= 5)
    flat = rgb.reshape(-1, 3)
    cols, inv = np.unique(flat.astype(np.uint8), axis=0, return_inverse=True)
    inv = inv.reshape(alpha.shape)
    dark = shift(cols.astype(np.float64), 0.76, 1.1, 0.70, 0.12)   # toward blue-violet
    light = shift(cols.astype(np.float64), 1.14, 0.88, 0.14, 0.10)  # toward warm gold
    out = a.copy()
    out[..., :3] = np.where(lo[..., None], dark[inv], out[..., :3])
    out[..., :3] = np.where(hi[..., None], light[inv], out[..., :3])
    # one shared ink outline around every silhouette
    p = np.pad(alpha, 1)
    outer = alpha & ~(p[:-2, 1:-1] & p[2:, 1:-1] & p[1:-1, :-2] & p[1:-1, 2:])
    out[..., :3] = np.where(outer[..., None], INK, out[..., :3])
    out[..., 3] = np.where(alpha, 255, 0)
    return Image.fromarray(out.astype(np.uint8))


def restyle(src, dst, colors=20, cell=None):
    im = Image.open(src).convert('RGBA')
    W, H = im.size
    cw, ch = cell or (W, H)
    # one palette for the whole file so frames of a sheet never flicker between colors
    a = np.array(im)
    a[..., :3] = np.where(a[..., 3:4] > 0, a[..., :3], 0)
    small = Image.fromarray(a).resize((W // 2, H // 2), Image.BOX)
    s = np.array(small)
    opaque = s[..., 3] > 127
    pal_img = Image.fromarray(s[opaque][:, :3][None]).quantize(colors, method=Image.MAXCOVERAGE, kmeans=4)
    q = Image.fromarray(s[..., :3]).quantize(palette=pal_img, dither=Image.Dither.NONE).convert('RGB')
    s[..., :3] = np.array(q)
    s[..., 3] = np.where(opaque, 255, 0)
    out = Image.new('RGBA', (W // 2, H // 2))
    for y in range(0, H // 2, ch // 2):
        for x in range(0, W // 2, cw // 2):
            tile = Image.fromarray(s[y:y + ch // 2, x:x + cw // 2])
            if tile.getbbox():
                out.paste(shade(tile), (x, y))
    out.resize((W, H), Image.NEAREST).save(dst)


if __name__ == '__main__':
    mode = sys.argv[1]
    if mode == 'shade':
        shade(Image.open(sys.argv[2]), keep=[(0xFF, 0xFF, 0xFF), (0x5D, 0x3B, 0x2D), (0xE8, 0xFF, 0xFF), (0x9C, 0xF0, 0xFC)]).save(sys.argv[3])
    else:
        args = sys.argv[2:]
        colors = int(args[args.index('--colors') + 1]) if '--colors' in args else 20
        cell = tuple(int(v) for v in args[args.index('--cell') + 1:args.index('--cell') + 3]) if '--cell' in args else None
        restyle(args[0], args[1], colors, cell)
