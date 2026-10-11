import type { LevelDefinition } from './types.ts';
// Baseline for the dedicated Rootdeep layout task.
export const DEEPWOOD: LevelDefinition = {
  id:'deepwood',bounds:{minX:-18,maxX:18,minZ:-16,maxZ:16},start:{x:0,z:12},
  terrain:{groundTint:0x63546e,propTint:0x9977bb,profile:'roots'},
  obstacles:[{x:-6,z:3,r:2},{x:6,z:-3,r:2}],
  props:[{x:-6,z:3,asset:'props/blight-tree.png',width:4,height:6},{x:6,z:-3,asset:'props/blight-tree.png',width:4,height:6}],
  shards:[{id:'s5',zone:'rootdeep',x:0,z:-11},{id:'s6',zone:'rootdeep',x:12,z:-10}],shardCount:1,
  enemies:[{zone:'rootdeep',count:3,x:10,z:-6}],waves:[{after:30,zone:'rootdeep',count:2}],
  tuning:{chaseSpeed:3.1,wanderSpeed:1.3,damage:0.12,attackCooldown:0.9,landRadius:1},
  exit:{x:0,z:-13,radius:2,next:null},signs:[{id:'deepwood-buried',x:0,z:6}],targetSeconds:70,
};
