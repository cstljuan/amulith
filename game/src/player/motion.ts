export const DASH_DISTANCE = 3;
export const DASH_DURATION = 0.18;
export const DASH_COOLDOWN = 0.8;

export class Motion {
  private remaining = 0;
  private cooldown = 0;
  private direction = { x: 0, y: 0 };
  dash(move: { x: number; y: number }, paused: boolean): boolean {
    const length = Math.hypot(move.x, move.y);
    if (paused || this.cooldown > 0 || length < 0.01) return false;
    this.direction = { x: move.x / length, y: move.y / length };
    this.remaining = DASH_DURATION; this.cooldown = DASH_COOLDOWN;
    return true;
  }
  step(dt: number, move: { x: number; y: number }, paused: boolean): { x: number; y: number } {
    if (paused) { this.remaining = 0; return { x: 0, y: 0 }; }
    this.cooldown = Math.max(0, this.cooldown - dt);
    const burst = Math.min(dt, this.remaining);
    this.remaining = Math.max(0, this.remaining - dt);
    const speed = DASH_DISTANCE / DASH_DURATION;
    return { x: this.direction.x * speed * burst + move.x * 6 * (dt - burst),
      y: this.direction.y * speed * burst + move.y * 6 * (dt - burst) };
  }
}
