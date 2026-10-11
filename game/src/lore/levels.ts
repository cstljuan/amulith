// Progression levels are distinct from the protocol's hollow, glade and rootdeep regions.
// Shrine Grove contains Mushroom Hollow, Petal Glade and Rootdeep in the existing hero zone.
export type LevelId = 'grove' | 'hollow' | 'deepwood';

export const LEVEL_LORE: Record<LevelId, {
  name: string;
  subtitle: string;
  introLines: string[];
  outroBloom: string[];
  outroBlight: string[];
  signs: { id: string; text: string }[];
  ambience: { mood: string; notes: string };
}> = {
  grove: {
    name: 'Shrine Grove',
    subtitle: 'Where the broken gem took root',
    introLines: [
      'Place him on the stone. The roots remember Lenny.',
      'The knight sleeps beneath my moss. Come closer, little Wanderer.',
    ],
    outroBloom: [
      'A piece of me falls silent. You call that kindness?',
      'Go on. The moss still holds the knight.',
    ],
    outroBlight: [
      'You brought my broken heart a little closer.',
      'Follow the roots. They know the way home.',
    ],
    signs: [
      { id: 'grove-shrine', text: 'Lenny was freed when the gem broke. Something beneath the stone stayed awake.' },
      { id: 'grove-paths', text: 'Mushroom Hollow, Petal Glade, Rootdeep. Follow the paths, but mind what follows you.' },
      { id: 'grove-moss', text: 'T.K. lies beside Lenny. Leave room for the knight to stand.' },
    ],
    ambience: {
      mood: 'hushed expectancy',
      notes: 'Warm shrine light against crowded roots. Bloom brings gold between the leaves; Blight lets violet shadow gather around the stone.',
    },
  },
  hollow: {
    name: 'Mushroom Hollow',
    subtitle: 'Under the listening caps',
    introLines: [
      'Keep your lantern close. Even the caps lean toward a secret.',
      'Spora listens where you cannot see. I listen where you cannot reach.',
    ],
    outroBloom: [
      'You leave flowers where my voice used to be.',
      'Do you think the oldest roots will open for you?',
    ],
    outroBlight: [
      'Another piece remembers me. Spora will hear it singing.',
      'Deeper now. The roots have kept something for us.',
    ],
    signs: [
      { id: 'hollow-caps', text: 'The caps rose after the shards sank. Beneath them, the soil never quite sleeps.' },
      { id: 'hollow-whisperseed', text: 'Whisperseed listens for the silence after a shard breaks.' },
      { id: 'hollow-spora', text: 'Spora keeps watch beneath the caps. A gathered shard is a promise kept to the gem.' },
    ],
    ambience: {
      mood: 'close and watchful',
      notes: 'Low caps crowd the lantern and hide the distance. Bloom opens pockets of golden light; Blight leaves luminous veins beneath a violet canopy.',
    },
  },
  deepwood: {
    name: 'Rootdeep',
    subtitle: 'Where the oldest roots hold fast',
    introLines: [
      'Here is what the gem left behind. I have been awake all this time.',
      'The knight has his sword. You have your lantern. I have the roots.',
    ],
    outroBloom: [
      'The last piece breaks. I cannot hold the knight any longer.',
      'Let T.K. stand beside Lenny. Leave me the dark beneath the roots.',
    ],
    outroBlight: [
      'My pieces meet again. Listen to the trees closing behind you.',
      'Let T.K. sleep beside Lenny. You have brought me home.',
    ],
    signs: [
      { id: 'deepwood-buried', text: 'The gem shattered. Its pieces sank. The roots grew faster than anyone could follow.' },
      { id: 'deepwood-dryad', text: 'Dryad and Petalborn tend a path toward the knight. No root has the right to keep him.' },
      { id: 'deepwood-collosus', text: 'Chomper, Spora, Collosus. Keep the pieces together. Keep the forest ours.' },
    ],
    ambience: {
      mood: 'held breath',
      notes: 'Thick roots close around the lantern. Bloom light finds the moss-covered knight; Blight draws every vein toward the buried gem.',
    },
  },
};
