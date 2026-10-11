export type Action = 'pulse' | 'dash' | 'interact' | 'ask' | 'pause' | 'judge' | 'bloom' | 'blight' | 'empty';
export interface ActionMap {
  move: { x: number; y: number };
  pulse: boolean;
  dash: boolean;
  interact: boolean;
  ask: boolean;
  pause: boolean;
  judge: boolean;
  bloom: boolean;
  blight: boolean;
  empty: boolean;
  lanternDelta: number;
}

const bindings: Record<Action, { keys: string[]; button: number }> = {
  pulse: { keys: ['Space'], button: 0 },
  dash: { keys: ['ShiftLeft', 'ShiftRight'], button: 1 },
  interact: { keys: ['KeyF'], button: 2 },
  ask: { keys: ['KeyE'], button: 3 },
  pause: { keys: ['Escape'], button: 9 },
  judge: { keys: ['KeyJ'], button: 8 },
  bloom: { keys: ['Digit1','Numpad1'], button: -1 },
  blight: { keys: ['Digit2','Numpad2'], button: -1 },
  empty: { keys: ['Digit0','Numpad0'], button: -1 },
};
const handled = new Set(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'KeyQ', 'KeyR', ...Object.values(bindings).flatMap(b => b.keys)]);

export class Input {
  readonly actions: ActionMap = { move: { x: 0, y: 0 }, pulse: false, dash: false, interact: false, ask: false, pause: false, judge: false, bloom:false,blight:false,empty:false,lanternDelta: 0 };
  private keys = new Set<string>();
  private edges = new Set<Action>();
  private pending = new Set<Action>();
  private focused = true;
  private keyDown = (event: KeyboardEvent) => {
    if (!handled.has(event.code) || event.ctrlKey || event.metaKey || event.altKey) return;
    event.preventDefault();
    if (!event.repeat && !this.keys.has(event.code)) {
      for (const action of Object.keys(bindings) as Action[]) {
        if (bindings[action].keys.includes(event.code)) this.pending.add(action);
      }
    }
    this.keys.add(event.code);
  };
  private keyUp = (event: KeyboardEvent) => { this.keys.delete(event.code); };
  private blur = () => { this.focused = false; this.reset(); };
  private focus = () => { this.focused = true; };
  private reset = () => {
    this.keys.clear();
    this.edges.clear();
    this.pending.clear();
    this.actions.move.x = this.actions.move.y = this.actions.lanternDelta = 0;
    for (const action of Object.keys(bindings) as Action[]) this.actions[action] = false;
  };

  constructor() {
    window.addEventListener('keydown', this.keyDown);
    window.addEventListener('keyup', this.keyUp);
    window.addEventListener('blur', this.blur);
    window.addEventListener('focus', this.focus);
    window.addEventListener('gamepaddisconnected', this.reset);
  }

  poll(): void {
    this.edges.clear();
    if (!this.focused || document.hidden) { this.reset(); return; }
    const pad = Array.from(navigator.getGamepads?.() ?? []).find(p => p?.connected && p.mapping === 'standard');
    let x = pad?.axes[0] ?? 0;
    let y = pad?.axes[1] ?? 0;
    const magnitude = Math.hypot(x, y);
    if (magnitude <= 0.2) { x = 0; y = 0; }
    else { const strength = Math.min(1, (magnitude - 0.2) / 0.8); x = x / magnitude * strength; y = y / magnitude * strength; }
    const key = (...codes: string[]) => codes.some(code => this.keys.has(code));
    x += Number(key('KeyD', 'ArrowRight')) - Number(key('KeyA', 'ArrowLeft'));
    y += Number(key('KeyS', 'ArrowDown')) - Number(key('KeyW', 'ArrowUp'));
    const length = Math.hypot(x, y);
    this.actions.move.x = x / Math.max(1, length);
    this.actions.move.y = y / Math.max(1, length);
    for (const action of Object.keys(bindings) as Action[]) {
      const binding = bindings[action];
      const down = key(...binding.keys) || Boolean(pad?.buttons[binding.button]?.pressed);
      if (this.pending.has(action) || (down && !this.actions[action])) this.edges.add(action);
      this.actions[action] = down;
    }
    this.actions.lanternDelta = Math.max(-1, Math.min(1,
      (pad?.buttons[7]?.value ?? 0) - (pad?.buttons[6]?.value ?? 0) + Number(key('KeyR')) - Number(key('KeyQ'))));
    this.pending.clear();
  }

  pressed(action: Action): boolean { return this.edges.has(action); }
  held(action: Action): boolean { return this.actions[action]; }

  dispose(): void {
    window.removeEventListener('keydown', this.keyDown);
    window.removeEventListener('keyup', this.keyUp);
    window.removeEventListener('blur', this.blur);
    window.removeEventListener('focus', this.focus);
    window.removeEventListener('gamepaddisconnected', this.reset);
    this.reset();
  }
}
