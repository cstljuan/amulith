import type { Faction, ShardId, Zone, Hint } from '@protocol/messages';
import type { EventBus, GameEvents } from '../core/events.ts';
export interface Shard {
  id: ShardId; zone: Zone; x: number; z: number;
  active: boolean; visible: boolean; found: boolean; resolved: boolean; hinted: boolean; progress: number;
}
const sites: {id:ShardId;zone:Zone;x:number;z:number}[] = [
  {id:'s1',zone:'hollow',x:-22,z:-8},{id:'s2',zone:'hollow',x:-17,z:9},
  {id:'s3',zone:'glade',x:-4,z:-10},{id:'s4',zone:'glade',x:7,z:7},
  {id:'s5',zone:'rootdeep',x:17,z:-9},{id:'s6',zone:'rootdeep',x:25,z:11},
];
export class Shards {
  readonly sites: Shard[] = sites.map(s=>({...s,active:false,visible:false,found:false,resolved:false,hinted:false,progress:0}));
  constructor(private bus: EventBus<GameEvents>,private random: ()=>number=Math.random) {}
  reset(active: boolean): void {
    const order = [...this.sites];
    for(let i=order.length-1;i>0;i--){const j=Math.floor(this.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
    for(const site of this.sites) Object.assign(site,{active:active&&order.slice(0,3).includes(site),visible:false,found:false,resolved:false,hinted:false,progress:0});
    this.changed();
  }
  load(candidates: {id:ShardId;zone:Zone;x:number;z:number}[], count: number): void {
    const selected=[...candidates];
    for(let i=selected.length-1;i>0;i--){const j=Math.floor(this.random()*(i+1));[selected[i],selected[j]]=[selected[j],selected[i]];}
    for(const site of this.sites) { site.active=false;site.visible=false;site.progress=0; }
    for(const candidate of selected.slice(0,count)) {
      const site=this.sites.find(s=>s.id===candidate.id)!; Object.assign(site,candidate,{active:!site.resolved,found:false,hinted:false,progress:0});
    }
    this.changed();
  }
  hint(hint: Hint): void { const shard=this.sites.find(s=>s.id===hint.shard);if(!shard)return;shard.hinted=true;this.changed(); }
  cancelInteraction(): void { for(const shard of this.sites)shard.progress=0;this.changed(); }
  nearest(position: {x:number;z:number}): Shard | null {
    return this.sites.filter(s=>s.active&&!s.resolved).sort((a,b)=>Math.hypot(a.x-position.x,a.z-position.z)-Math.hypot(b.x-position.x,b.z-position.z))[0]??null;
  }
  update(dt: number, position: {x:number;z:number}, radius: number, held: boolean, faction: Faction): void {
    let changed = false;
    for(const shard of this.sites){
      const distance=Math.hypot(shard.x-position.x,shard.z-position.z);
      const visible=shard.active&&!shard.resolved&&distance<=radius;
      if(shard.visible!==visible){shard.visible=visible;changed=true;}
      if(visible&&!shard.found){shard.found=true;changed=true;this.bus.emit('game-event',{type:'event',kind:'shard_found',data:{shard:shard.id,zone:shard.zone}});}
      const progress=visible&&distance<=1.4&&held?Math.min(1.5,shard.progress+dt):0;
      if(progress!==shard.progress){shard.progress=progress;changed=true;}
      if(shard.progress>=1.5){shard.resolved=true;shard.visible=false;shard.progress=0;changed=true;this.bus.emit('shard-resolved',{id:shard.id,zone:shard.zone,faction});}
    }
    if(changed)this.changed();
  }
  private changed(): void { this.bus.emit('shards',this.sites.map(s=>({...s}))); }
}
