---
name: offline-game-qa
description: "Verify a portable browser-game judging build with offline assets, mock and hardware modes, failure injection, accessible inputs and honest demo telemetry."
---

# Offline game QA

Use before demonstrating a browser game with local AI and optional physical inputs. Read the game's acceptance gates and fallback order. This guide verifies a build; it does not change scope, install packages, publish a site or operate judging dashboards.

## Portable checkout

Inventory the repository's documented commands, lockfiles and existing mock service. Validate from a separate clean checkout with already-approved dependencies. Identify missing build/test commands honestly instead of inventing a successful build for a skeleton. Avoid machine-absolute paths, private submodules and links outside the checkout.

Serve the production build locally using the project's approved workflow. Inspect requests for CDN fonts, decoder files, textures, dynamic imports, model/tokenizer/voice downloads and remote telemetry. Then disable external internet while preserving the local serving and hardware link. Cached browser state is insufficient: verify an empty-cache/restarted-browser case too. Document any required local files and their licenses/hashes without downloading them during a documentation-only task.

## Run and fault matrix

| Mode or fault | Evidence to record |
|---|---|
| Mock service, keyboard/controller | Full start-to-ending run, reset and both intended choices |
| Local AI with rendering and vision | Measured response/frame times, real device resource samples |
| Director timeout/invalid result | Same-contract scripted takeover; stale live replies discarded |
| Camera loss, unknown object, hand | Explicit unavailable/abstaining state and manual selection |
| Serial unplug/reconnect | No replayed button action; physical controls have input equivalents |
| Controller disconnect, blur, pause | Input state resets and another input path remains usable |
| Internet absent | Local assets, subtitles and approved offline speech/fallback behave |
| Separate renderer plus device service | Local link survives without external internet; reachable WebSocket |

Run the intended judging-length session with subtitles, readable controller prompts, colorblind-safe distinctions and reduced motion. Repeat reset from each failure state. Distinguish real device runs from replayed fixtures and mocked telemetry.

## Handoff

Record the tested commit, environment, command, test duration, observed result and remaining gate for each relevant row. Keep measured telemetry separate from proposed targets. Provide a short launch/reset procedure and the project's fallback order. Do not call a checkout offline-ready until it completes the empty-cache, no-external-network run.

## References

- [MDN Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API).
- [FastAPI WebSockets](https://fastapi.tiangolo.com/advanced/websockets/).
- [License and provenance](NOTICE.md). No paid generators, assets or runtime dependencies are bundled.
