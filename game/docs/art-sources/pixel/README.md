# Pixel cast pipeline (Aseprite)

Lenny and T.K. are pixel art made from the official Knight Hacks IX reference art (Lore page sheets and the IX site walk and blink animations, collected in the local `amulith-assets/knight-hacks-reference/` folder with a SOURCES.md; not committed, it is Knight Hacks' art).

1. `pixelate.py <spec>.json`: keys the background, crops each animation with one shared scale, area-downscales, snaps to the character's palette (sampled from the official swatches), keeps the official ink lines, drops stray bits, despeckles and outlines. Native size: Lenny about 120 px tall, T.K. about 168 px, in 192 px cells.
2. `moss.py`: T.K. asleep, the front sprite overgrown with moss, berries and vines after the IX hero art. Seeded.
3. `assemble.lua` (Aseprite CLI, `aseprite -b --script-param ... --script assemble.lua`): builds `src/<name>.aseprite` with one tag per animation, feet on the bottom edge.
4. Aseprite export: `aseprite -b src/<name>.aseprite --scale 2 --sheet-type rows --sheet-columns 10 --sheet public/art/<name>/sheet.png --data src/<name>-aseprite.json --format json-array --list-tags`, then the tag ranges become `sheet.json` (384 px frames, 10 columns).

`contact.py` makes a zoomed review sheet. The `.aseprite` files in `src/` are the editable masters.

Animations: Lenny `idle_s` (official blink, held), `walk_e` (16 frame official walk), `stand_s`, `stand_se`, `stand_e`, `stand_n`. T.K. `stand_s`, `stand_n`, `asleep_s`.
