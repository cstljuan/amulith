import type { LevelDefinition } from './types.ts';

// Caps create two loops around a clear central lane. Either shard can be reached
// before returning to the eastward exit, even with the larger pathfinding margin.
const caps = [
  { x: -13, z: -6, r: 1.2 }, { x: -13, z: 6, r: 1.2 },
  { x: -9, z: -6, r: 1.3 }, { x: -9, z: 6, r: 1.3 },
  { x: -2, z: -4, r: 1.4 }, { x: -2, z: 4, r: 1.4 },
  { x: 3, z: -4, r: 1.2 }, { x: 3, z: 4, r: 1.2 },
  { x: 11, z: -7, r: 1.4 }, { x: 14, z: 6, r: 1.3 },
  { x: 18, z: -7, r: 1.1 }, { x: -18, z: 11, r: 1.1 },
];

export const HOLLOW: LevelDefinition = {
  id: 'hollow',
  bounds: { minX: -22, maxX: 22, minZ: -14, maxZ: 14 },
  start: { x: -18, z: 0 },
  terrain: { groundTint: 0xb0a181, propTint: 0xc5a7d3, profile: 'hollow' },
  obstacles: caps,
  props: caps.map((cap, index) => ({
    x: cap.x, z: cap.z,
    asset: index % 3 === 0 ? 'props/blight-mushrooms.png' : 'props/mushrooms.png',
    width: cap.r * 2.4, height: cap.r * 2.5,
    tint: index % 3 === 0 ? 0xb69acd : 0xd6c4a4,
  })),
  shards: [
    { id: 's1', zone: 'hollow', x: -5, z: -9 },
    { id: 's2', zone: 'hollow', x: 8, z: 9 },
  ],
  shardCount: 1,
  enemies: [
    { zone: 'hollow', count: 1, x: -7, z: 0 },
    { zone: 'hollow', count: 1, x: 14, z: 0 },
  ],
  waves: [
    { after: 18, zone: 'hollow', count: 2 },
    { after: 38, zone: 'hollow', count: 2 },
    { after: 58, zone: 'hollow', count: 2 },
  ],
  tuning: { chaseSpeed: 3, wanderSpeed: 1.15, damage: 0.12, attackCooldown: 0.9, landRadius: 1 },
  exit: { x: 18, z: 0, radius: 2, next: 'deepwood' },
  signs: [
    { id: 'hollow-caps', x: -17, z: -3 },
    { id: 'hollow-whisperseed', x: -7, z: -10 },
    { id: 'hollow-spora', x: 10, z: 10 },
  ],
  targetSeconds: 75,
};
