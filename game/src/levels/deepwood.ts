import type { LevelDefinition } from './types.ts';
// Root banks make the final approach turn twice; both shard pockets stay open.
export const DEEPWOOD: LevelDefinition = {
  id: 'deepwood',
  bounds: { minX: -16, maxX: 16, minZ: -12, maxZ: 12 },
  start: { x: 0, z: 9 },
  terrain: { groundTint: 0x63546e, propTint: 0x9977bb, profile: 'roots' },
  obstacles: [
    { x: -10, z: 4, r: 1.35 }, { x: -6, z: 4, r: 1.35 }, { x: -2, z: 4, r: 1.35 },
    { x: 3, z: -2, r: 1.35 }, { x: 7, z: -2, r: 1.35 }, { x: 11, z: -2, r: 1.35 },
  ],
  props: [
    { x: -10, z: 4, asset: 'props/blight-tree.png', width: 4, height: 6 },
    { x: -6, z: 4, asset: 'props/blight-tree.png', width: 4, height: 6 },
    { x: -2, z: 4, asset: 'props/blight-tree.png', width: 4, height: 6 },
    { x: 3, z: -2, asset: 'props/blight-tree.png', width: 4, height: 6 },
    { x: 7, z: -2, asset: 'props/blight-tree.png', width: 4, height: 6 },
    { x: 11, z: -2, asset: 'props/blight-tree.png', width: 4, height: 6 },
    { x: 0, z: -9, asset: 'props/shrine-circle.png', width: 4, height: 2, tint: 0x9977bb },
  ],
  shards: [
    { id: 's5', zone: 'rootdeep', x: -11, z: -7 },
    { id: 's6', zone: 'rootdeep', x: 11, z: -7 },
  ],
  shardCount: 1,
  enemies: [
    { zone: 'rootdeep', count: 2, x: -8, z: -1 },
    { zone: 'rootdeep', count: 1, x: 9, z: -7 },
  ],
  waves: [{ after: 22, zone: 'rootdeep', count: 1 }, { after: 42, zone: 'rootdeep', count: 1 }],
  tuning: { chaseSpeed: 3.35, wanderSpeed: 1.3, damage: 0.14, attackCooldown: 0.85, landRadius: 1.1 },
  exit: { x: 0, z: -9, radius: 2, next: null },
  signs: [
    { id: 'deepwood-buried', x: 0, z: 7 },
    { id: 'deepwood-dryad', x: -11, z: -5 },
    { id: 'deepwood-collosus', x: 11, z: -5 },
  ],
  targetSeconds: 60,
};
