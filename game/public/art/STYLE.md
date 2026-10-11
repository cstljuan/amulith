# Amulith art style sheet

Locked 2026-10-11 for issue #6 and #7. Every sketch, GPT refinement, cutout, texture and UI screen follows this sheet. If it disagrees with the LOCKED SPEC in `DECISIONS.md`, the spec wins. Change a value here, not in code comments, and code reads it from `src/render/palette.ts`.

## 1. The world in one sentence

A storybook told with paper: a stage of kraft, watercolor and cardboard, where the cast are stickers cut from it, and the forest is redrawn in flowers or in veins depending on who is winning.

## 2. Characters (cutouts)

- Flat paper cutout. Thick black outline (about 6 px at 512 px tall), flat fills, at most one flat shade per color. No gradients, no rendered lighting, no texture inside the fill.
- A thin white paper border outside the outline, like a sticker cut (about 8 px at 512 px tall), color `paper` below.
- Soft drop shadow is drawn by code, not in the PNG. Keep the PNG shadow-free.
- 3/4 view facing **right** for every character and pose. Code mirrors for left. Never draw a left-facing pose.
- Feet (or base) touch the bottom edge of the trimmed image, horizontally centered. Code pivots there.
- The Wanderer wears neutral clothes (cream, ink, kraft tones) so code can tint by faction. Hats are separate PNGs.
- Line style reference: Juan's Lenny head sketch from 2026-10-10. Every new asset attaches the last approved asset as the GPT reference.

GPT refinement instruction, same every time:

> flat colors, thick black outline, paper cutout with a thin white border, plain white background, 3/4 view facing right, consistent with the attached reference

## 3. Palette (exact values, reuse only these)

Faction is read from **lightness and shape first, hue second**. Bloom land is light paper with flowers. Blight land is dark paper with veins. That holds for protanopia, deuteranopia and tritanopia.

| Token | Hex | Use |
|---|---|---|
| `ink` | `#1E1813` | Outlines, text on paper, UI rules |
| `paper` | `#FBF6EA` | Sticker borders, dialogue card, light UI surfaces |
| `shadow` | `#1E1813` at 30% | Contact shadows under cutouts and layers |
| `bloom-ground` | `#E9DDB8` | Bloom land, warm cream |
| `bloom-leaf` | `#6FA35A` | Leaves, stems, Bloom accents |
| `bloom-petal` | `#EBA3B8` | Petals, Petalborn |
| `bloom-gold` | `#E0AE3A` | Light, lantern glow, Bloom highlights, T.K. energy |
| `blight-ground` | `#3D2852` | Blight land, deep violet |
| `blight-indigo` | `#2C3168` | Blight shade, Chomper body, night outside the lantern |
| `blight-vein` | `#C7DC45` | Veins, Chomper mouth, Blight highlights (sickly chartreuse) |
| `hollow-kraft` | `#B99A6B` | Mushroom Hollow base paper |
| `glade-wash` | `#CFD5AE` | Petal Glade base paper |
| `rootdeep-board` | `#8C7B66` | Rootdeep base paper |

Measured with WCAG relative luminance and the Machado 2009 color vision simulation at full severity:
- `bloom-ground` vs `blight-ground`: 9.55:1, stays light vs dark in all three simulations.
- `blight-vein` on `blight-ground`: 8.47:1.
- `bloom-gold` vs `blight-vein`: 1.34:1, and both turn yellow under deuteranopia. **Never use gold vs chartreuse as the only faction signal.** Pair any faction color with a shape (flower vs vein) or a light vs dark ground.
- Petal and leaf on cream are low contrast (1.5 and 2.2:1). They are decoration; anything the player must read gets an `ink` outline.

Corrupted props are made by code: shift toward `blight-indigo`, darken, add `blight-vein` veins. Bloom props get `bloom-petal` and `bloom-gold` blossoms. Do not draw separate corrupted props unless time allows.

## 4. Paper textures

- Real photographs only: kraft, watercolor, cardboard. Photograph flat, even daylight, no shadows or glare, fill the frame, 1024 x 1024 crop, JPG.
- Used multiplied over the palette colors at low strength so grain shows and color stays exact.
- **Never** decorative dot grids, halftone fields or scattered dot textures. Real paper grain is the only texture.
- Edges between zones and layers are torn paper (irregular, with a lighter fibrous rim), not straight cuts.

## 5. Typography

Bundled locally (the Jetson runs offline). Both are SIL Open Font License.

| Role | Face | Why |
|---|---|---|
| Display: title, endings, zone names | IM Fell English (Regular, Italic) | Old letterpress storybook type with real ink irregularity, fits paper |
| Text: dialogue, HUD, judge mode, settings | Atkinson Hyperlegible Next | Built for low-vision readability; numbers in judge mode must read across a room |

"AMULITH" is hand-lettered by Juan if time allows and replaces the display face in the logo only. Subtitles default to 28 px at 1080p, settings scale them.

## 6. Files

- Path: `game/public/art/<character>/<pose>.png`, lowercase, hyphens. Example `wanderer/walk-a.png`, `amulith/smug.png`, `props/tall-tree.png`, `paper/kraft.jpg`.
- Transparent PNG, trimmed to content, 512 px tall (props may be up to 1024 px tall), width whatever the art needs.
- Background removal model used for cutouts gets its Hugging Face model name written in `game/public/art/CREDITS.md`, with every asset's origin (Juan sketch plus AI-assisted cleanup, or photo).
- Lenny, T.K. and the lore belong to the Knight Hacks design team. Credit them in `CREDITS.md`, the in-game credits and Devpost.

## 7. Motion (code driven)

Pose swaps, walk bob, squash and stretch, Paper Mario flip on turn (scale x through 0), hit wobble, flowers unfolding, veins creeping, page-turn wipe on faction flip. Reduced motion keeps every state change and removes bob, wobble, ripples and wipes (cut to the new state).

## 8. Performance budget (proposed, not measured)

Shared GPU with the LLM. Render at most 1920 x 1080. Character and prop textures stay under 1024 px on the long side. Land cells render as one instanced or texture-mask draw, not one mesh per cell. Measure in judge mode after every visual feature and record the number in the PR.
