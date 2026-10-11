---
name: threejs-paper-game
description: "Implement paper-cutout browser games in plain Three.js and TypeScript, including tilted cameras, billboard animation, target-device performance and gamepad/keyboard fallback."
---

# Three.js paper game

Use for a paper stage built with plain Three.js. Read the target project's locked design, installed Three.js version and input contract first. Keep game rules separate from rendering. Use the existing scene workflow for renderer lifecycle; this guide adds game-specific decisions.

## Stage and characters

- Establish world units and a camera-facing convention. With a tilted camera, project movement onto the ground plane; camera-relative movement must not move actors vertically.
- Use an orthographic or perspective camera according to the approved composition. Check foreground overlap, shard visibility and silhouette readability before multiplying scenery.
- Keep each cutout's feet at a stable pivot. Orient the visual child toward the camera while keeping simulation heading independent. Flip that child for left/right facing; do not mirror the collider or world transform.
- Compare alpha-tested cutouts with blended materials on the actual renderer. Alpha testing can retain depth writes for hard edges; blended paper layers need intentional depth/order handling. Avoid one global sorting rule that breaks moving characters.
- Use authored texture atlases and shared geometry/materials when practical. Record art rights. Pose swaps, bob, turn flips and hit wobble should preserve the feet pivot. Reduced motion keeps state changes and removes excess movement.
- Shadows explain separation between paper layers. Begin with a small bounded shadow budget or authored contact shadows; measure before adding fullscreen effects.

## Simulation and input

- Use a bounded time step or fixed update with capped catch-up. Resume from tab suspension without teleporting actors or applying minutes of queued effects.
- Poll `navigator.getGamepads()` each frame. Handle user-interaction activation, sparse entries, nonstandard mappings and reconnects; verify the named controller in the target browser.
- Apply axis dead zones, normalize diagonal movement and distinguish held buttons from press edges. UI prompts follow the active input device.
- Provide keyboard and controller equivalents for external button/knob actions. Losing hardware must not strand a player in a pause/menu state. Reset held input on blur or disconnect.
- External service events enter the existing project contract. Reject stale events after a reset; do not invent a parallel protocol in this skill.

## Performance gate

Measure the intended resolution and browser on the target device while AI and vision are running. Record frame-time distribution, renderer draw calls, texture sizes, memory trend and test duration. Label proposed budgets separately from measurements. Cap pixel ratio; bound transparent overdraw, lights, particles and shadow maps. Reuse temporary vectors in frame loops and dispose GPU resources on teardown. If integrated load fails the project's gate, exercise its separate-renderer fallback before expanding art scope.

Deliver a small playable scene with controller, keyboard, reconnect, reduced-motion and reset checks. Skill discovery alone does not establish rendering or device performance.

## References

- [Three.js manual](https://threejs.org/manual/), checked against the project's installed version.
- [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API).
- [License and provenance](NOTICE.md). No scripts, dependencies or assets ship with this guide.
