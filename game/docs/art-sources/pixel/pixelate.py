"""Turn official Knight Hacks reference art into clean pixel art frames.

Steps per frame: key out the background, crop with a shared scale, area-downscale,
snap to a fixed per-character palette, threshold alpha, despeckle, then outline the
silhouette with the character's line color. Output is native-size PNGs that the
Aseprite script assembles into tagged sprites and 4x sheets.

Usage: python -I pixelate.py <spec.json>
"""
import json
import sys
from pathlib import Path

import numpy as np
from PIL import Image


def hex_rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def to_lab(rgb):
    # sRGB to CIE Lab, enough for nearest-color matching
    c = rgb / 255.0
    c = np.where(c > 0.04045, ((c + 0.055) / 1.055) ** 2.4, c / 12.92)
    m = np.array([[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]])
    xyz = c @ m.T / np.array([0.9505, 1.0, 1.089])
    f = np.where(xyz > 0.008856, np.cbrt(xyz), 7.787 * xyz + 16 / 116)
    return np.stack([116 * f[..., 1] - 16, 500 * (f[..., 0] - f[..., 1]), 200 * (f[..., 1] - f[..., 2])], -1)


def key_background(im, key, tol, glob=0):
    """Make pixels near the key color transparent, only where connected to the border."""
    a = np.array(im.convert('RGBA')).astype(np.int32)
    if key is None:
        return Image.fromarray(a.astype(np.uint8))
    k = np.array(hex_rgb(key))
    near = np.abs(a[..., :3] - k).max(-1) <= tol
    h, w = near.shape
    seen = np.zeros_like(near)
    stack = [(y, x) for y in (0, h - 1) for x in range(w) if near[y, x]]
    stack += [(y, x) for x in (0, w - 1) for y in range(h) if near[y, x]]
    while stack:
        y, x = stack.pop()
        if seen[y, x]:
            continue
        seen[y, x] = True
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and near[ny, nx] and not seen[ny, nx]:
                stack.append((ny, nx))
    a[..., 3] = np.where(seen, 0, a[..., 3])
    if glob:
        # enclosed background (between legs, under arms) is cut too, but only when it is a big flat area
        a[..., 3] = np.where(near & (np.abs(a[..., :3] - k).max(-1) <= glob), 0, a[..., 3])
    return Image.fromarray(a.astype(np.uint8))


def snap(rgb, pal_lab, pal):
    lab = to_lab(rgb.astype(np.float64))
    d = ((lab[..., None, :] - pal_lab[None, None, :, :]) ** 2).sum(-1)
    return pal[d.argmin(-1)], d.argmin(-1)


def despeckle(idx, alpha, protect, passes=2):
    """Replace lone pixels whose 4 neighbours mostly agree on another color."""
    h, w = idx.shape
    for _ in range(passes):
        out = idx.copy()
        for y in range(1, h - 1):
            for x in range(1, w - 1):
                if not alpha[y, x] or idx[y, x] in protect:
                    continue
                n = [idx[y + dy, x + dx] for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)) if alpha[y + dy, x + dx]]
                if len(n) >= 3 and idx[y, x] not in n:
                    vals, cnt = np.unique(n, return_counts=True)
                    if cnt.max() >= 3:
                        out[y, x] = vals[cnt.argmax()]
        idx = out
    return idx


def keep_main(alpha, frac):
    """Drop loose bits (stray petals, sheet labels) smaller than frac of the biggest blob."""
    h, w = alpha.shape
    lab = np.zeros((h, w), np.int32)
    sizes = [0]
    for y in range(h):
        for x in range(w):
            if alpha[y, x] and not lab[y, x]:
                n = len(sizes)
                lab[y, x] = n
                stack, size = [(y, x)], 0
                while stack:
                    cy, cx = stack.pop()
                    size += 1
                    for dy in (-1, 0, 1):
                        for dx in (-1, 0, 1):
                            ny, nx = cy + dy, cx + dx
                            if 0 <= ny < h and 0 <= nx < w and alpha[ny, nx] and not lab[ny, nx]:
                                lab[ny, nx] = n
                                stack.append((ny, nx))
                sizes.append(size)
    big = max(sizes)
    keep = np.array([s >= big * frac for s in sizes])
    keep[0] = False
    return keep[lab]


def frame(src, spec, scale, pal, pal_lab):
    im = key_background(Image.open(src), spec.get('key'), spec.get('keyTol', 18), spec.get('keyGlobal', 0))
    if 'crop' in spec:
        im = im.crop(tuple(spec['crop']))
    if spec.get('flip'):
        im = im.transpose(Image.FLIP_LEFT_RIGHT)
    bb = im.getbbox()
    im = im.crop(bb)
    w, h = im.size
    tw, th = max(1, round(w * scale)), max(1, round(h * scale))
    # premultiply so transparent edges do not bleed background color into the average
    a = np.array(im).astype(np.float64)
    a[..., :3] *= a[..., 3:4] / 255
    pm = Image.fromarray(a.astype(np.uint8))
    small = np.array(pm.resize((tw, th), Image.BOX)).astype(np.float64)
    al = small[..., 3] / 255
    rgb = np.where(al[..., None] > 0, small[..., :3] / np.maximum(al[..., None], 1e-6), 0).clip(0, 255)
    alpha = al > spec.get('alphaCut', 0.5)
    alpha = keep_main(alpha, spec.get('keepFrac', 0.15))
    _, idx = snap(rgb, pal_lab, pal)
    line = [c.lower() for c in spec['palette']].index(spec['line'].lower())
    # keep the official ink: a target pixel becomes line when enough of its source block is ink
    src = np.array(im).astype(np.float64)
    ink = (np.abs(src[..., :3] - np.array(hex_rgb(spec['line']))).max(-1) < spec.get('inkTol', 40)) & (src[..., 3] > 128)
    frac = np.array(Image.fromarray((ink * 255).astype(np.uint8)).resize((tw, th), Image.BOX)) / 255
    idx = np.where(alpha & (frac > spec.get('inkCut', 0.3)), line, idx)
    protect = {i for i, c in enumerate(spec['palette']) if c.lower() in [p.lower() for p in spec.get('protect', [])]}
    protect.add(line)
    idx = despeckle(idx, alpha, protect)
    if spec.get('outline', True):
        pad = np.pad(alpha, 1)
        edge = alpha & ~(pad[:-2, 1:-1] & pad[2:, 1:-1] & pad[1:-1, :-2] & pad[1:-1, 2:])
        idx = np.where(edge, line, idx)
    out = np.zeros((th, tw, 4), np.uint8)
    out[..., :3] = pal[idx]
    out[..., 3] = np.where(alpha, 255, 0)
    return Image.fromarray(out)


def main(spec_path):
    spec = json.loads(Path(spec_path).read_text())
    root = Path(spec_path).parent
    pal = np.array([hex_rgb(c) for c in spec['palette']], np.float64)
    pal_lab = to_lab(pal)
    out_dir = root / spec['out']
    out_dir.mkdir(parents=True, exist_ok=True)
    for anim in spec['animations']:
        srcs = anim['frames']
        # one scale per animation, from the tallest frame, so the character never pulses in size
        heights = []
        for s in srcs:
            im = key_background(Image.open(s), anim.get('key', spec.get('key')), spec.get('keyTol', 18))
            if 'crop' in anim:
                im = im.crop(tuple(anim['crop']))
            bb = im.getbbox()
            heights.append(bb[3] - bb[1])
        scale = anim['height'] / max(heights)
        merged = {**spec, **anim}
        for i, s in enumerate(srcs):
            img = frame(s, merged, scale, pal, pal_lab)
            img.save(out_dir / f"{anim['name']}_{i:02d}.png")
        print(anim['name'], len(srcs), 'frames, scale', round(scale, 4))


if __name__ == '__main__':
    main(sys.argv[1])
