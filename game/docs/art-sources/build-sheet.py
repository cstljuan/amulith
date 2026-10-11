# Builds <out>/sheet.png + sheet.json from sprite strips.
# usage: build-sheet.py OUT_DIR FPS ANIMS_JSON strip.png:N [strip.png:N ...]
# Each strip is split into N frames at its transparent column gaps, frames are trimmed,
# scaled to the same height and bottom-aligned in 256 x 384 cells, 10 per row.
# ANIMS_JSON maps animation name to frame indices in the order the frames were listed.
import sys, json
from PIL import Image
out, fps, anims = sys.argv[1], int(sys.argv[2]), json.loads(sys.argv[3])
FW, FH, COLS = 256, 384, 10

def split(im, n):
    a = im.getchannel('A').point(lambda v: 255 if v > 24 else 0)
    cols = [any(a.getpixel((x, y)) for y in range(0, im.height, 2)) for x in range(im.width)]
    segs, start = [], None
    for x, on in enumerate(cols + [False]):
        if on and start is None: start = x
        if not on and start is not None: segs.append([start, x]); start = None
    while len(segs) > n:  # merge the closest pair (stray pixels, lantern sparks)
        gaps = [segs[i + 1][0] - segs[i][1] for i in range(len(segs) - 1)]
        i = gaps.index(min(gaps)); segs[i] = [segs[i][0], segs[i + 1][1]]; del segs[i + 1]
    if len(segs) < n:  # fall back to even slices
        w = im.width // n; segs = [[i * w, (i + 1) * w] for i in range(n)]
    return [im.crop((s, 0, e, im.height)) for s, e in segs]

frames = []
for spec in sys.argv[4:]:
    path, n = spec.rsplit(':', 1)
    frames += split(Image.open(path).convert('RGBA'), int(n))
rows = (len(frames) + COLS - 1) // COLS
sheet = Image.new('RGBA', (FW * min(COLS, len(frames)), FH * rows), (0, 0, 0, 0))
for i, f in enumerate(frames):
    f = f.crop(f.getchannel('A').point(lambda v: 255 if v > 24 else 0).getbbox())
    k = min((FH - 8) / f.height, (FW - 8) / f.width)
    f = f.resize((round(f.width * k), round(f.height * k)), Image.LANCZOS)
    sheet.paste(f, ((i % COLS) * FW + (FW - f.width) // 2, (i // COLS) * FH + FH - f.height), f)
sheet.save(f'{out}/sheet.png', optimize=True)
json.dump({'frameWidth': FW, 'frameHeight': FH, 'columns': min(COLS, len(frames)), 'fps': fps, 'animations': anims}, open(f'{out}/sheet.json', 'w'))
print(len(frames), 'frames,', rows, 'rows')
