# usage: sheet.py out_dir fps idle_count frame1.png [frame2.png ...]  (frames already split; trims and bottom-aligns)
import sys, json
from PIL import Image
out, fps, idle_n = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
frames = [Image.open(p).convert('RGBA') for p in sys.argv[4:]]
crops = [f.crop(f.getchannel('A').point(lambda a: 255 if a > 24 else 0).getbbox()) for f in frames]
FW, FH = 256, 384
maxh = max(c.height for c in crops); maxw = max(c.width for c in crops)
s = min((FH - 8) / maxh, (FW - 8) / maxw)
sheet = Image.new('RGBA', (FW * len(crops), FH), (0, 0, 0, 0))
for i, c in enumerate(crops):
    k = min((FH - 8) / c.height, (FW - 8) / c.width); c = c.resize((round(c.width * k), round(c.height * k)), Image.LANCZOS)
    sheet.paste(c, (i * FW + (FW - c.width) // 2, FH - c.height), c)
sheet.save(f'{out}/sheet.png', optimize=True)
n = len(crops)
anim = {'idle': list(range(idle_n)), 'walk': list(range(idle_n, n)) or list(range(idle_n))}
json.dump({'frameWidth': FW, 'frameHeight': FH, 'columns': n, 'fps': fps, 'animations': anim}, open(f'{out}/sheet.json', 'w'))
print(n, 'frames', anim)
