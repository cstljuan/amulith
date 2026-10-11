# Team log

Newest first. One entry per work session.

## 2026-10-11 1:15 AM, Juan Castillo (Claude Code), visuals/paper-world
- Did: switched the art direction to HD-2D (DECISIONS.md entry 12:20 AM). Built the render layer in src/render and src/fx: land shader (Bloom grass with flowers, Blight soil with creeping veins and thorns, one draw plus two instanced), voxel cliff diorama with stream, billboard trees and props, stone shrine with the Amulith gem, day/night lighting by faction with a lantern point light, one post pass (tilt-shift, mip glow, vignette, grade), fireflies/spores, pulse rings, pixel sprite actor for the Wanderer. Assets generated in Higgsfield (GPT Image 2.5), listed in public/art/CREDITS.md. Build and tests pass.
- Blocked: Jetson GPU numbers not measured yet. main.ts touched (install hook, render cap, closer camera); flagged on issue #3. AutoSprite is not callable through the Higgsfield connector, walk frames came from GPT Image instead.
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
