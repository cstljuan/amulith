# Team log

Newest first. One entry per work session.

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
