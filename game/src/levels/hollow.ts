import type { LevelDefinition } from './types.ts';
// Baseline for the dedicated Mushroom Hollow layout task.
export const HOLLOW: LevelDefinition = {
  id:'hollow',bounds:{minX:-22,maxX:22,minZ:-14,maxZ:14},start:{x:-18,z:0},
  terrain:{groundTint:0x8c795f,propTint:0xd5b78e,profile:'hollow'},
  obstacles:[{x:-6,z:3,r:1.2},{x:6,z:-3,r:1.2}],
  props:[{x:-6,z:3,asset:'props/mushrooms.png',width:3,height:3},{x:6,z:-3,asset:'props/blight-mushrooms.png',width:3,height:3}],
  shards:[{id:'s1',zone:'hollow',x:-5,z:-9},{id:'s2',zone:'hollow',x:8,z:9}],shardCount:1,
  enemies:[{zone:'hollow',count:2,x:-7,z:0},{zone:'hollow',count:1,x:14,z:0}],waves:[{after:30,zone:'hollow',count:2}],
  tuning:{chaseSpeed:3,wanderSpeed:1.15,damage:0.12,attackCooldown:0.9,landRadius:1},
  exit:{x:18,z:0,radius:2,next:'deepwood'},signs:[{id:'hollow-caps',x:-15,z:0}],targetSeconds:75,
};
