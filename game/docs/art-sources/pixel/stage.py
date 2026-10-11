"""Shade the native Lenny and T.K. frames and stage them under Aseprite tag names."""
from pathlib import Path
import sys
from PIL import Image
sys.path.insert(0, str(Path(__file__).parent))
from finish import shade

KEEP = [(0xFF, 0xFF, 0xFF), (0x5D, 0x3B, 0x2D), (0xE8, 0xFF, 0xFF), (0x9C, 0xF0, 0xFC)]
plan = {
    'lenny': [('idle_s', 'blink_s', range(10), False), ('walk_e', 'walk_e', range(16), False),
              ('stand_s', 'view', [0], False), ('stand_se', 'view', [1], True),
              ('stand_e', 'view', [2], True), ('stand_n', 'view', [3], False)],
    'tk': [('stand_s', 'view', [0], False), ('stand_n', 'view', [1], False), ('asleep_s', 'asleep', [0], False)],
}
for who, rows in plan.items():
    d = Path('stage') / who
    d.mkdir(parents=True, exist_ok=True)
    for tag, src, frames, flip in rows:
        for i, f in enumerate(frames):
            im = Image.open(f'out/{who}/{src}_{f:02d}.png')
            if flip:
                im = im.transpose(Image.FLIP_LEFT_RIGHT)
            shade(im, KEEP).save(d / f'{tag}_{i:02d}.png')
