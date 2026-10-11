# Builds <out>/sheet.png + sheet.json from sprite strips.
# usage: build-sheet.py OUT_DIR FPS ANIMS_JSON strip.png:N [strip.png:N ...]
# Each strip is split into N frames at its transparent column gaps, frames are trimmed,
# scaled with one factor per strip (so poses keep their relative size) and bottom-aligned in
# 384 x 384 cells, 10 per row. Specks smaller than 2% of the strip are ignored.
# ANIMS_JSON maps animation name to frame indices in the order the frames were listed.
import sys, json
from PIL import Image
out, fps, anims = sys.argv[1], int(sys.argv[2]), json.loads(sys.argv[3])
FW, FH, COLS = 384, 384, 10

def split(im, n):
    a = im.getchannel('A').point(lambda v: 255 if v > 24 else 0)
    cols = [any(a.getpixel((x, y)) for y in range(0, im.height, 2)) for x in range(im.width)]
    segs, start = [], None
    for x, on in enumerate(cols + [False]):
        if on and start is None: start = x
        if not on and start is not None: segs.append([start, x]); start = None
    segs = [g for g in segs if g[1] - g[0] > im.width * 0.02] or segs
    while len(segs) > n:  # merge the closest pair (stray pixels, lantern sparks)
        gaps = [segs[i + 1][0] - segs[i][1] for i in range(len(segs) - 1)]
        i = gaps.index(min(gaps)); segs[i] = [segs[i][0], segs[i + 1][1]]; del segs[i + 1]
    if len(segs) < n:  # fall back to even slices
        w = im.width // n; segs = [[i * w, (i + 1) * w] for i in range(n)]
    return [im.crop((s, 0, e, im.height)) for s, e in segs]

def biggest_run(counts):
    # Longest-mass run of consecutive non-empty lines; drops detached specks.
    runs, cur = [], None
    for i, c in enumerate(counts + [0]):
        if c and cur is None: cur = [i, i, 0]
        if c and cur is not None: cur[1] = i; cur[2] += c
        if not c and cur is not None: runs.append(cur); cur = None
    best = max(runs, key=lambda r: r[2]) if runs else [0, len(counts) - 1, 0]
    return best[0], best[1]

def trim(f):
    a = f.getchannel('A').point(lambda v: 255 if v > 24 else 0)
    w, h = a.size
    px = a.load()
    rows = [sum(1 for x in range(0, w, 2) if px[x, y]) for y in range(h)]
    y0, y1 = biggest_run(rows)
    cols = [sum(1 for y in range(y0, y1 + 1, 2) if px[x, y]) for x in range(w)]
    x0, x1 = biggest_run(cols)
    return f.crop((x0, y0, x1 + 1, y1 + 1))

frames = []
for spec in sys.argv[4:]:
    path, n = spec.rsplit(':', 1)
    strip = [trim(f) for f in split(Image.open(path).convert('RGBA'), int(n))]
    k = min(min((FH - 8) / f.height, (FW - 8) / f.width) for f in strip)
    frames += [f.resize((round(f.width * k), round(f.height * k)), Image.LANCZOS) for f in strip]
rows = (len(frames) + COLS - 1) // COLS
sheet = Image.new('RGBA', (FW * min(COLS, len(frames)), FH * rows), (0, 0, 0, 0))
for i, f in enumerate(frames):
    f = f.crop(f.getchannel('A').point(lambda v: 255 if v > 24 else 0).getbbox())
    sheet.paste(f, ((i % COLS) * FW + (FW - f.width) // 2, (i // COLS) * FH + FH - f.height), f)
sheet.save(f'{out}/sheet.png', optimize=True)
json.dump({'frameWidth': FW, 'frameHeight': FH, 'columns': min(COLS, len(frames)), 'fps': fps, 'animations': anims}, open(f'{out}/sheet.json', 'w'))
print(len(frames), 'frames,', rows, 'rows')
