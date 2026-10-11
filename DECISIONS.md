# Decisions

Newest first. Add entries instead of rewriting old ones. Every agent reads the LOCKED SPEC before working.

## 2026-10-11 12:20 AM: Art direction changes to HD-2D (replaces spec section 7 paper look)
- Who decided: Juan Castillo (references: Octopath Traveler and Sea of Stars, shared by Lawrence on Discord 10:19 PM), written up by Claude Code.
- World: a 3D diorama (tiered cliffs, water, foliage) with pixel-art sprite characters on billboards, in the HD-2D style. Tilt-shift blur, soft glow on light sources, vignette and color grade in one post-processing pass. Knight Hacks lore unchanged.
- Light carries the faction: Bloom is golden day, Blight is violet night. The lantern is a real warm point light.
- GPU budget: the LLM shares the GPU, so render at most 1920 x 1080, no shadow maps (contact shadows instead), one post pass, and measure in judge mode after each effect.
- Scope: one hero zone fully detailed around a stone-circle shrine; other zones are recolors (cut order item 3).
- Unchanged from section 7: accessibility (subtitles, colorblind-safe factions by light and shape, reduced motion, controller prompts), credits to the Knight Hacks design team, no decorative dot grids or halftone textures. Fireflies and spores are in-world particles, kept few.
- Assets: Juan's sketches as reference, refined in Aseprite (sources generated with GPT Image). Every generated asset is listed in game/public/art/CREDITS.md.
- The physical papercraft shrine stays.

## 2026-10-10 8:00 PM: LOCKED SPEC, Amulith v1
- Who decided: Juan Castillo and Lawrence Capistrano, written up by Claude Code.
- Changes to this spec need Juan's approval and a new dated entry below it in this file.

### 1. One-line pitch
The thing the shattered gem left behind is real, and it lives inside the Jetson: a Knight Hacks lore game that runs entirely on an NVIDIA Jetson Orin Nano, where an on-device open-source LLM plays the gem's consciousness, a camera reads which Lenny figure stands on a printed shrine, and an Arduino relic is part of play. No internet needed.

### 2. Lore (Knight Hacks IX canon, do not contradict)
- The gem shattered at the end of Knight Hacks VIII. Lenny was freed from its control. The pieces sank into the soil, roots wrapped them, a forest grew too fast.
- The amulet is six shards in different biomes. Its curse has turned half the forest toxic.
- T.K. (the knight: armor, helmet, sword, energy) went missing in the forest; he lies moss-covered beside Lenny and will not wake.
- "Something left behind by the gem is still awake deeper in the enchanted forest." In our game that something is **Amulith**.
- Factions: **Bloom** (Whisperseed, Dryad, Petalborn) destroys the shards to free T.K. and Lenny. **Blight** (Chomper, Spora, Collosus) gathers them to keep the forest corrupted. Class names appear as flavor in dialogue.
- Credit the Knight Hacks design team for Lenny, T.K. and the lore in the game credits and on Devpost. Non-commercial fan project.

### 3. The physical setup
| Item | Role |
|---|---|
| Jetson Orin Nano Super Dev Kit 8 GB | Runs everything: game, LLM, vision, voice, Arduino bridge, telemetry |
| Printed hill (white PLA, under 60 min) | Low-poly papercraft hill over the Jetson. Open top crater, open bottom, open back. Right-side shrine ledge with a ring recess. Front gem window for the LED. Front relic pad for button and knob. This hill IS "the Amulith". |
| Webcam (Logitech Brio 101) | Fixed, aimed at the shrine. Recognizes: sleepy Lenny, angry Lenny, empty, hand reaching |
| Sleepy Lenny figure | Placing it starts a **Bloom** run |
| Angry Lenny figure (petal hat) | Placing it starts a **Blight** run |
| Arduino Uno + Grove | Button = "Ask Amulith". Rotary knob = lantern radius. Green LED in the gem window = Amulith's heartbeat |
| Xbox controller (GameSir G7 HE) | Movement and actions. Duplicates every relic action as a fallback |
| TV or monitor | Display and audio. Fallback: laptop browser renders the game, Jetson still runs all AI over the USB-C link (192.168.55.1) |

### 4. A run (about 5 minutes, fits a 6-minute judging slot)
1. **Attract:** paper forest idles on screen, LED breathes slowly. Amulith whispers: "Place him on the stone."
2. **Choice:** a figure is placed. Camera classifies it. Paper theater curtains open. Sleepy = Bloom "Wake the Knight". Angry = Blight "Feed the Gem".
3. **Play:** the Wanderer explores three zones (Mushroom Hollow, Petal Glade, Rootdeep) to find 3 of 6 shard sites.
   - Pulse (controller A) converts nearby ground to your faction (flowers or purple veins). Land share is always visible.
   - Lantern (knob): wide light reveals hidden shards but raises enemy aggression; narrow light hides you.
   - Enemies of the opposite faction (Chomper vs Bloom players, Petalborn vs Blight players) chase with A* pathfinding and reconvert land.
   - Amulith (LLM) speaks about every 25 s and on events. It lies and tempts Bloom, flatters Blight. It also decides where corruption spreads and what spawns.
   - Relic button "Ask Amulith": LED flickers, GPU meter spikes, Amulith answers with a riddle about the nearest shard (true or a trap). Each ask costs land.
   - LED pulses faster near a shard, goes solid when a shard is destroyed or claimed.
4. **Twist:** lifting the figure pauses (curtain falls, "Put him back."). Placing the other figure flips the whole world mid-run ("So your heart changed.").
5. **Endings:** Bloom: last shard shatters, T.K. stands, LED solid then dark. Blight: shards fuse, treeline closes, LED burns steady. Amulith gives a closing line about how you played.
6. **Judge mode overlay** (toggle): GPU %, tokens/s, power, temperature, live shrine class and confidence.

### 5. What the Jetson does (exact jobs)
1. **LLM director:** llama.cpp built with CUDA, a ~3B instruct GGUF from the Hugging Face Hub (fallback 1.5B). Output is constrained by a JSON schema: `{line, mood, spread, spawn, hint}`. A scripted director with the same schema takes over automatically on timeout or error.
2. **Shrine vision, trained on-device:** capture a few hundred webcam frames per class on the Jetson, fine-tune a small pretrained HF vision model on the Jetson GPU, export to TensorRT, run live. Publish the model and dataset to the HF Hub.
3. **Voice:** ElevenLabs for live lines when online; fixed lines pre-generated with ElevenLabs and cached on the Jetson; Piper TTS on-device when offline. API key only in `.env` on the Jetson.
4. **Relic bridge:** USB serial to the Arduino (knob, button in; LED mode out).
5. **Telemetry:** tegrastats stream for judge mode.
6. **Serving the game:** the built game is served locally and opened fullscreen in a browser kiosk on boot.

### 6. Tech stack
- `game/`: Vite + TypeScript + Three.js. Tilted 3D camera, paper cutout characters as flat planes (billboards) that flip when turning, layered paper scenery. Gamepad API plus keyboard.
- `remnant/`: Python 3.12, FastAPI, one WebSocket. llama.cpp server on localhost.
- `firmware/relic/`: one Arduino sketch (knob A0, button D2, LED D3 PWM).
- `protocol/`: the only contract between `game/` and `remnant/`. `tools/mock-remnant/` fakes the Jetson so the game is built without one.
- `case/`: build123d (Python) source and STL.

### 7. Art direction
- Storybook paper world: real paper textures (kraft, watercolor, cardboard), torn edges, cutout characters with thick black outlines and flat colors, soft shadows between layers.
- Cast (Juan sketches, AI-assisted cleanup, code animates): the Wanderer (5 poses + back view, plus flower crown and mushroom cap hats), Chomper (3 poses), Petalborn (3), T.K. (asleep, awake), Lenny (sleepy, angry), Amulith face (calm, smug, furious), shard. Props: trees, mushrooms, flowers, bush, rock, grass, log.
- Animation is code driven: pose swaps, bob, squash and stretch, paper flip on turn, hit wobble.
- Accessibility: subtitles for every line, colorblind-safe Bloom and Blight palette (not red and green alone), reduced motion setting, on-screen controller prompts.
- Never decorative dot grids or halftone textures.

### 8. Prizes and judging rooms
- Automatic: Best Overall, Best AI, Best Embedded, Best Game.
- Opt in (one room each, teams walk to the judges): NVIDIA Best Use of Jetson, Hugging Face, Figma Best Design, Adobe Prettiest, MLH (ElevenLabs + GoDaddy domain). Encompass optional.
- Not entered: Full Sail, BNY, NextEra, OneEthos, AMD, Databricks, Neon, other MLH, First Time Hack.

### 9. Lanes and file ownership
| Lane | Runs on | Owns |
|---|---|---|
| `lane:platform` | Claude Code, Juan's laptop | `remnant/`, `protocol/`, `tools/mock-remnant/`, Jetson setup, kiosk |
| `lane:firmware` | Claude Code subagent | `firmware/` |
| `lane:case` | Juan's Codex (now) | `case/` |
| `lane:game-core` | Lawrence's Codex 1 | `game/` scaffold, `game/src/core/`, `game/src/world/`, `game/src/player/`, `game/src/input/` |
| `lane:game-rules` | Lawrence's Codex 2 | `game/src/rules/`, `game/src/enemies/`, `game/src/pathfinding/`, `game/src/net/` (consumes protocol) |
| `lane:visuals` | Juan's Codex 1 | `game/src/fx/`, `game/src/render/`, `game/public/art/` pipeline |
| `lane:ui-audio` | Juan's Codex 2 | `game/src/ui/`, `game/src/audio/` |
| Humans | Juan: sketches, Figma, art review, print submission, pitch, video, Devpost. Lawrence: merges game PRs, Jetson testing, Devpost team and roster, Q&A rehearsal. |

Game lanes other than game-core start after the scaffold PR merges.

### 10. Timeline and gates (Saturday night to Sunday)
| Time | Milestone |
|---|---|
| 8:00 to 9:00 PM | Spec, protocol, issues, mock server. Hill STL; Juan submits the print by 9:00. |
| 9:00 PM | game-core scaffold merged; all lanes running. |
| 10:00 PM | Gate A: the game renders smoothly in the Jetson browser, else the laptop-render fallback. Gate B: LLM returns valid JSON in under 6 s, else the 1.5B model. |
| 11:30 PM | First full run on the Jetson with the real service. |
| Midnight | Leave for the hotel with the Jetson. Reconnect on the phone hotspot. |
| 12 to 3 AM | Vision training, voice, relic, endings, polish. |
| 3:00 AM | Feature freeze. Bug fixes and polish only after this. |
| 7:00 to 8:30 AM | Record video (real gameplay plus build footage), write Devpost. |
| 9:00 AM | Devpost submitted (hard deadline 10:00). |
| 11:00 AM | Final code push. Nothing after. |
| 12 to 4 PM | Judging. Rehearsed 2-minute setup per room. |

### 11. Cut order (first to go)
1. Encompass room
2. Mid-run figure swap (keep faction choice at start)
3. Second and third zone art (one zone, recolored)
4. ElevenLabs (Piper only)
5. Voice entirely (subtitles only)
6. Arduino relic (controller covers it)
7. Trained vision model (pretrained zero-shot or controller faction pick)
8. LLM (scripted director). The game always ships.

### 12. Honesty rules
- Say exactly what is generated live and what is scripted. No invented metrics, users, or results.
- Judge mode shows real numbers from the device only.
