import type { Faction, ShardId } from '@protocol/messages';
import type { LevelId } from './levels';

export type RelicId = 'lantern' | 'shrine-stone';
export type ItemLoreId = ShardId | RelicId;

export interface ItemLore {
  id: ItemLoreId;
  name: string;
  kind: 'shard' | 'relic';
  // Suggested lore placement only, never a protocol Zone or a spawn instruction.
  level: LevelId;
  provenance: 'amulith-original';
  description: string;
  factionText: Record<Faction, string>;
}

// The six shards are canon. Their titles, descriptions and suggested sites are fan additions.
// A run still resolves three shard sites; this catalog does not change that rule.
export const SHARD_LORE: Record<ShardId, ItemLore> = {
  s1: {
    id: 's1', name: 'Stonewarm Shard', kind: 'shard', level: 'grove', provenance: 'amulith-original',
    description: 'A broken edge holds the warmth of the shrine after the light has moved.',
    factionText: { bloom: 'Break the glass. Let the stone keep only the warmth.', blight: 'Carry its warmth back to the waiting voice.' },
  },
  s2: {
    id: 's2', name: 'Petalcaught Shard', kind: 'shard', level: 'grove', provenance: 'amulith-original',
    description: 'Petals cling to the sharp face, trembling without wind.',
    factionText: { bloom: 'Free the petals from the edge that holds them.', blight: 'The petals cannot hide this piece from you.' },
  },
  s3: {
    id: 's3', name: 'Capshadow Shard', kind: 'shard', level: 'hollow', provenance: 'amulith-original',
    description: 'Beneath a mushroom cap, a sliver makes the dripping water ring.',
    factionText: { bloom: 'Leave the hollow its rain. Silence the glass.', blight: 'Take the note beneath the rain. It belongs with the others.' },
  },
  s4: {
    id: 's4', name: 'Sporelit Shard', kind: 'shard', level: 'hollow', provenance: 'amulith-original',
    description: 'Pale spores gather at its edges like listeners around a whisper.',
    factionText: { bloom: 'Scatter the listeners. Break what calls them here.', blight: 'The spores know what you carry. Follow their turning.' },
  },
  s5: {
    id: 's5', name: 'Rootbound Shard', kind: 'shard', level: 'deepwood', provenance: 'amulith-original',
    description: 'Roots clasp the glass so closely that bark fills its cracks.',
    factionText: { bloom: 'The roots held a broken thing. Give them room to grow.', blight: 'Lift it gently. Even roots must loosen their grip for you.' },
  },
  s6: {
    id: 's6', name: 'Stillheart Shard', kind: 'shard', level: 'deepwood', provenance: 'amulith-original',
    description: 'The smallest gleam carries a hum that makes the dark feel crowded.',
    factionText: { bloom: 'A quiet forest need not be a sleeping prison.', blight: 'Bring the hum home. Hear what answers.' },
  },
};

export const RELIC_LORE: Record<RelicId, ItemLore> = {
  lantern: {
    id: 'lantern', name: 'Wanderer\'s Lantern', kind: 'relic', level: 'grove', provenance: 'amulith-original',
    description: 'Warm light catches broken glass and the eyes watching it.',
    factionText: { bloom: 'Make room for light, but watch what steps into it.', blight: 'Open the light wide enough to find what the roots keep.' },
  },
  'shrine-stone': {
    id: 'shrine-stone', name: 'Listening Stone', kind: 'relic', level: 'grove', provenance: 'amulith-original',
    description: 'The shrine holds a place for Lenny. Beneath it, a patient voice waits.',
    factionText: { bloom: 'Ask what the voice wants before trusting what it offers.', blight: 'It welcomes your offering. It has not promised to let you go.' },
  },
};
