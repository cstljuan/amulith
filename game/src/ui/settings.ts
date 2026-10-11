// Player settings shared by the UI and the render layer. Remembered per browser when storage works.
export interface Settings { reducedMotion: boolean; subtitleSize: 'S' | 'M' | 'L'; judge: boolean }

const KEY = 'amulith.settings';
const params = new URLSearchParams(window.location.search);
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function load(): Settings {
  const base: Settings = { reducedMotion: prefersReduced || params.get('reducedMotion') === '1', subtitleSize: 'M', judge: params.get('judge') === '1' };
  try { return { ...base, ...JSON.parse(localStorage.getItem(KEY) ?? '{}'), judge: base.judge }; } catch { return base; }
}

const listeners = new Set<(s: Settings) => void>();
export const settings: Settings = load();

export function updateSettings(patch: Partial<Settings>): void {
  Object.assign(settings, patch);
  try { const { judge: _, ...keep } = settings; localStorage.setItem(KEY, JSON.stringify(keep)); } catch { /* storage blocked */ }
  listeners.forEach(fn => fn(settings));
}

export function onSettings(fn: (s: Settings) => void): () => void { listeners.add(fn); return () => { listeners.delete(fn); }; }
