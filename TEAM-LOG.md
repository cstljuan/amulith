# Team log

Newest first. One entry per work session.

## 2026-10-13, Juan Castillo, game-core/portable-story
- Did: audited current main ae3d467, the seven pinned kh-skills guides and handoffs, 36 relevant vault notes, lore, Figma guide and Devpost records. Coordinated cross-lane changes on #3, #4, #5, #6, #7, #8 and #20 under #44.
- Added hardware-free default startup, authored state/event dialogue, immediate real-shard hints, six visible spirits with 12 branching conversations, persistent chronicle, four closing sequences, explicit replay, Story/Challenge combat, pointer-accessible title/menu controls, PWA caching and a portable Python launcher. Preserved protocol and hardware source.
- Rebranded in Figma with a fractured-gem/root symbol, palette treatments and app icon; exported vector identity assets. Updated landing-page and README claims, separated original hardware work from the scripted edition, and prepared a LinkedIn draft.
- Verified so far: 41 Node tests and TypeScript/Vite production build pass. The script contains 696 unique beats and 7,913 words; every Amulith spoken beat stays within 22 words. Figma identity screenshot inspected after fixing clipped auto-layout heights.
- Browser verification moves to the portable preview workflow because this environment has no installed Chromium, its browser download returns invalid bytes, and the remote browser cannot reach localhost. Full browser/offline claims remain pending workflow results. No new Jetson or physical controller measurements are claimed.

## 2026-10-11, Lawrence Capistrano, game-core/all-integration
- Integrated levels, new art, landing page, lore UI and shrine vision under Lawrence's explicit merge authorization. Fixed later-level pause/resume intros and Grove cast visibility; applied reduced motion to Lenny and T.K.
- Posted four art requests on #20 and optional protocol coordination on #38. Validation records are in the integration PR. Cloud vision fixtures cannot replace live camera or Jetson checks.

## 2026-10-11 09:25 UTC, Juan Castillo (Claude Code), hardware/shrine-vision
- Did: shrine detector that needs no photo session at the venue (remnant/remnant/vision/). It learns the empty shrine by itself, detects hands by edge-touching foreground or motion, and tells sleepy from angry with explicit cues measured on the real figures (eyes, wing span, silhouette and green shape), plus a pretrained MobileNetV3 embedding as a tie-breaker. It abstains when the cues disagree, the frame is dark or covered, or two figures are present. remnant now runs it on /dev/video0, sends shrine changes, reports shrine_ready, and drops to 2 fps while the LLM generates. Debug preview: remnant/scripts/shrine_preview.py, also /vision/status, /vision/debug.jpg, POST /vision/calibrate.
- Verified: 31 tests pass (9 synthetic, 22 capture replays). On desk1 (last 70% of each folder) empty, sleepy and angry are 98.6 to 100% per frame with no sleepy/angry swaps under any of 8 synthetic room shifts; brightness x1.5 makes sleepy abstain. Jetson: about 15 ms per frame alone, 48 ms with the LLM busy; 5 fps cut llama from 18.8 to about 15.5 tok/s, 2 fps was within noise (18.3), so the detector throttles while the LLM thinks.
- Not verified: live figures under real light (the room was dark during this session), and the game rendering on the Jetson at the same time. The figures have no petal hat; angry is the winged standing one.

## 2026-10-11, Lawrence Capistrano, game-rules/level-deepwood
- Replaced Deepwood scaffold with a 32 by 24 Rootdeep map, alternating root banks, two candidate final shards, three opening guards and two one-enemy waves. Faster opponents and stronger attacks provide the final escalation; the final exit requires resolving the active shard first. The 60-second target is a design goal, not measured playtime.
- Used existing blight-tree and shrine-circle props as placeholders. Root-bank and final-seal art requests are prepared for issue #20, whose comments remain blocked by GitHub API network access. Lore, render, UI, audio, art and protocol files remain unchanged.
- Validation: TypeScript/Vite production build and 32 tests passed on the manager base, including both-faction final exits, lore/art references, traversable collision paths, edge spawns, pause and timed-wave gates. No controller, Jetson or judging-length performance measurements claimed.

## 2026-10-11, Lawrence Capistrano, game-rules/level-hollow
- Replaced Hollow scaffold data with a compact 44 by 28 map, two mushroom loops, 12 visible solid cap clusters, two candidate shard sites, guards and three bounded waves. One shard is active, and the eastern exit leads to Deepwood. Names/signs remain in the lore contract.
- Reused existing mushroom cards, enemy sheets and shard art. Added data tints for Juan's art pass; Hollow cap-cluster and floor-tile requests are prepared for issue #20, whose comments are currently blocked by GitHub API network access.
- Validation: TypeScript/Vite production build and 31 tests passed, including both shard routes, enemy tuning and actual enemy movement/spawn clearance across both factions and deterministic edge samples. No hardware or judging-length balance measurements claimed.

## 2026-10-11, Lawrence Capistrano, game-core/level-manager
- Added data-driven progression through grove, hollow and deepwood, one randomized shard per level, gated exits, a short curtain and judge URL starts. Faction, land, HP, play time, asks, lantern and resolved site flags carry. Hollow and Deepwood definitions are initial scaffolds for their separate layout tasks.
- Kept lore/render/UI/audio/art/protocol files unchanged. Reused existing art in an instanced level adapter, preserved land conversion and the renderer's every-third-frame thinking throttle.
- Validation: TypeScript/Vite build, 21 existing tests and six new progression checks passed. Controlled Chromium runs completed three real shard holds and exits for both factions; judge starts, loss and reset passed. Physical controller, Jetson GPU performance and judging-length balance were not measured.
- GitHub API network access is blocked in this environment. New feature issue claims, PR publication, art comments and protocol level-field request remain pending that access. The handoff's existing coordination issues #3 and #5 are assigned to Lawrence.
## 2026-10-11 08:46 UTC, Juan Castillo, lore/bible
- Did: added the world bible, canon and fan-addition boundaries, places, faction beliefs, T.K./Lenny character limits, glossary and shared Remnant voice guide under docs/lore/. Progression IDs stay separate from the existing wire zones. No reserved gameplay, art, rendering, vision or UI paths changed.
- Coordination: four parallel workspace lanes handle levels-contract, bible, remnant-voice and npcs-items-codex in isolated branches. Codex Cloud task API access returned HTTP 401; these are workspace agents, not standalone Cloud tasks. The levels-only PR #25 shipped first. Shared the guide with the Remnant lane.
- Verified: reviewed all authored prose for canon boundaries, character voice, spelling and unsupported implementation claims; checked whitespace, changed-path scope and absence of em dashes. Documentation-only change, no build or hardware measurements claimed.
- Next: consume the world bible when writing dialogue and content; the UI session owns title flavor, level intro cards and codex presentation. Parent session posts the combined issue #7 summary.

## 2026-10-11 4:05 AM, Lawrence Capistrano, PR #19 merge review
- Reviewed c4a8564 and tested its clean merge with main 7ee592b, preserving #18 sprite/lantern/pulse changes. No source edits made during review. All 21 tests and TypeScript/Vite production build pass.
- Re-ran supplied audio integration fixtures against the combined tree: silent startup, simulated controller start, both local music loops, effects, faction crossfade, speech duck/recovery/error, scripted shrine interaction, dash pose, pause volume/mute, settings persistence and ending pass. Fresh production context passes with external HTTP and WebSockets blocked. No browser exceptions or missing bundled audio.
- Existing bundle warning remains. Physical controller/audio listening, live voice-engine playback and a full judging-length run remain integration checks. Jetson measurements in the PR are Juan's recorded combined-workload samples, not independently remeasured here. No hardware/deployment operations.

## 2026-10-11 1:42 AM, Juan Castillo, ui-audio/relic-sound
- Did: two local original CC0 music loops and seven cues, first-input unlock, faction crossfade, speech duck/recovery, pause volume/mute and persistence. Added the accepted dash pose consumer and X/F shrine interaction with honestly labelled scripted lines. Narrow-screen pause settings stay readable with judge mode enabled. No new dependencies or core/input/main.ts/protocol/hardware edits.
- Verified: TypeScript/Vite build and all 21 tests pass. Browser audio, controller and ending fixtures verify silent start, cues, crossfade, voice duck/error recovery, settings, dash frame and shrine proximity. A fresh production context passed with external HTTP and all WebSockets blocked. Verification details and raw telemetry are in game/src/audio/.
- Jetson: a temporary production copy loaded fullscreen at 1080p drawing resolution with the live LLM. Outside thinking, default averaged 79.04% GPU, 54.04 fps, 15.16 W; post=0 averaged 77.79%, 56.93 fps, 14.80 W (28 samples each). Existing game windows/workloads remained open, so these are combined-device measurements. The temporary test processes were closed; existing deployment/services were preserved.
- Next: team merge and integrated deployment, physical controller/listening and real voice-engine check. Juan deferred item holding and art while the world/art session continues; T.K./Lenny sketches are unfinished. Refs #6 and #7.
## 2026-10-11 2:09 AM, Lawrence Capistrano, PR #18 review
- Reviewed visuals/hd2d-polish head bbfcea2: 8-direction/faction sprite sheets, lantern shader patch, pixel pulse pool, d-pad input and no-hint director schema. No blocking code issue found.
- Validation: 21 tests and TypeScript/Vite production build pass. Headless Chrome with post-processing enabled and a simulated standard controller verifies faction title start, d-pad movement, faction switch, pulse rendering, judge overlay, pause/resume, B dash, X/F edges, paused interact guard, shrine collision and controlled obstacle chase. No browser or shader errors; screenshot inspected. Checks wait on state/events instead of fixed wall-clock delays for software rendering.
- Python AST and hint/no-hint schema field checks pass. No local inference or device measurements were performed; the reported 1.5B Jetson speedup remains Juan's measurement. Existing bundle warning remains.
- Follow-up: ui-audio/relic-sound overlaps render/sprite.ts and render/index.ts; incorporate new main before merging that branch. Hardware/deployment unchanged in this review.

## 2026-10-11 1:22 AM, Lawrence Capistrano, game-rules/obstacles-dash-interact
- Reviewed and merged #16 at a56fa4a after dependency install, build, 19 tests, and browser checks of controller title choice, start, judge overlay, pause/resume and rendering. Normal merge commit f0faa06aea5811c739bbd0274c8671fdcba44fd2.
- Added enemy obstacle grids from the existing render COLLIDERS supplied after installVisuals in main.ts. Circles include actor clearance and cell half-diagonal padding; blocked spawn/target cells use a nearby open cell. Navigation has no render dependency. Added a normalized 3-unit B/Shift dash over 0.18 s with 0.8 s cooldown, pause cancellation, and collision substeps to avoid tunneling. X/F emits interact on active-run press edges. New typed dash/interact position events.
- main.ts changes: import COLLIDERS, set enemy obstacles, dispatch accepted dash and interact events, pass pause/collision callback to player.update; preserved visuals/UI/render cap/camera and final collision calls. No dependencies or render/fx/ui/audio/art/protocol/hardware files changed. Optional pulse-shape refactor left unchanged.
- Verification: 21 tests PASS, TypeScript/Vite build PASS; headless Chrome with simulated standard controller PASS for title start, judge, pause/resume, B burst, X/F edges, paused interact guard, shrine collision and controlled obstacle chase. Existing bundle-size warning remains. Browser fixtures do not measure physical controller or Jetson GPU performance.
- Coordination: issues #6/#7 contain interfaces. Dash pose subscription is pending in Juan's render lane (actor.act('dash',0.18)); interact consumers remain with UI. No Jetson service/deployment edits. No Discord connector available, team update supplied to Lawrence. Authorship is Lawrence's configured name and noreply email; no attribution trailers.

## 2026-10-11 1:05 AM, Juan Castillo (Claude Code), visuals/paper-world
- Did: merged main (#15) into the visuals branch; enemies and shards now render as animated pixel sprites (walk, attack, defeated) from the enemies/shards events, replacing the placeholder views (hidden, not deleted). Four-direction Wanderer frames, curved heightfield terrain, prop collisions (resolveCollisions in main.ts), shaped pulses. UI lane #7: title and controller faction pick, HUD (land share, light, lantern, shards), Amulith dialogue with mood portraits and honest source label, hold-to-claim prompt, pause menu with settings, judge mode, endings with credits. Fonts bundled (Noto Serif/Sans, OFL). Build and 19 tests pass. Deployed to the Jetson for Juan.
- Blocked: audio (no CC0 music yet), T.K. and Lenny art (waiting on Juan's sketches / lore images).
- Next: audio, item holding/interaction, Vercel landing page for the domain.

## 2026-10-11 1:15 AM, Juan Castillo (Claude Code), visuals/paper-world
- Did: switched the art direction to HD-2D (DECISIONS.md entry 12:20 AM). Built the render layer in src/render and src/fx: land shader (Bloom grass with flowers, Blight soil with creeping veins and thorns, one draw plus two instanced), voxel cliff diorama with stream, billboard trees and props, stone shrine with the Amulith gem, day/night lighting by faction with a lantern point light, one post pass (tilt-shift, mip glow, vignette, grade), fireflies/spores, pulse rings, pixel sprite actor for the Wanderer. Asset sources generated with GPT Image 2.5, finished in Aseprite, listed in public/art/CREDITS.md. Build and tests pass.
- Blocked: Jetson GPU numbers not measured yet. main.ts touched (install hook, render cap, closer camera); flagged on issue #3. Walk frames came from GPT Image, assembled into sheets by script.
- Next: enemy, shard, T.K. and Lenny sprites (after #15 merges), Juan's sketches, then UI lane #7.

## 2026-10-11 12:30 AM, Juan Castillo (Claude Code), visuals/paper-world
- Did: locked the art style sheet in game/public/art/STYLE.md (palette with measured colorblind contrast, typography, cutout rules, file layout). Added src/render/palette.ts and src/render/resolution.ts (drawing buffer capped at 1920 x 1080 pixels, a 4K TV renders at 1920 x 1080).
- Blocked: the cap needs a one-line change in main.ts (game-core); requested on issue #3.
- Next: paper ground and torn zone edges, billboard cutout system, land flowers and veins.
## 2026-10-10 11:33 PM, Lawrence Capistrano, game-rules/enemies-flow
- Did: reviewed/merged #14 after Lawrence's approval; implemented #5 A*, enemy AI/attacks/two-pulse defeat, lantern, 3-of-6 shard selection/hold resolution, hints, 3% ask cost, and full run states/reset. Added local placeholder enemy/shard views and typed interfaces for UI/visuals. Nineteen unit tests, build and controlled mock-browser run-flow checks passed; screenshot in game/docs/enemies-flow.png.
- Blocked: physical controller, real Jetson link/performance, five-minute game balance, authored visuals and ending UI/audio remain unverified or assigned to other lanes. Browser win/loss checks use controlled positions/time fixtures and are not a real judging-length run.
- Next: open Task C PR for review. Coordination log and lane interfaces are in kh-skills PR #4.

## 2026-10-10 11:24 PM, Lawrence Capistrano, game-rules/net-land
- Did: after Lawrence authorized merging #13 and taking B/C here, implemented #4 network/land/pulse, validated protocol messages, reconnect/disposal, offline director, shrine/faction fallback, and shared lane events. Six Node tests and production build passed; actual tools/mock-remnant browser integration passed with screenshot in game/docs/net-land.png.
- Blocked: real Jetson endpoint and physical controller not tested. No protocol or platform changes, no dependencies added. game-core issue #3 has the integration notice for the small bootstrap/input/event hooks.
- Next: open Task B PR, then implement #5 on game-rules/enemies-flow. Coordination history and interfaces remain in kh-skills PR #4.

## 2026-10-10 11:11 PM, Lawrence Capistrano, game-core/scaffold
- Did: claimed #3; added the Vite/TypeScript/Three.js scaffold, three zones, billboard Wanderer, centralized input, fixed update loop, URL config, typed events, lane placeholders, and run documentation. Build and browser input checks passed; screenshot in game/docs/scaffold.png. Lawrence approved @types/three for static checks.
- Blocked: physical GameSir controller and Jetson performance are unverified. Shell credential-manager access is restricted; GitHub connector handles publication. Coordination log is in kh-skills PR #4.
- Next: Lawrence reviews/merges the scaffold PR; second Codex then takes #4 and #5. Other lanes consume the documented event/input interfaces.

```text
## <time>, <person or agent>, <branch>
- Did:
- Blocked:
- Next:
```

## 2026-10-10 7:35 PM, Claude Code (Juan's laptop), main
- Did: created the repo skeleton (layout, agent rules, skills folder).
- Blocked: nothing.
- Next: lock the spec, write `protocol/`, open issues per lane.
