import type { ShardId, Zone } from '@protocol/messages';
import type { LevelId } from '../lore/levels.ts';
import type { CircleObstacle } from '../world/obstacles.ts';
export type { LevelId } from '../lore/levels.ts';
export interface LevelDefinition {
  id: LevelId;
  bounds: { minX: number; maxX: number; minZ: number; maxZ: number };
  start: { x: number; z: number };
  terrain: { groundTint: number; propTint: number; profile: 'grove' | 'hollow' | 'roots' };
  obstacles: CircleObstacle[];
  props: { x: number; z: number; asset: string; width: number; height: number; tint?: number }[];
  shards: { id: ShardId; zone: Zone; x: number; z: number }[];
  shardCount: number;
  enemies: { zone: Zone; count: number; x?: number; z?: number }[];
  waves: { after: number; zone: Zone; count: number }[];
  tuning: { chaseSpeed: number; wanderSpeed: number; damage: number; attackCooldown: number; landRadius: number };
  exit: { x: number; z: number; radius: number; next: LevelId | null };
  signs: { id: string; x: number; z: number }[];
  targetSeconds: number;
}
