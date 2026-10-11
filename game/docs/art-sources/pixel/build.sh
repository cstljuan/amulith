#!/usr/bin/env bash
# Rebuild every game sprite in the house style, at its true on-screen size: the world renders
# about 448 px tall, which is about 32 px per world unit, so every texel lands on one screen pixel.
# Run from this folder.
set -euo pipefail
ART=../../../public/art
ORIG=${ORIG:-orig}   # untouched 384 px sources (copied once from git before the first restyle)
A=~/Applications/Aseprite-v1.3.13-x64/aseprite.exe
w() { winepath -w "$1"; }
export WINEDEBUG=-all

# 1. Lenny and T.K. from the official art
python3 -I pixelate.py lenny.json
python3 -I pixelate.py tk.json
python3 -I moss.py out/tk/view_00.png out/tk/asleep_00.png 11
python3 -I stage.py

# 2. Aseprite: tagged masters and native sheets (64 px cells for a 2.0 unit card, T.K. 88 for 2.75)
cast() { # name cell tags
  wine "$A" -b --script-param dir="$(w "$PWD/stage/$1")" --script-param out="$(w "$PWD/src/$1.aseprite")" --script-param cell="$2" --script-param tags="$3" --script "$(w "$PWD/assemble.lua")"
  mkdir -p "$ART/$1"
  wine "$A" -b "$(w "$PWD/src/$1.aseprite")" --sheet-type rows --sheet-columns 10 --sheet "$(w "$PWD/$ART/$1/sheet.png")" --data "$(w "$PWD/src/$1-aseprite.json")" --format json-array --list-tags >/dev/null
  python3 -I sheetjson.py "src/$1-aseprite.json" "$ART/$1/sheet.json" "$2"
}
cast lenny 64 idle_s:10,walk_e:16,stand_s:1,stand_se:1,stand_e:1,stand_n:1
cast tk 88 stand_s:1,stand_n:1,asleep_s:1

# 3. Enemy sheets re-split without cut-off frames
python3 -I ../enemy-sheets.py "$ORIG"

# 4. Everything else gets the same finish at its on-screen size
sheet() { # path fps-json-source
  python3 -I finish.py restyle "$ORIG/$1.png" "$ART/$1.png" --colors 32 --cell 384 384 --factor 6 --native
  python3 -I - "$2" "$ART/$1.json" <<'PY'
import json, sys
d = json.load(open(sys.argv[1])); d['frameWidth'] = d['frameHeight'] = 64
json.dump(d, open(sys.argv[2], 'w'))
PY
}
sheet wanderer/sheet "$ORIG/wanderer/sheet.json"
sheet wanderer/sheet-bloom "$ORIG/wanderer/sheet-bloom.json"
sheet wanderer/sheet-blight "$ORIG/wanderer/sheet-blight.json"
sheet chomper/sheet "$ORIG/chomper/sheet.json"
sheet petalborn/sheet "$ORIG/petalborn/sheet.json"
# props: factor = source height / (card height in units * 32)
prop() { python3 -I finish.py restyle "$ORIG/$1.png" "$ART/$1.png" --colors 32 --factor "$2" --native; }
prop props/round-tree 2.67; prop props/tall-tree 2.67; prop props/blight-tree 2.67
prop props/flower-bush 8.9; prop props/mushrooms 6.7; prop props/blight-mushrooms 6.7
prop props/ruin-pillar 7.6; prop props/amulith-gem 5.9; prop shard/shard 8.2
# dialogue portraits are UI, shown large: 2x
for f in amulith/calm amulith/smug amulith/furious; do python3 -I finish.py restyle "$ORIG/$f.png" "$ART/$f.png" --colors 32; done
echo done
