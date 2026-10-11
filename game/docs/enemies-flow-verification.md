# Task C verification

Issue #5, game-rules/enemies-flow, 2026-10-10. Windows/Node 24.19.0, headless Chrome with software WebGL.

- npm test: 19 tests passed, including prior network/land tests. A* checks open-grid diagonals, walls, corner blocking, same cell, unreachable/invalid grids and no mutation. Enemy checks attack cooldown, two-pulse defeat, conversion, faction switch, spawn cap and path cadence. Rules checks shrine pause guard, preserved faction-flip progress, unique shard resolution, final win/loss payloads, ending reset, lantern bounds/relic priority, interrupted hold, false inactive hint, ask tax and session cleanup. Relic button costs are applied once per edge without duplicating a network ask.
- npm run build: TypeScript and Vite production build passed. Existing Three.js bundle-size warning remains.
- Browser integration uses actual tools/mock-remnant on port 8877. Verified keyboard ask cost, relic button cost without duplicate outgoing ask, knob changes, empty-shrine pause that Esc cannot bypass, opposite-figure flip, false hint marker, held-input resolution of three shards and win event, ending reset, enemy touch damage and two-pulse defeat, loss event, and local scripted director while disconnected. No page exceptions. Screenshot: [enemies-flow.png](enemies-flow.png).
- Browser run-flow checks deliberately use known player/enemy positions and simulation-time advances to isolate behaviors. They are fixtures, not a measured five-minute player run or integrated hardware test.
- Final production build also renders in a fresh Chrome context with external requests blocked, no external asset requests or browser exceptions, working pause, and mobile resize without scrollbars. Production screenshot: [enemies-flow-production.png](enemies-flow-production.png).
- All new enemy/shard textures are original procedural placeholders. UI/visuals receive typed data/events and can replace the placeholder views.

Still unverified: physical GameSir input/reconnect, real Jetson service/link, integrated device frame times, judging-length balance, final authored art, subtitles/ending screens/audio, and full offline judging readiness.

The handoff's Jetson address 10.37.2.234:8765 was checked for TCP reachability; it timed out after 3 seconds from this machine. No live game commands or paid service calls were sent.
