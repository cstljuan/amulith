# Amulith audio

Owned by lane:ui-audio. `installAudio` is installed by the UI, so no main/core hook is needed.
It consumes the existing faction, pulse, game-event, pause and speech events. The first
keyboard/pointer input or controller action attempts to unlock Web Audio. If the browser
requires a keyboard or pointer gesture, the screen offers an Enable sound button.

Two synchronized local loops crossfade over about 1.5 seconds on faction changes. Music
ducks while remnant speech actually plays and recovers on completion, error or buffering.
Pause lowers music. Volume and mute in the pause menu apply to music, effects and speech,
and persist in browser storage. No offline action queue replays effects later. One-shots
are limited to eight concurrent sources. Disposal stops voices, loops and effects.

Every WAV is an original CC0 composition/cue; see `public/audio/SOURCES.md`. Reproduce:

```sh
python3 src/audio/make-audio.py
```

Run `npm run build` and `npm test`. For the additional real-browser audio checks, start
the dev game on port 5174 and use an existing Playwright installation (no game dependency):

```sh
AMULITH_PLAYWRIGHT_MODULE=/path/to/playwright node src/audio/browser-check.mjs
```

The browser check uses controller and ending fixtures. It does not claim a physical
controller, live generated voice, complete five-minute judging run or target-device GPU test.

Set `AMULITH_PRODUCTION_URL` to a locally served production build for an additional
fresh-context check with all external HTTP and WebSockets blocked. `VERIFICATION.md`
records the actual local checks and separate Jetson production measurements.
