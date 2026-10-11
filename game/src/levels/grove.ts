import type { LevelDefinition } from './types.ts';
export const GROVE: LevelDefinition = {
  id: 'grove', bounds: { minX: -30, maxX: 30, minZ: -20, maxZ: 20 }, start: { x: 0, z: 5 },
  terrain: { groundTint: 0x759b83, propTint: 0xffffff, profile: 'grove' }, obstacles: [], props: [],
  shards: [{ id: 's3', zone: 'glade', x: -4, z: -10 }, { id: 's4', zone: 'glade', x: 7, z: 7 }], shardCount: 1,
  enemies: [{ zone: 'hollow', count: 2 }, { zone: 'rootdeep', count: 2 }], waves: [],
  tuning: { chaseSpeed: 2.5, wanderSpeed: 1, damage: 0.1, attackCooldown: 1, landRadius: 0.8 },
  exit: { x: -18, z: 7, radius: 2, next: 'hollow' },
  signs: [{ id: 'grove-paths', x: -12, z: 7 }, { id: 'grove-shrine', x: 0, z: 5 }], targetSeconds: 110,
};
