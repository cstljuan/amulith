# Audio, dash and shrine interaction verification

2026-10-11, Juan Castillo, `ui-audio/relic-sound`, based on main `bb432e6`.

## Changes and scope

Two synchronized CC0 music loops and seven cues are local WAV files. Audio starts after
input, fades between factions, lowers while paused and ducks during supplied speech.
Pause settings control volume/mute for all audio and persist. No dependencies were added.
Dash consumes Lawrence's accepted dash event and shows the approved frame for 0.18 s.
X/F near the gem displays a cooldown-limited, explicitly scripted faction-specific line.
Outside the shrine, while paused or while the director is thinking, it does nothing.

Core, input, rules, player, enemies, main.ts, protocol and hardware services are unchanged
by this branch. Only the dash subscription touches rendering. Item holding and T.K./Lenny
art are deferred after Juan narrowed the task to audio and then requested dash/interact.
The sketches are not finished; world/art work continues separately.

## Build and automated checks

- TypeScript and Vite production build passed. Existing large-bundle warning remains.
- All 21 repository tests passed, including Lawrence's obstacle and dash checks.
- Chromium integration fixtures verified silent attract/reload, controller start, two
  looping sources, pulse/found/resolved/hurt/faction cues, faction gain targets, real
  HTML audio playback ducking and recovery, failed-speech recovery, pause volume/mute,
  persistent settings, near/far shrine interaction, the dash texture frame and an ending.
- Browser console exceptions and missing bundled audio responses: none.
- A fresh production browser context passed silent start and both local loops with
  external HTTP and all WebSockets blocked. No external assets were attempted.
- Python synthesis produces bounded stereo 22050 Hz PCM without third-party samples.
  Both music loops last 26.667 s, peak at 0.641 of full scale and have stereo seam jumps
  below 0.0039. Effects have silent endpoints and last 0.22 to 1.36 s.

The local browser fixtures use a 240-row render cap and no post pass to avoid software
renderer screenshot stalls. Their frame rates are not Jetson measurements. The controller
and ending checks are fixtures, not a physical GameSir or full five-minute run. Speech
ducking uses a local cue as its audio fixture, not a live TTS service.

## Jetson production test

A production copy was served from `/tmp/amulith-audio-qa/dist` on the Jetson. A dedicated
Firefox profile opened the game fullscreen at 3840 x 2160 with a 1920 x 1080 drawing buffer.
The existing game deployment and both amulith services were preserved. The test browser,
temporary HTTP server, driver and SSH tunnel were closed after measurement.

The LLM and remnant services were active. A real ask returned an LLM line in 5.4 s in the
default case and 5.0 s without post. Judge mode reported live telemetry and Audio running.
Each case recorded 30 samples about one second apart; 28 samples per case were playing
and outside the UI's thinking state. Numbers below are means of those 28 samples.

| Case | GPU | Frame rate | Power | Temperature |
|---|---:|---:|---:|---:|
| Default post | 79.04% | 54.04 fps | 15.16 W | 58.66 C |
| `?post=0` | 77.79% | 56.93 fps | 14.80 W | 60.65 C |

Raw judge-mode samples: `jetson-metrics-2026-10-11.json`. These are combined-device
measurements: the existing Firefox game windows and other hardware workloads were not
closed or controlled. Telemetry arrives about once per second, so a thinking transition
can lag the resource sample. GPU peaks reached 98%/97%; load did not stay above 85%.
The short, sequential windows do not establish a causal post-processing improvement or
an isolated benchmark. No flower/post settings were changed during the audio task.

The measured JavaScript asset was `index-LCnseasQ.js`. Subsequent UI polish adds the B/Dash
HUD label, bounds the volume cycle and hides the judge panel behind the pause menu on
narrow viewports; audio assets, mixing, world, post and render budget are identical to
the measured build.

## Remaining checks

Physical controller/audio output listening, real voice-engine playback and a complete
judging-length run remain separate checks. The shared Jetson game-dist was not replaced
while the parallel world/art session was active. Merge and integrated deployment remain
with the team. The passing local audio tests and temporary fullscreen deployment are not
a claim that vision, voice, all failures or the whole judging build are fully verified.
