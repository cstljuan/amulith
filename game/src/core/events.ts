import type { Faction, RemnantMessage } from '@protocol/messages';

export type GameEvents = {
  [K in RemnantMessage['type']]: Extract<RemnantMessage, { type: K }>;
} & {
  pulse: { x: number; z: number };
  faction: { faction: Faction | null };
  pause: { paused: boolean };
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
