import type { EnemyKind, Faction, Zone } from '@protocol/messages';
import type { EventBus, GameEvents } from '../core/events.ts';
import { astar } from '../pathfinding/astar.ts';
import type { Point } from '../pathfinding/astar.ts';
import type { Land } from '../rules/land.ts';
export interface Enemy {
  id:number;kind:EnemyKind;state:'wander'|'chase'|'attack'|'defeated';x:number;z:number;
  hits:number;attackCooldown:number;pathTimer:number;landTimer:number;path:Point[];target:Point;
}
const cell=(x:number,z:number):Point=>({x:Math.max(0,Math.min(59,Math.floor(x+30))),y:Math.max(0,Math.min(39,Math.floor(z+20)))});
export class Enemies {
  enemies: Enemy[] = [];
  private sequence = 0;
  private grid: boolean[][] = Array.from({length:40},()=>Array(60).fill(true));
  constructor(private bus:EventBus<GameEvents>,private land:Land,private random:()=>number=Math.random){}
  reset():void{this.enemies=[];this.changed();}
  spawn(kind:EnemyKind,count:number,zone:Zone):void{
    this.enemies=this.enemies.filter(e=>e.state!=='defeated');
    const center=zone==='hollow'?-20:zone==='glade'?0:20;
    for(let i=0;i<Math.min(count,24-this.enemies.length);i++){
      const x=center+(this.random()-0.5)*12,z=(this.random()-0.5)*28;
      this.enemies.push({id:++this.sequence,kind,state:'wander',x,z,hits:0,attackCooldown:0,pathTimer:0,landTimer:0,path:[],target:cell(x,z)});
    }this.changed();
  }
  flip(faction:Faction):void{for(const e of this.enemies){e.kind=faction==='bloom'?'chomper':'petalborn';e.path=[];}this.changed();}
  pulse(x:number,z:number):void{for(const e of this.enemies)if(e.state!=='defeated'&&Math.hypot(e.x-x,e.z-z)<=3){e.hits++;if(e.hits>=2)e.state='defeated';}this.changed();}
  near(position:{x:number;z:number},radius:number):number{return this.enemies.filter(e=>e.state!=='defeated'&&Math.hypot(e.x-position.x,e.z-position.z)<=radius).length;}
  update(dt:number,position:{x:number;z:number},faction:Faction,range:number,hurt:(amount:number)=>void):void{
    for(const e of this.enemies){
      if(e.state==='defeated')continue;
      e.attackCooldown=Math.max(0,e.attackCooldown-dt);e.pathTimer=Math.max(0,e.pathTimer-dt);e.landTimer+=dt;
      const distance=Math.hypot(e.x-position.x,e.z-position.z);
      const hostile=e.kind===(faction==='bloom'?'chomper':'petalborn');
      e.state=hostile&&distance<=1.2?'attack':hostile&&distance<=range?'chase':'wander';
      if(e.state==='attack'&&e.attackCooldown<=0){e.attackCooldown=1;hurt(0.1);}
      if(e.state!=='attack'){
        if(e.pathTimer<=0){
          e.pathTimer=0.5;
          if(e.state==='chase')e.target=cell(position.x,position.z);
          else if(!e.path.length)e.target=cell(Math.max(-29,Math.min(29,e.x+(this.random()-0.5)*10)),Math.max(-19,Math.min(19,e.z+(this.random()-0.5)*10)));
          e.path=astar(this.grid,cell(e.x,e.z),e.target).slice(1);
        }
        const next=e.path[0];if(next){const x=next.x-29.5,z=next.y-19.5,dx=x-e.x,dz=z-e.z,d=Math.hypot(dx,dz),step=dt*(e.state==='chase'?2.5:1);
          if(d<=step){e.x=x;e.z=z;e.path.shift();}else{e.x+=dx/d*step;e.z+=dz/d*step;}}
      }
      if(e.landTimer>=1){e.landTimer%=1;this.land.convert(e.x,e.z,0.8,e.kind==='chomper'?'blight':'bloom');}
    }
    this.changed();
  }
  private changed():void{this.bus.emit('enemies',this.enemies.map(({id,kind,state,x,z})=>({id,kind,state,x,z})));}
}
