import type { Faction } from '@protocol/messages';
import type { LevelId } from './levels';

// Original Amulith spirits, not additional Knight Hacks canon characters.
export type NpcId = 'wick' | 'petal-mender' | 'cap-listener' | 'spore-keeper' | 'root-witness' | 'thorn-carrier';

export interface NpcLore {
  id: NpcId;
  name: string;
  level: LevelId;
  role: string;
  provenance: 'amulith-original';
  description: string;
  barks: Record<Faction, readonly string[]>;
}

// Text only. Placement, sprites and bark timing belong to the game and UI lanes.
export const NPC_LORE: readonly NpcLore[] = [
  {
    id: 'wick', name: 'Wick', level: 'grove', role: 'Shrine spirit', provenance: 'amulith-original',
    description: 'A small light lingering between the shrine stones.',
    barks: {
      bloom: ['Leave a little light beside the sleeping knight.', 'The stone listens. That does not mean it tells the truth.'],
      blight: ['Your lantern is warm. The stone wants something warmer.', 'Bring it a piece, and listen to how quietly it thanks you.'],
    },
  },
  {
    id: 'petal-mender', name: 'Petal Mender', level: 'grove', role: 'Bloom wanderer', provenance: 'amulith-original',
    description: 'A wandering spirit gathering petals caught in the shrine cracks.',
    barks: {
      bloom: ['Whisperseed leaves room for another root. Try it.', 'Petalborn stand where the flowers are easiest to crush.'],
      blight: ['I will mend what your footsteps leave.', 'Gather every piece if you must. Leave the sleeping pair their light.'],
    },
  },
  {
    id: 'cap-listener', name: 'Cap Listener', level: 'hollow', role: 'Hollow spirit', provenance: 'amulith-original',
    description: 'A patient spirit beneath a broad mushroom cap.',
    barks: {
      bloom: ['Listen beneath the dripping caps. Glass sounds different from rain.', 'Dryad knows a root can hold without owning.'],
      blight: ['The caps carry your footsteps farther than you think.', 'Chomper hears the hum before I do. Watch where it waits.'],
    },
  },
  {
    id: 'spore-keeper', name: 'Spore Keeper', level: 'hollow', role: 'Blight wanderer', provenance: 'amulith-original',
    description: 'A drifting spirit that cups pale spores in folded leaves.',
    barks: {
      bloom: ['You call it rot. Spora calls it a place to grow.', 'Break the glass, then tell the roots what they should hold.'],
      blight: ['Spora leaves a trail even in still air.', 'Carry the pieces gently. The voice inside them is already sharp.'],
    },
  },
  {
    id: 'root-witness', name: 'Root Witness', level: 'deepwood', role: 'Rootdeep spirit', provenance: 'amulith-original',
    description: 'A still spirit outlined in moss where the largest roots meet.',
    barks: {
      bloom: ['The roots tightened around glass. They can learn to let go.', 'Do not mistake the quiet for an empty forest.'],
      blight: ['You bring the broken thing closer to itself.', 'A closed treeline shelters something. It also keeps something in.'],
    },
  },
  {
    id: 'thorn-carrier', name: 'Thorn Carrier', level: 'deepwood', role: 'Blight wanderer', provenance: 'amulith-original',
    description: 'A spirit carrying a branch too large for its narrow silhouette.',
    barks: {
      bloom: ['Collosus would keep the roots bound. You have chosen another burden.', 'A thorn cannot decide whose hand reaches for it.'],
      blight: ['Collosus holds fast. Can you?', 'When the pieces join, will the voice still need your hands?'],
    },
  },
];
