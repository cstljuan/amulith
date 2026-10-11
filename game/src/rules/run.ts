import type { Faction, ShrineState, ShardId, Zone } from '@protocol/messages';
import type { EventBus, GameEvents } from '../core/events.ts';
export type RunPhase = 'attract' | 'playing' | 'paused' | 'ending';
export interface RunSnapshot {
  phase: RunPhase; faction: Faction | null; hp: number; elapsed_s: number;
  shards: number; asks_used: number; result: 'win' | 'lose' | null;
}
export class Run {
  phase: RunPhase = 'attract'; faction: Faction | null = null;
  hp = 1; elapsed = 0; shards = 0; asksUsed = 0;
  result: 'win' | 'lose' | null = null;
  private endingTime = 0;
  private shrinePresent = false;
  private resolved = new Set<ShardId>();
  constructor(private bus: EventBus<GameEvents>) {}
  snapshot(): RunSnapshot { return {phase:this.phase,faction:this.faction,hp:this.hp,elapsed_s:this.elapsed,shards:this.shards,asks_used:this.asksUsed,result:this.result}; }
  private changed(): void { this.bus.emit('run',this.snapshot()); }
  select(state: ShrineState): void {
    if (state === 'hand' || this.phase === 'ending') return;
    if (state === 'empty') { this.shrinePresent = false; this.bus.emit('pause',{paused:true}); return; }
    this.shrinePresent = true;
    const faction = state === 'sleepy' ? 'bloom' : 'blight'; const previous = this.faction;
    if (this.phase === 'attract') {
      this.hp = 1; this.elapsed = 0; this.shards = 0; this.asksUsed = 0; this.resolved.clear(); this.result = null;
      this.faction = faction; this.phase = 'playing';
      this.bus.emit('faction',{faction}); this.bus.emit('pause',{paused:false}); this.changed();
      this.bus.emit('game-event',{type:'event',kind:'run_start',data:{faction}});
    } else {
      this.faction = faction; this.bus.emit('faction',{faction}); this.bus.emit('pause',{paused:false}); this.changed();
      if (previous !== faction) this.bus.emit('game-event',{type:'event',kind:'faction_flip',data:{faction,previous}});
    }
  }
  pause(paused: boolean): void {
    if (this.phase === 'attract' || this.phase === 'ending') return;
    const next = paused || !this.shrinePresent ? 'paused' : 'playing';
    if (this.phase !== next) { this.phase = next; this.changed(); }
  }
  update(dt: number): void {
    if (this.phase === 'playing') this.elapsed += dt;
    if (this.phase === 'ending') { this.endingTime += dt; if (this.endingTime >= 20) this.reset(); }
  }
  hurt(amount: number): void {
    if (this.phase !== 'playing' || !Number.isFinite(amount) || amount <= 0) return;
    this.hp = Math.max(0,Math.round((this.hp-amount)*1e10)/1e10);
    this.bus.emit('game-event',{type:'event',kind:'player_hurt',data:{hp:this.hp,amount}}); this.changed();
    if (!this.hp) this.end('lose');
  }
  resolve(shard: ShardId, zone: Zone): void {
    if (this.phase !== 'playing' || this.resolved.has(shard)) return;
    this.resolved.add(shard); this.shards++;
    this.bus.emit('game-event',{type:'event',kind:'shard_resolved',data:{shard,zone,faction:this.faction,action:this.faction === 'bloom' ? 'destroyed' : 'claimed'}});this.changed();
    if (this.shards >= 3) this.end('win');
  }
  ask(): boolean { if (this.phase !== 'playing') return false; this.asksUsed++; this.changed(); return true; }
  private end(result: 'win' | 'lose'): void {
    this.phase = 'ending'; this.result = result; this.endingTime = 0;
    this.bus.emit('pause',{paused:true}); this.changed();
    this.bus.emit('game-event',{type:'event',kind:'run_end',data:{faction:this.faction,result,shards:this.shards,asks_used:this.asksUsed,elapsed_s:this.elapsed}});
  }
  private reset(): void {
    this.phase = 'attract'; this.faction = null; this.shrinePresent = false; this.result = null;
    this.hp = 1; this.elapsed = this.shards = this.asksUsed = 0; this.resolved.clear();
    this.bus.emit('faction',{faction:null});this.bus.emit('pause',{paused:true});this.changed();
  }
}
