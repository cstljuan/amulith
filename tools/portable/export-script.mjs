import { writeFile } from 'node:fs/promises';
import { AMBIENT, REACTIONS } from '../../game/src/story/lines.ts';
import { SCENES, CLOSINGS } from '../../game/src/story/scenes.ts';
let text='# Amulith: The roots remember\n\nComplete authored portable script. Original fan-project dialogue directed by Juan Castillo. Knight Hacks starting lore remains credited to its design team. These lines are scripted, not live inference. T.K. and Lenny remain silent.\n\n';
const format=beats=>beats.map(b=>`**${b.speaker}:** ${b.text}`).join('\n\n');
for(const [level,factions] of Object.entries(AMBIENT))for(const [faction,lines] of Object.entries(factions))text+=`## ${level} / ${faction} / ambient\n\n${format(lines.map(text=>({speaker:'Amulith',text})))}\n\n`;
for(const [event,factions] of Object.entries(REACTIONS))for(const [faction,lines] of Object.entries(factions))text+=`## ${event} / ${faction}\n\n${format(lines.map(text=>({speaker:'Amulith',text})))}\n\n`;
for(const scene of SCENES){text+=`## ${scene.title} / ${scene.faction}\n\n${format(scene.beats)}\n\n`;for(const choice of scene.choices)text+=`### Choice: ${choice.label}\n\n${format(choice.beats)}\n\n`;}
for(const [faction,endings]of Object.entries(CLOSINGS))for(const [result,beats]of Object.entries(endings))text+=`## ${faction} / ${result} ending\n\n${format(beats)}\n\n`;
await writeFile(new URL('../../docs/story-script.md',import.meta.url),text);
console.log('Exported the full script from executable narrative data.');
