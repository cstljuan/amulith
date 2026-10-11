export const FIXED_STEP = 1 / 60;
export const MAX_DELTA = 0.1;

export function startLoop(callbacks: {
  frame: () => void;
  update: (dt: number) => void;
  render: (alpha: number, dt: number) => void;
}): () => void {
  let previous: number | undefined;
  let accumulator = 0;
  let request = 0;
  const tick = (time: number) => {
    const dt = previous === undefined ? 0 : Math.min(MAX_DELTA, Math.max(0, (time - previous) / 1000));
    previous = time;
    callbacks.frame();
    accumulator += dt;
    while (accumulator >= FIXED_STEP) {
      callbacks.update(FIXED_STEP);
      accumulator -= FIXED_STEP;
    }
    callbacks.render(accumulator / FIXED_STEP, dt);
    request = requestAnimationFrame(tick);
  };
  const reset = () => { previous = undefined; accumulator = 0; };
  document.addEventListener('visibilitychange', reset);
  request = requestAnimationFrame(tick);
  return () => { cancelAnimationFrame(request); document.removeEventListener('visibilitychange', reset); };
}
