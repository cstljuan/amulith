# Protocol: game <-> remnant

The only contract between `game/` (browser) and `remnant/` (Python service on the Jetson). Owned by `lane:platform`. To change a message, open an issue labelled `lane:platform`; never edit these shapes from another lane.

TypeScript types: [`messages.ts`](messages.ts). The game imports them, it does not redefine them.

## Connection

- One WebSocket: `ws://<host>:8765/ws`. `<host>` is `localhost` when the game runs on the Jetson, `192.168.55.1` (USB-C link) or the Jetson's Wi-Fi IP when the game runs on a laptop. The game reads it from the `?remnant=` URL parameter, default `localhost:8765`.
- Audio files: `http://<host>:8765/audio/<id>.mp3`.
- Every message is one JSON object with a `type` field.
- The game must keep working if the socket is down: reconnect every 2 s, and run its own scripted director meanwhile.

## remnant -> game

| type | When | Fields |
|---|---|---|
| `hello` | On connect | `version`, `mode` (`live` or `mock`), `llm_ready`, `shrine_ready`, `relic_ready` |
| `shrine` | When the class changes (debounced ~0.5 s) | `state` (`empty`, `sleepy`, `angry`, `hand`), `confidence` 0..1 |
| `relic` | Knob change > 2% or button edge | `knob` 0..1, `button` (`down` or `up`) |
| `director` | About every 25 s, on key events, and after an `ask` | `id`, `line`, `mood` (`calm`, `smug`, `furious`), `spread` or null, `spawn` or null, `hint` or null, `source` (`llm` or `scripted`), `latency_ms` |
| `speech` | When audio for a `director.id` is ready | `id`, `url`, `duration_ms`, `engine` (`elevenlabs`, `cached`, `piper`) |
| `thinking` | LLM starts or stops generating | `active` (bool) |
| `telemetry` | Every 1 s | `gpu_pct`, `cpu_pct`, `ram_used_mb`, `ram_total_mb`, `power_mw`, `temp_c`, `tok_s` (last generation, or null). Any field may be null when the device does not report it; show it as unavailable, never 0. |

`spread`: `{ zone, amount }` where `zone` is `hollow`, `glade`, or `rootdeep` and `amount` is 0..1 (share of that zone to flip toward Amulith's side).
`spawn`: `{ kind, count, zone }` where `kind` is `chomper` or `petalborn`, `count` 1..4.
`hint`: `{ shard, riddle, truthful }` where `shard` is a shard id `s1`..`s6`.

Note: Amulith always pushes toward Blight. In a Bloom run `spread` corrupts land; in a Blight run it helps the player, and `spawn` sends Petalborn.

## game -> remnant

| type | When | Fields |
|---|---|---|
| `state` | Every 2 s during a run | `faction` (`bloom`, `blight`, or null), `zone`, `shards_found`, `shards_total` (3), `land` `{bloom, blight}` 0..1, `hp` 0..1, `lantern` 0..1, `enemies_near`, `elapsed_s`, `asks_used`, optional `nearest_shard` and `nearest_shard_zone` (aims hints) |
| `event` | On game events | `kind` (`run_start`, `shard_found`, `shard_resolved`, `player_hurt`, `faction_flip`, `run_end`), `data` (free object, small) |
| `ask` | Player pressed "Ask Amulith" on the controller (the relic button is handled inside remnant) | none |
| `led` | Game wants a specific LED mode | `mode` (`idle`, `thinking`, `near`, `solid`, `off`), `level` 0..1 |

## Ownership of behavior

- remnant decides WHEN Amulith speaks and WHAT it says. The game only applies `spread`, `spawn`, `hint` and shows `line`.
- The relic button triggers an ask inside remnant directly; remnant still sends the resulting `director`.
- The LED is driven by remnant by default (`thinking` while generating); `led` from the game overrides for shard proximity and endings.
