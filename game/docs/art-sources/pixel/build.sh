#!/usr/bin/env bash
# Rebuild every game sprite in the house style. Run from this folder.
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

# 2. Aseprite: tagged masters and 2x sheets
cast() { # name cell tags
  wine "$A" -b --script-param dir="$(w "$PWD/stage/$1")" --script-param out="$(w "$PWD/src/$1.aseprite")" --script-param cell="$2" --script-param tags="$3" --script "$(w "$PWD/assemble.lua")"
  mkdir -p "$ART/$1"
  wine "$A" -b "$(w "$PWD/src/$1.aseprite")" --scale 2 --sheet-type rows --sheet-columns 10 --sheet "$(w "$PWD/$ART/$1/sheet.png")" --data "$(w "$PWD/src/$1-aseprite.json")" --format json-array --list-tags >/dev/null
  python3 -I sheetjson.py "src/$1-aseprite.json" "$ART/$1/sheet.json" $(( $2 * 2 ))
}
cast lenny 192 idle_s:10,walk_e:16,stand_s:1,stand_se:1,stand_e:1,stand_n:1
cast tk 256 stand_s:1,stand_n:1,asleep_s:1

# 3. Enemy sheets re-split without cut-off frames, then everything else gets the same finish
python3 -I ../enemy-sheets.py "$ORIG"
cp "$ORIG/chomper/sheet.json" "$ART/chomper/sheet.json"; cp "$ORIG/petalborn/sheet.json" "$ART/petalborn/sheet.json"
for f in wanderer/sheet wanderer/sheet-bloom wanderer/sheet-blight chomper/sheet petalborn/sheet; do
  python3 -I finish.py restyle "$ORIG/$f.png" "$ART/$f.png" --colors 40 --cell 384 384
done
for f in amulith/calm amulith/smug amulith/furious shard/shard props/amulith-gem props/blight-mushrooms props/blight-tree props/flower-bush props/mushrooms props/round-tree props/ruin-pillar props/tall-tree; do
  python3 -I finish.py restyle "$ORIG/$f.png" "$ART/$f.png" --colors 32
done
echo done
