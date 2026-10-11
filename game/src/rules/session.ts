import type { Faction, GameState, ShrineState } from '@protocol/messages';
import type { EventBus, GameEvents } from '../core/events.ts';
import type { Input } from '../input/Input.ts';
import { RemnantClient } from '../net/remnant.ts';
import { Land } from './land.ts';
import { FallbackDirector } from './fallbackDirector.ts';

/** Network/land integration; run state and enemy/shard providers extend this in Task C. */
export class GameSession {
  readonly land = new Land();
  readonly client: RemnantClient;
  faction: Faction | null = null;
  paused = true;
  elapsed = 0;
  asksUsed = 0;
  private cooldown = 0;
  private stateElapsed = 0;
  private fallback = new FallbackDirector();
  private unsubscribers: (() => void)[];
  stateExtra: () => Partial<GameState> = () => ({});

  constructor(host: string, readonly bus: EventBus<GameEvents>, private position: { x: number; z: number }) {
    this.client = new RemnantClient(host, bus);
    this.unsubscribers = [
      bus.on('shrine', msg => this.select(msg.state)),
      bus.on('pause', msg => { this.paused = msg.paused || this.faction === null; }),
      bus.on('pulse', point => {
        if (this.paused || !this.faction || this.cooldown > 0) return;
        this.cooldown = 0.6;
        this.land.convert(point.x, point.z, 3, this.faction);
        bus.emit('pulse-applied', { ...point, faction: this.faction });
      }),
      bus.on('director', msg => {
        if (this.paused || !this.faction) return;
        if (msg.spread) this.land.spread(msg.spread.zone, msg.spread.amount);
        if (msg.spawn) bus.emit('spawn', msg.spawn);
      }),
      bus.on('game-event', msg => { this.client.send(msg); }),
      this.land.onChange(changes => bus.emit('land', { changes, share: this.land.share() })),
    ];
  }
  start(): void { this.client.start(); this.land.reset(); this.bus.emit('pause',{paused:true}); }
  select(state: ShrineState): void {
    if (state === 'hand') return;
    if (state === 'empty') { this.bus.emit('pause',{paused:true}); return; }
    const faction = state === 'sleepy' ? 'bloom' : 'blight';
    const previous = this.faction;
    if (!previous) {
      this.elapsed = 0; this.asksUsed = 0; this.land.reset(); this.cooldown = 0; this.stateElapsed = 0; this.fallback.reset();
    }
    this.faction = faction;
    this.bus.emit('faction',{faction});
    this.bus.emit('pause',{paused:false});
    if (!previous || previous !== faction) this.bus.emit('game-event', {type:'event',kind:previous?'faction_flip':'run_start',data:{faction}});
  }
  frame(input: Input): void {
    if (input.pressed('bloom')) this.bus.emit('shrine',{type:'shrine',state:'sleepy',confidence:1});
    if (input.pressed('blight')) this.bus.emit('shrine',{type:'shrine',state:'angry',confidence:1});
    if (input.pressed('empty')) this.bus.emit('shrine',{type:'shrine',state:'empty',confidence:1});
    if (input.pressed('ask') && !this.paused && this.faction) {
      this.asksUsed++; this.client.send({type:'ask'}); this.bus.emit('ask',undefined);
    }
  }
  update(dt: number): void {
    const active = !this.paused && this.faction !== null;
    if (active) {
      this.elapsed += dt; this.cooldown = Math.max(0,this.cooldown-dt); this.stateElapsed += dt;
      if (this.stateElapsed >= 2) { this.stateElapsed %= 2; this.client.send(this.state()); }
    }
    const director = this.fallback.update(dt,this.client.connected,active,this.faction);
    if (director) this.bus.emit('director',director);
  }
  state(): GameState {
    const zone = this.position.x < -10 ? 'hollow' : this.position.x < 10 ? 'glade' : 'rootdeep';
    return {type:'state',faction:this.faction,zone,shards_found:0,shards_total:3,land:this.land.share(),hp:1,lantern:0.5,enemies_near:0,elapsed_s:this.elapsed,asks_used:this.asksUsed,...this.stateExtra()};
  }
  dispose(): void { this.client.dispose(); this.unsubscribers.forEach(off => off()); }
}
