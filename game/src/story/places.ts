import type { LevelDefinition } from '../levels/types.ts';
import { NPC_LORE } from '../lore/npcs.ts';
export function spiritPlaces(level: LevelDefinition) {
  const places = level.id === 'grove' ? [...level.signs].reverse() : level.signs;
  return NPC_LORE.filter(npc => npc.level === level.id).map((npc, index) => ({
    ...npc, x: places[index]?.x ?? level.start.x, z: places[index]?.z ?? level.start.z,
  }));
}
