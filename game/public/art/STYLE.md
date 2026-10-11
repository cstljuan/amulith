# Amulith art style sheet

Updated 2026-10-11 12:20 AM: the world is HD-2D (see DECISIONS.md, entry of that time). The earlier paper storybook version of this sheet is in git history. Juan's final palette notes replace section 3 when they arrive.

## 1. The look

Detailed pixel-art sprites standing in a lit 3D diorama, like Octopath Traveler and Sea of Stars, telling Knight Hacks lore. Reference key art: `game/docs/keyart/keyart-a.jpg` (shrine with the gem's eye, Bloom left, Blight right). Every generated asset attaches it, or the last approved asset, as the reference.

## 2. Assets

- Characters: full body, 3/4 view facing **right** (code mirrors left), feet at the bottom, chibi JRPG proportions (about 2.5 heads), transparent background, no baked shadow. The approved Wanderer (`game/docs/art-sources/wanderer-idle.png`) is the scale and detail reference for the cast.
- Props: single isolated object, 3/4 top-down view, warm light from the upper left, base at bottom center, transparent background.
- Ground and cliff tiles: straight top-down (cliff: flat front), opaque, tileable. Code mirror-repeats them to hide seams.
- Files: `game/public/art/<group>/<name>.png`. Props are trimmed and fitted to their in-game card (512 px tall) by `game/docs/art-sources/fit-props.py` (sheets: `build-sheet.py`); sources stay in `game/docs/art-sources/`, not in the shipped build.
- Sprite sheets: `<name>/sheet.png` plus `sheet.json` (`frameWidth`, `frameHeight`, `columns`, `fps`, `animations`). Frames 384 x 384, up to 10 per row, feet on the bottom edge.

Prompt base for props: "Single isolated game asset matching the attached reference art style exactly: <object>, detailed HD-2D pixel art, seen from a 3/4 top-down camera, warm light from the upper left. Base at bottom center. Transparent background, no text."

## 3. Color and light

- Bloom is golden late-afternoon day: leaf greens, cream, petal pink, gold light.
- Blight is violet night: deep violet and indigo ground, glowing sickly chartreuse veins, the lantern is the main light.
- Colorblind rule: the factions are told apart by light vs dark and by shape (flowers vs veins and thorns), never by hue alone. Gold vs chartreuse is never the only signal.
- Never decorative dot grids, halftone fields or scattered dot textures. Fireflies and spores are in-world particles and stay few.

## 4. Typography (UI)

Bundled locally because the Jetson runs offline, both SIL Open Font License: a display face for titles and Atkinson Hyperlegible Next for dialogue, HUD and judge mode. Display face to be picked to match the pixel look (to confirm with Juan).

## 5. Motion

Frame animation from sheets, plus code: walk bob, idle breathe, turn flip (scale x eases through zero), hit wobble and flash, flowers popping up, veins creeping, pulse ring, day/night crossfade on faction flip. Reduced motion (`?reducedMotion=1` or the OS setting) keeps every state change and drops the movement.

## 6. GPU budget (proposed, measure on the Jetson)

The LLM shares the GPU. At most 1920 x 1080 drawing buffer, no shadow maps (contact shadows), one post pass (`?post=0` turns it off for comparison), instanced scenery and land sprigs, textures at most 1024 px. Record judge-mode GPU percent with the LLM running in each visuals PR.
