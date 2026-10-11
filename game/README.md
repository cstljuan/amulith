# Amulith game scaffold

Requires Node.js 22.12+ (or 20.19+) and npm. From `game/`:

```sh
npm install
npm run dev
npm run build
npm run preview
npm test
```

Open the local URL printed by Vite. The canvas fills the viewport. The Wanderer walks across a 60 x 40 map with Mushroom Hollow on the left, Petal Glade in the center, and Rootdeep on the right. Placeholder art is drawn locally on a canvas; no external assets or CDN are used.

## Controls

| Action | Keyboard | Standard gamepad |
| --- | --- | --- |
| Move | WASD or arrows | Left stick (radial deadzone 0.2) |
| Pulse | Space | A |
| Dash | Shift | B |
| Ask | E | Y |
| Pause | Escape | Start |
| Judge | J | Back |
| Lower / raise lantern | Q / R | Left / right trigger |

Choose Bloom with 1 or Blight with 2 (0 pauses), or place the matching shrine figure. Movement, turning, pulse conversion (radius 3, cooldown 0.6 s), shrine pause/flip, and asks work. Dash, judge, and lantern gameplay effects are for later lanes. Click the game and press a gamepad button if the browser has not activated the controller. Nonstandard gamepads are ignored; keyboard remains available. Blur clears held input. Disconnect clears input and the next frame polls available controllers again.

## Configuration and contracts

`?remnant=host:port` defaults to `localhost:8765`. `?mock=1` sets the mock flag. Example: `http://localhost:5173/?remnant=10.37.2.234:8765`. Start `tools/mock-remnant` with its documented npm commands for local testing, then use `?mock=1`. The hello message labels the actual connection mode; the flag alone does not fabricate a live or mock service. The client connects to `ws://<remnant>/ws`, drops malformed messages, retries every 2 seconds, and sends state every 2 active simulation seconds. There is no queued replay of offline asks/events.

When disconnected, a same-contract scripted director emits every 25 active seconds. The land model starts half Bloom/half Blight, with Blight concentrated in Rootdeep. It exposes conversion, global/zone shares and batched changes; the visuals lane can subscribe to `land` to render individual cells. The scaffold's status text shows actual model shares rather than device telemetry. Null telemetry remains null in the event bus.

Local events: `connection` carries `{connected,mode}`, `land` carries `{changes,share}`, `spawn` carries protocol Spawn, `pulse-applied` carries `{x,z,faction}`, `ask` has no payload, and `game-event` carries the original GameEvent for forwarding. Send run events through this bus. `GameSession.state()` now derives all game state from the run, land, lantern, enemy and shard models.

Tests use Node's built-in runner plus the already-installed TypeScript compiler to load TypeScript modules. No test dependency was added. `npm test` exercises malformed data, reconnect/disposal, land, cooldowns, shrine semantics and fallback timing. Use a browser with the provided mock for integration; physical controller and Jetson checks remain separate.

## Run flow, enemies and shards

Attract waits for a figure or keyboard selection. A selected faction starts play. Empty shrine pauses and Esc cannot bypass an absent figure. Replacing the figure resumes; an opposite figure flips faction and enemy type while preserving progress. Three resolved shards win; zero HP loses. Ending holds for 20 simulation seconds and then returns to attract. The next run resets land, HP, shards, enemies, elapsed time and ask count. Run-duration balancing toward the five-minute target has not been measured yet.

Six fixed shard sites (two per zone) choose three active sites at each run start. Shards appear inside lantern radius. Stand within 1.4 units and hold pulse for 1.5 seconds to destroy (Bloom) or claim (Blight); moving, releasing, or pausing cancels the hold. `shards_found` in state reports the resolved/collected count. Nearest unresolved shard and zone are sent for director hints. Hints mark the named site even when false or inactive; the marker does not reveal or activate a collectible.

Chompers hunt Bloom; Petalborn hunt Blight. Enemies wander, chase, attack on touch for 0.1 HP at a one-second cooldown, and are defeated by two accepted pulse presses. Each slowly converts land under it. Grid A* has eight neighbors, octile cost, no diagonal corner cutting, and at most one replan per enemy every 0.5 seconds. The current map has no obstacles; the pure pathfinder supports blocked cells for future scenery integration. Live enemies are capped at 24.

Lantern value 0..1 comes from relic knob messages. Until the first relic message arrives, triggers or Q/R adjust it. Radius is `3 + 9 * value`; enemy detection is `4 + 10 * value`. Ask converts 3% of currently owned cells to the opposing faction (rounded to whole cells). Controller/keyboard asks send the protocol ask; relic button edges charge the same cost but never send a duplicate request because remnant handles the button itself.

UI/visuals interfaces: `run` carries `{phase,faction,hp,elapsed_s,shards,asks_used,result}`; `lantern` carries `{value,radius,detectionRange,source}`; `shards` carries the six site snapshots; `enemies` carries `{id,kind,state,x,z}[]`; `shard-resolved` carries `{id,zone,faction}`. `session.run`, `.lantern`, `.shards`, `.enemies`, and `.land` expose the authoritative models. `run_end` is forwarded with final faction/result/shards/asks/elapsed fields. No ending screens, audio, authored art, or device telemetry rendering are implemented in this lane. Enemy/shard views are original local placeholders.

Import shared protocol types with `import type { Director } from '@protocol/messages'`. Vite and TypeScript resolve this to the existing `../protocol` directory. Do not copy or modify protocol shapes.

`src/core/events.ts` exports `events.on(type, callback)` (returns an unsubscribe function) and `events.emit(type, payload)`. All remnant message events carry the complete protocol object, including `type`. Local `pulse` carries `{x, z}`, `faction` carries `{faction}`, and `pause` carries `{paused}`. Emit pause to control scaffold movement. Extend the typed event map as later lanes introduce behavior.

`Input.poll()` runs once per animation frame. `input.actions` exposes movement, booleans and lantern delta; `pressed(action)` is true only on the press frame and `held(action)` reports the current value. Process edge actions in the frame callback, not in every fixed update. Movement uses world X/Z, with negative input Y moving toward negative Z. Maximum walk speed is 6 world units/s; diagonals are normalized and analog magnitude scales speed.

The loop uses a 60 Hz fixed simulation with a 100 ms elapsed-time clamp and interpolated player rendering. Camera pitch is 50 degrees and follow smoothing is time-based. Tab visibility changes reset accumulated time. Device pixel ratio is capped at 2; renderer, listeners, and GPU assets are disposed on Vite hot replacement. Hardware performance remains to be measured on the Jetson under integrated load.

## Ownership

| Folder | Lane |
| --- | --- |
| Scaffold files, `src/core`, `src/world`, `src/player`, `src/input` | game-core |
| `src/rules`, `src/enemies`, `src/pathfinding`, `src/net` | game-rules |
| `src/fx`, `src/render`, `public/art` | visuals |
| `src/ui`, `src/audio` | ui-audio |

The small HTML title and controls are scaffold placeholders, ready for the ui-audio lane. The Wanderer texture is original procedural placeholder art. No third-party art is included. Three.js supplies rendering; Vite supplies development/build tooling; TypeScript and the approved `@types/three` development package supply static checks.

## Forest progression

A run resolves one randomly chosen shard from two sites in each level: Shrine Grove, Mushroom Hollow, then Rootdeep. Hold Space (controller A) for 1.5 seconds next to a revealed shard, then walk into the gold exit ring. A short paper curtain loads the next level. Faction, land, HP, elapsed play time, asks, lantern and resolved shard identities carry between levels. The final Rootdeep exit wins the run; resolving its shard alone does not end it.

For judge fixtures, use `?level=grove`, `?level=hollow` or `?level=deepwood`. Choose Bloom with 1 or Blight with 2 as usual. Direct Hollow and Rootdeep starts seed one or two previous shards; these are controlled skipped-level fixtures. Keyboard WASD/arrows move, Q/R adjusts the lantern, Space holds/pulses, Shift dashes, E asks and Escape pauses. All ordinary actions retain their standard-controller equivalents.

Level definitions live in `src/levels/`. The dedicated Hollow and Rootdeep layout tasks replace their initial scaffold data. Existing art cards and floor materials remain placeholders; the art lane owns new sprites and tiles. Progression IDs differ from protocol zones. The wire state has no progression-level field yet, so the Remnant can only see the existing region until the platform lane extends the contract.
