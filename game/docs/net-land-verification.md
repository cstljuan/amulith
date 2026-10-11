# Task B verification

Issue #4, game-rules/net-land, 2026-10-10, Windows and headless Chrome software WebGL.

- npm test: six tests passed. Parser rejects unknown/incomplete/out-of-range messages and preserves null telemetry. Socket fixture checks send/routing, retry, stale callbacks and disposal. Land tests check radius, shares, zone scope, batched notifications and exact spread count. Session tests check shrine start/flip/hand/empty and cooldown. Fallback timing/reset verified.
- npm run build: TypeScript and production build passed. Existing >500 kB Vite bundle warning remains.
- Browser integration uses the actual repository tools/mock-remnant server on port 8876. Verified hello/mock mode, shrine selection, faction flip, ignored hand, empty pause, keyboard fallback, pulse share change, ask and returned hint, periodic state, run_start/faction_flip events. No page exceptions. Screenshot: [net-land.png](net-land.png).
- Test server fields are mock data, labelled as mock; no Jetson metrics or hardware claims inferred.
- Real Jetson, physical controller and 2 s reconnect under real network loss remain unverified. Unit retry fixture uses a shorter injected timer to check scheduling deterministically.

Task C extends run flow, enemy/shard state and ask cost. UI/visuals can consume the shared events; this PR does not implement those lanes.
