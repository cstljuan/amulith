# Amulith

A forest story game built by Juan Castillo and Lawrence Capistrano at Knight Hacks IX, UCF, October 2026. The original build ran local Qwen inference on a borrowed NVIDIA Jetson Orin Nano. The portable story edition runs in a desktop browser without the board, camera, Arduino, model, account or API key.

A broken thing is still listening. Choose Bloom to break the shards and wake the Knight, or Blight to return them to the gem. Explore Shrine Grove, Mushroom Hollow and Rootdeep, talk to six original forest spirits, and keep what you hear in a local chronicle.

The portable edition includes 696 unique authored dialogue beats, about 7,900 words, 12 faction-specific branching conversations and four ending sequences. Its dialogue reacts to events and player state; it is scripted, not live inference. The original hardware source is preserved under `remnant/`, `firmware/` and `case/`.

## Play on your computer

```sh
cd game
npm ci
npm run dev
```

Click Bloom or Blight, or press 1 / 2. WASD or arrows move; Space pulses and holds at a shard; Shift dashes; F talks; E asks for a direction; Q / R change the lantern; Esc pauses. A standard controller also works. Story mode reduces damage, and Challenge mode keeps original damage. Conversations pause the world. Endings wait for explicit replay.

`npm run build` creates a static, installable browser build with all game assets and a service worker. Offline availability begins after its initial cache completes. A portable download can run the same build on localhost with Python 3 and no third-party Python packages; see `tools/portable/`.

To use the original device service explicitly, add `?remnant=HOST:8765`. An HTTPS page uses a secure WebSocket; the device endpoint must support it, or use the local HTTP build. Hardware is never contacted by default.

## Verification and portfolio

Run `npm test` and `npm run build` in `game/`. The portable preview workflow runs browser integration and offline-production checks before publishing to `gh-pages` under `story/`. Full-run browser fixtures use controlled positions and real shard holds, not measured human playtime.

- [Portable edition audit and launch notes](docs/portfolio/portable-edition.md)
- [Complete authored script](docs/story-script.md)
- [LinkedIn draft](docs/portfolio/linkedin.md)
- [Figma identity](https://www.figma.com/design/rn6yGida1u6Qg3KAK0vSnB/Untitled?node-id=17-3)
- [Devpost portfolio page](https://devpost.com/software/amulith)

The Devpost project was saved but was not finalized as a Knight Hacks IX competition submission. No award or official competition entry is claimed.

[Amulith landing page](site/README.md)

## Repo layout

| Folder | What lives there |
|---|---|
| `game/` | The 2.5D paper-style web game (runs in a browser on the Jetson) |
| `remnant/` | Jetson service: LLM director, shrine vision, voice, Arduino bridge, telemetry |
| `firmware/relic/` | Arduino sketch for the relic (knob, button, green LED) |
| `case/` | Parametric CAD and STL for the printed hill |
| `protocol/` | The message contract between the game and the Jetson service |
| `tools/mock-remnant/` | Fake Jetson service so the game can be built on a laptop |

## Credits

Knight Hacks IX lore, Lenny, and T.K. belong to the Knight Hacks design team. This is a non-commercial fan project made at their event.
