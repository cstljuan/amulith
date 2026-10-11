import test from 'node:test';
import assert from 'node:assert/strict';
import { Motion } from '../../player/motion.ts';
import { obstacleGrid } from '../../world/obstacles.ts';
import { Enemies } from '../enemies.ts';
import { EventBus } from '../../core/events.ts';
import { Land } from '../../rules/land.ts';

test('dash covers three units, normalizes diagonals, enforces cooldown and cancels on pause',()=>{
 const motion=new Motion();assert.equal(motion.dash({x:0,y:0},false),false);
 assert.equal(motion.dash({x:1,y:1},true),false);assert(motion.dash({x:1,y:1},false));
 let x=0,y=0;for(let i=0;i<12;i++){const d=motion.step(0.015,{x:0,y:0},false);x+=d.x;y+=d.y;}
 assert(Math.abs(Math.hypot(x,y)-3)<1e-8);assert.equal(motion.dash({x:1,y:0},false),false);
 motion.step(0.63,{x:0,y:0},false);assert(motion.dash({x:1,y:0},false));
 assert.deepEqual(motion.step(0.1,{x:1,y:0},true),{x:0,y:0});assert.deepEqual(motion.step(0.1,{x:0,y:0},false),{x:0,y:0});
});

test('enemies route around an inflated shrine circle and never enter its clearance',()=>{
 const circles=[{x:0,z:-0.2,r:0.75}],grid=obstacleGrid(circles);assert.equal(grid[20][30],false);
 const manager=new Enemies(new EventBus(),new Land(),()=>0.5);manager.setObstacles(circles);manager.spawn('chomper',1,'glade');
 const e=manager.enemies[0];assert(Math.hypot(e.x,e.z+0.2)>1.15);e.x=0;e.z=4;
 let detour=false;for(let i=0;i<360;i++){manager.update(1/60,{x:0,z:-4},'bloom',14,()=>{});assert(Math.hypot(e.x,e.z+0.2)>1.15);if(Math.abs(e.x)>1.5)detour=true;}
 assert(detour);assert(e.z<-2);
});
