import { GROVE } from './grove.ts';
import { HOLLOW } from './hollow.ts';
import { DEEPWOOD } from './deepwood.ts';
import type { LevelDefinition, LevelId } from './types.ts';
export const LEVELS: Record<LevelId, LevelDefinition> = { grove: GROVE, hollow: HOLLOW, deepwood: DEEPWOOD };
export function judgeLevel(search: string): LevelId {
  const id = new URLSearchParams(search).get('level');
  return id === 'hollow' || id === 'deepwood' ? id : 'grove';
}
export class LevelManager {
  current: LevelDefinition;
  transitioning = false;
  departing: LevelId | null = null;
  private curtainTime = 0;
  private pending: LevelId | null = null;
  elapsed = 0;
  private waves = new Set<number>();
  constructor(readonly initial: LevelId = 'grove') { this.current = LEVELS[initial]; }
  reset(): void { this.current = LEVELS[this.initial]; this.elapsed = 0; this.waves.clear(); this.transitioning = false; this.pending = null; this.departing = null; }
  beginExit(position: {x:number;z:number}, ready: boolean): boolean {
    const exit = this.current.exit;
    if (!ready || this.transitioning || Math.hypot(position.x-exit.x,position.z-exit.z)>exit.radius || !exit.next) return false;
    this.transitioning = true; this.departing=this.current.id; this.curtainTime = 0; this.pending = exit.next; return true;
  }
  update(dt: number, playing: boolean, load: (level: LevelDefinition)=>void, wave: (zone: LevelDefinition['waves'][number]['zone'],count:number)=>void): void {
    if (!playing) return;
    if (this.transitioning) {
      this.curtainTime += dt;
      if (this.curtainTime >= 0.6 && this.pending) {
        this.current = LEVELS[this.pending]; this.pending = null; this.elapsed = 0; this.waves.clear(); load(this.current);
      }
      if (this.curtainTime >= 1.2) { this.transitioning = false; this.departing=null; }
      return;
    }
    this.elapsed += dt;
    this.current.waves.forEach((entry,index)=>{ if(this.elapsed>=entry.after&&!this.waves.has(index)){this.waves.add(index);wave(entry.zone,entry.count);} });
  }
}
