# Scaffold verification

Task: issue #3, branch `game-core/scaffold`, 2026-10-10. Environment: Windows, Node 24.19.0, headless Chrome with software WebGL. No device performance claims are made from this environment.

## Executed checks

- npm install: passed; audit reported zero vulnerabilities.
- npm run build: TypeScript and Vite production build passed. Vite warns that the Three.js entry bundle exceeds 500 kB before gzip.
- npm run dev: Vite starts successfully on localhost. Browser tests launch Vite and Chrome in the same tool process because this host isolates local servers across tool processes.
- Browser startup and configuration: no page exceptions; `?remnant=example.test:8765&mock=1` parsed correctly.
- Keyboard movement and horizontal flip: passed in the rendered scene.
- Escape pause/resume: movement stops during pause and resumes afterward. Quick key taps are queued between frames.
- Diagonal movement normalized to length 1; radial gamepad deadzone 0.2; standard controller axes, ask button and analog trigger values passed with a simulated Gamepad API fixture.
- Keyboard press edges fire once; blur and controller removal clear movement.
- Map bounds clamp player center to X +/-29.1 and Z +/-19.1; zone mapping passed for all three regions.
- Typed event subscription and unsubscription behavior passed.
- Production build rendered in a fresh browser context with all external requests blocked; no external requests or browser exceptions occurred. Pause and mobile viewport resize passed with no scrollbars. The screenshot is from this production build.

Screenshot: [scaffold.png](scaffold.png). The simple three-color map and canvas character are deliberate placeholders for later lanes.

## Remaining hardware checks

Physical GameSir G7 HE interaction, Jetson GPU rendering, integrated AI/vision load, and real device reconnects have not been tested. The scaffold does not connect to remnant or implement run logic, land conversion, enemies, or audio. Those belong to later tasks. Build success is not an offline judging-readiness claim.
