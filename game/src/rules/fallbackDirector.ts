import type { Director, Faction, GameState, GameEvent } from '@protocol/messages';
import type { LevelId } from '../lore/levels.ts';
import type { Shard } from './shards.ts';
import { AMBIENT, REACTIONS } from '../story/lines.ts';

export class FallbackDirector {
  private elapsed = 0;
  private sequence = 0;
  private cursors = new Map<string, number>();
  private pending: string[] = [];
  private lastHurt = -20;
  event(event: GameEvent, state: GameState): void {
    const category = ({ shard_found: 'found', shard_resolved: 'resolved', faction_flip: 'flip' } as Record<string, string>)[event.kind];
    if (category) this.pending = [...this.pending.filter(x => x !== category), category].slice(-3);
    if (event.kind === 'player_hurt' && state.elapsed_s - this.lastHurt >= 15) {
      this.lastHurt = state.elapsed_s; this.pending.push('hurt'); this.pending = this.pending.slice(-3);
    }
  }
  private pick(pool: string[], key: string): string {
    const cursor = this.cursors.get(key) ?? 0;
    this.cursors.set(key, cursor + 1);
    return pool[cursor % pool.length];
  }
  private make(line: string, category: string, faction: Faction): Director {
    return { type: 'director', id: `story-${++this.sequence}`, source: 'scripted', latency_ms: 0, line,
      mood: category === 'resolved' && faction === 'bloom' ? 'furious' : category === 'flip' || faction === 'blight' ? 'smug' : 'calm',
      spread: null, spawn: null, hint: null };
  }
  update(dt: number, connected: boolean, active: boolean, faction: Faction | null,
    state?: GameState, level: LevelId = 'grove'): Director | null {
    if (connected || !active || !faction) { this.elapsed = 0; return null; }
    this.elapsed += dt;
    if (this.elapsed < (this.pending.length ? 8 : 25)) return null;
    this.elapsed = 0;
    const event = this.pending.shift();
    const category = event ?? (state && state.hp < 0.3 ? 'hurt' : state && state.enemies_near > 0 ? 'danger'
      : state && state.lantern > 0.8 ? 'wide' : state && state.lantern < 0.2 ? 'narrow' : 'ambient');
    const pool = category === 'ambient' ? AMBIENT[level][faction] : REACTIONS[category][faction];
    return this.make(this.pick(pool, `${level}:${faction}:${category}`), category, faction);
  }
  ask(state: GameState, level: LevelId, nearest: Shard | null, position: { x: number; z: number }): Director {
    const faction = state.faction ?? 'bloom';
    this.elapsed = 0; this.pending = [];
    if (!nearest) return this.make(this.pick(REACTIONS.empty[faction], `${level}:${faction}:empty`), 'ask', faction);
    const dx = nearest.x - position.x, dz = nearest.z - position.z;
    const direction = Math.hypot(dx, dz) < 1.4 ? 'beneath your lantern' : Math.abs(dx) > Math.abs(dz)
      ? (dx < 0 ? 'west of your lantern' : 'east of your lantern') : (dz < 0 ? 'north of your lantern' : 'south of your lantern');
    const line = faction === 'bloom' ? `The glass waits ${direction}. I have told you where. I have not asked you to break it.`
      : `An edge of me waits ${direction}. Bring it close. The roots have held it long enough.`;
    const director = this.make(line, 'ask', faction);
    director.hint = { shard: nearest.id, riddle: line, truthful: true };
    return director;
  }
  interact(faction: Faction, level: LevelId): Director {
    this.elapsed = 0;
    return this.make(this.pick(REACTIONS.ask[faction], `${level}:${faction}:shrine`), 'ask', faction);
  }
  reset(): void { this.elapsed = 0; this.pending = []; this.cursors.clear(); this.sequence = 0; this.lastHurt = -20; }
}
