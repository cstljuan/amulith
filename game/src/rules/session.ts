import type { GameState, Faction } from '@protocol/messages';
import type { EventBus, GameEvents } from '../core/events.ts';
import type { Input } from '../input/Input.ts';
import { RemnantClient } from '../net/remnant.ts';
import { Enemies } from '../enemies/enemies.ts';
import { Land } from './land.ts';
import { FallbackDirector } from './fallbackDirector.ts';
import { Run } from './run.ts';
import { Lantern } from './lantern.ts';
import { LevelManager } from '../levels/manager.ts';
import type { LevelId } from '../levels/types.ts';
import { collideWith } from '../world/obstacles.ts';
import type { CircleObstacle } from '../world/obstacles.ts';
import { Shards } from './shards.ts';

export class GameSession {
  readonly levels: LevelManager;
  private groveObstacles: CircleObstacle[] = [];
  private complete = false;
  readonly land = new Land();
  readonly client: RemnantClient;
  readonly run: Run;
  readonly lantern: Lantern;
  readonly shards: Shards;
  readonly enemies: Enemies;
  private cooldown = 0;
  private stateElapsed = 0;
  private lanternDelta = 0;
  private pulseHeld = false;
  private relicButton: 'down'|'up' = 'up';
  private fallback = new FallbackDirector();
  private unsubscribers: (() => void)[];
  get faction(): Faction | null { return this.run.faction; }
  get paused(): boolean { return this.run.phase !== 'playing' || this.levels.transitioning; }
  get elapsed(): number { return this.run.elapsed; }
  get asksUsed(): number { return this.run.asksUsed; }

  constructor(host: string, readonly bus: EventBus<GameEvents>, private position: { x: number; z: number }, initial: LevelId = 'grove') {
    this.levels = new LevelManager(initial);
    this.client = new RemnantClient(host, bus);
    this.run = new Run(bus,()=>this.complete);this.lantern = new Lantern(bus);this.shards = new Shards(bus);this.enemies = new Enemies(bus,this.land);
    this.unsubscribers = [
      bus.on('shrine', msg => this.run.select(msg.state)),
      bus.on('relic', msg => {
        const edge = msg.button === 'down' && this.relicButton !== 'down';this.relicButton = msg.button;
        if(edge && !this.paused && this.run.ask()){this.land.tax(this.faction!);bus.emit('ask',undefined);}
        // Remnant handles the relic button; account for cost without a duplicate network ask.
      }),
      bus.on('pause', msg => { this.run.pause(msg.paused);if(this.paused)this.shards.cancelInteraction(); }),
      bus.on('pulse', point => {
        if (this.paused || !this.faction || this.cooldown > 0) return;
        this.cooldown = 0.6;
        this.land.convert(point.x, point.z, 3, this.faction);
        this.enemies.pulse(point.x,point.z);
        bus.emit('pulse-applied', { ...point, faction: this.faction });
      }),
      bus.on('director', msg => {
        if (this.paused || !this.faction) return;
        if (msg.spread) this.land.spread(msg.spread.zone, msg.spread.amount);
        if (msg.spawn) bus.emit('spawn', msg.spawn);
        if (msg.hint) this.shards.hint(msg.hint);
      }),
      bus.on('spawn',msg=>{if(!this.paused)this.enemies.spawn(msg.kind,msg.count,msg.zone);}),
      bus.on('shard-resolved',msg=>this.run.resolve(msg.id,msg.zone)),
      bus.on('game-event', msg => {
        if(msg.kind==='run_start'){
          this.complete=false;this.levels.reset();this.land.reset();this.shards.reset(false);this.cooldown=this.stateElapsed=0;this.fallback.reset();
          const prior = this.levels.initial==='deepwood'?['s3','s1'] as const:this.levels.initial==='hollow'?['s3'] as const:[];
          this.run.seedProgress([...prior]);
          for(const id of prior)this.shards.sites.find(site=>site.id===id)!.resolved=true;
          this.loadLevel();
        }
        if(msg.kind==='faction_flip'&&this.faction)this.enemies.flip(this.faction);
        this.client.send(msg);
      }),
      bus.on('run',msg=>{if(msg.phase==='attract'){this.complete=false;this.levels.reset();this.loadLevel(false);this.shards.reset(false);this.enemies.reset();this.land.reset();this.fallback.reset();}}),
      this.land.onChange(changes => bus.emit('land', { changes, share: this.land.share() })),
    ];
  }
  get obstacles(): readonly CircleObstacle[] { return this.levels.current.id==='grove'?this.groveObstacles:this.levels.current.obstacles; }
  setGroveObstacles(circles: readonly CircleObstacle[]): void { this.groveObstacles=circles.map(c=>({...c}));this.enemies.configure(this.levels.current,this.obstacles); }
  collide(position: {x:number;z:number}): void { collideWith(position,this.obstacles,this.levels.current.bounds); }
  private loadLevel(active = true): void {
    const level=this.levels.current;this.enemies.reset();this.enemies.configure(level,this.obstacles);
    Object.assign(this.position,level.start);
    if(active){this.shards.load(level.shards,level.shardCount);for(const spawn of level.enemies)this.enemies.spawn(this.faction==='bloom'?'chomper':'petalborn',spawn.count,spawn.zone,spawn.x!==undefined&&spawn.z!==undefined?{x:spawn.x,z:spawn.z}:undefined);}
    this.bus.emit('level',{id:level.id});
  }
  start(): void { this.client.start();this.land.reset();this.bus.emit('pause',{paused:true});this.bus.emit('run',this.run.snapshot()); }
  select(state: 'empty'|'sleepy'|'angry'|'hand'): void { this.run.select(state); }
  frame(input: Input): void {
    if (input.pressed('bloom')) this.bus.emit('shrine',{type:'shrine',state:'sleepy',confidence:1});
    if (input.pressed('blight')) this.bus.emit('shrine',{type:'shrine',state:'angry',confidence:1});
    if (input.pressed('empty')) this.bus.emit('shrine',{type:'shrine',state:'empty',confidence:1});
    this.lanternDelta=input.actions.lanternDelta;this.pulseHeld=input.held('pulse');
    if (input.pressed('ask') && !this.paused && this.run.ask()) {
      this.land.tax(this.faction!);this.client.send({type:'ask'});this.bus.emit('ask',undefined);
    }
  }
  update(dt: number): void {
    this.levels.update(dt,this.run.phase==='playing',()=>this.loadLevel(),(zone,count)=>this.enemies.spawn(this.faction==='bloom'?'chomper':'petalborn',count,zone));
    if(!this.levels.transitioning)this.run.update(dt);
    if (!this.paused && this.faction) {
      this.cooldown=Math.max(0,this.cooldown-dt);this.stateElapsed+=dt;
      this.lantern.update(dt,this.lanternDelta);
      this.enemies.update(dt,this.position,this.faction,this.lantern.detectionRange,amount=>this.run.hurt(amount));
      if(!this.paused)this.shards.update(dt,this.position,this.lantern.radius,this.pulseHeld,this.faction);
      const level=this.levels.current;
      const ready=level.shards.filter(candidate=>this.shards.sites.find(site=>site.id===candidate.id)?.resolved).length>=level.shardCount;
      if(ready&&Math.hypot(this.position.x-level.exit.x,this.position.z-level.exit.z)<=level.exit.radius){
        if(level.exit.next)this.levels.beginExit(this.position,true);
        else{this.complete=true;this.run.finish();}
      }
      if(this.stateElapsed>=2){this.stateElapsed%=2;if(!this.paused)this.client.send(this.state());}
    }
    const director=this.fallback.update(dt,this.client.connected,!this.paused,this.faction);
    if(director)this.bus.emit('director',director);
  }
  state(): GameState {
    const zone=this.levels.current.id==='hollow'?'hollow':this.levels.current.id==='deepwood'?'rootdeep':this.position.x<-10?'hollow':this.position.x<10?'glade':'rootdeep';const nearest=this.shards.nearest(this.position);
    return {type:'state',faction:this.faction,zone,shards_found:this.run.shards,shards_total:3,land:this.land.share(),hp:this.run.hp,lantern:this.lantern.value,enemies_near:this.enemies.near(this.position,this.lantern.detectionRange),elapsed_s:this.elapsed,asks_used:this.asksUsed,nearest_shard:nearest?.id??null,nearest_shard_zone:nearest?.zone??null};
  }
  dispose(): void { this.client.dispose();this.lantern.dispose();this.unsubscribers.forEach(off=>off()); }
}
