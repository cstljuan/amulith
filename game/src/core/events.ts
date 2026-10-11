import type { Faction, RemnantMessage, GameEvent, Spawn, ShardId, Zone } from '@protocol/messages';
import type { LandCell } from '../rules/land.ts';
import type { RunSnapshot } from '../rules/run.ts';
import type { Shard } from '../rules/shards.ts';
import type { Enemy } from '../enemies/enemies.ts';

export type GameEvents = {
  [K in RemnantMessage['type']]: Extract<RemnantMessage, { type: K }>;
} & {
  level: { id: import('../levels/types.ts').LevelId };
  pulse: { x: number; z: number };
  dash: { x: number; z: number };
  interact: { x: number; z: number };
  faction: { faction: Faction | null };
  pause: { paused: boolean };
  connection: { connected: boolean; mode: 'live' | 'mock' | 'offline' };
  'game-event': GameEvent;
  land: { changes: LandCell[]; share: { bloom: number; blight: number } };
  spawn: Spawn;
  'pulse-applied': { x: number; z: number; faction: Faction };
  ask: undefined;
  run: RunSnapshot;
  lantern: { value: number; radius: number; detectionRange: number; source: 'relic'|'input' };
  shards: Shard[];
  'shard-resolved': { id: ShardId; zone: Zone; faction: Faction };
  enemies: Pick<Enemy,'id'|'kind'|'state'|'x'|'z'>[];
};

export class EventBus<Events extends object> {
  private listeners = new Map<keyof Events, Set<(payload: never) => void>>();

  on<K extends keyof Events>(type: K, listener: (payload: Events[K]) => void): () => void {
    let listeners = this.listeners.get(type);
    if (!listeners) this.listeners.set(type, (listeners = new Set()));
    listeners.add(listener as (payload: never) => void);
    return () => { listeners.delete(listener as (payload: never) => void); };
  }

  emit<K extends keyof Events>(type: K, payload: Events[K]): void {
    for (const listener of [...(this.listeners.get(type) ?? [])]) listener(payload as never);
  }
}

export const events = new EventBus<GameEvents>();
