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

Task B local events: `connection` carries `{connected,mode}`, `land` carries `{changes,share}`, `spawn` carries protocol Spawn, `pulse-applied` carries `{x,z,faction}`, `ask` has no payload, and `game-event` carries the original GameEvent for forwarding. Send run events through this bus. `GameSession.stateExtra` is an extension point for enemy/shard/run values in Task C.

Tests use Node's built-in runner plus the already-installed TypeScript compiler to load TypeScript modules. No test dependency was added. `npm test` exercises malformed data, reconnect/disposal, land, cooldowns, shrine semantics and fallback timing. Use a browser with the provided mock for integration; physical controller and Jetson checks remain separate.

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
