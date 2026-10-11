"""Contact sheet of native frames at an integer zoom on a neutral backdrop, for review."""
import sys
from pathlib import Path
from PIL import Image
d, out, z = Path(sys.argv[1]), sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 4
fs = sorted(d.glob('*.png'))
cell = 100
cols = 8
rows = (len(fs) + cols - 1) // cols
sheet = Image.new('RGBA', (cols * cell * z, rows * cell * z), (196, 200, 210, 255))
for i, f in enumerate(fs):
    im = Image.open(f)
    im = im.resize((im.width * z, im.height * z), Image.NEAREST)
    x, y = (i % cols) * cell * z, (i // cols) * cell * z
    sheet.alpha_composite(im, (x + (cell * z - im.width) // 2, y + cell * z - im.height - 4 * z))
sheet.convert('RGB').save(out)
