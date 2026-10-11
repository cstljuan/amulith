import type { LevelId } from './levels';
import type { ItemLoreId } from './items';
import type { NpcId } from './npcs';

export type CodexId = 'broken-gem' | 'sleeping-pair' | 'listening-shrine' | 'bloom' | 'blight' | 'hollow-rain' | 'rootdeep' | 'remnant' | 'lantern';
export type CodexDiscovery =
  | { kind: 'level'; id: LevelId }
  | { kind: 'npc'; id: NpcId }
  | { kind: 'item'; id: ItemLoreId };

export interface CodexEntry {
  id: CodexId;
  title: string;
  level: LevelId;
  provenance: 'knight-hacks-canon' | 'amulith-original';
  text: string;
  // Discover on any matching trigger. Consumers own collected IDs and save behavior.
  discoverAt: readonly CodexDiscovery[];
}

// Canon summaries are separate from original observations, names and interpretation.
// No entry supplies an official origin for spirits or history before the shattered gem.
export const CODEX_ENTRIES: readonly CodexEntry[] = [
  {
    id: 'broken-gem', title: 'What Fell Into the Soil', level: 'grove', provenance: 'knight-hacks-canon',
    text: 'At the end of Knight Hacks VIII, the gem shattered and Lenny was freed from its control. The pieces sank into the soil. Roots wrapped them, and a forest grew too fast. Six shards remain across its biomes. The curse has turned half the forest toxic.',
    discoverAt: [{ kind: 'item', id: 's1' }],
  },
  {
    id: 'sleeping-pair', title: 'Beside Lenny', level: 'grove', provenance: 'knight-hacks-canon',
    text: 'T.K., the knight, went missing in the forest. He lies moss-covered beside Lenny and will not wake. Bloom seeks to destroy the shards and free them both. Blight gathers the pieces to keep the forest corrupted.',
    discoverAt: [{ kind: 'level', id: 'grove' }],
  },
  {
    id: 'listening-shrine', title: 'A Place on the Stone', level: 'grove', provenance: 'amulith-original',
    text: 'Between the shrine stones, Wick keeps a small light. The spirit asks for no offering. The voice beneath the shrine is less patient when your hands are empty.',
    discoverAt: [{ kind: 'npc', id: 'wick' }, { kind: 'item', id: 'shrine-stone' }],
  },
  {
    id: 'bloom', title: 'Bloom', level: 'grove', provenance: 'knight-hacks-canon',
    text: 'Whisperseed, Dryad and Petalborn belong to Bloom. They seek to destroy the shards to free T.K. and Lenny.',
    discoverAt: [{ kind: 'npc', id: 'petal-mender' }],
  },
  {
    id: 'blight', title: 'Blight', level: 'hollow', provenance: 'knight-hacks-canon',
    text: 'Chomper, Spora and Collosus belong to Blight. They gather the shards to keep the forest corrupted.',
    discoverAt: [{ kind: 'npc', id: 'spore-keeper' }],
  },
  {
    id: 'hollow-rain', title: 'Rain Beneath the Caps', level: 'hollow', provenance: 'amulith-original',
    text: 'In Mushroom Hollow, each cap catches a different rhythm of rain. The Cap Listener waits for the note that rings too clearly. Water falls on bark with a soft sound. Broken glass answers sharply.',
    discoverAt: [{ kind: 'npc', id: 'cap-listener' }, { kind: 'item', id: 's3' }],
  },
  {
    id: 'rootdeep', title: 'What the Roots Hold', level: 'deepwood', provenance: 'amulith-original',
    text: 'Rootdeep narrows around the oldest roots. Bark fills the cracks in buried glass. The Root Witness watches without choosing a side. A root can shelter a small thing, or hold it where it cannot leave.',
    discoverAt: [{ kind: 'npc', id: 'root-witness' }, { kind: 'item', id: 's5' }],
  },
  {
    id: 'remnant', title: 'The Voice Left Behind', level: 'deepwood', provenance: 'amulith-original',
    text: 'Something left behind by the shattered gem is still awake deeper in the forest. Here, it calls itself Amulith. It tempts those who break its pieces and welcomes those who gather them. Its welcome is not a promise of safety.',
    discoverAt: [{ kind: 'item', id: 's6' }],
  },
  {
    id: 'lantern', title: 'Light With an Edge', level: 'grove', provenance: 'amulith-original',
    text: 'The Wanderer\'s lantern reveals glass hidden among roots. Open it wide, and more than glass may notice. The light makes no promise about what it finds.',
    discoverAt: [{ kind: 'item', id: 'lantern' }],
  },
];
