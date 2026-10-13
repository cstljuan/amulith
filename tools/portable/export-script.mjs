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
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const blocks=text.split('\n\n').map(part=>part.startsWith('# ')?`<h1>${escape(part.slice(2))}</h1>`:part.startsWith('## ')?`<h2>${escape(part.slice(3))}</h2>`:part.startsWith('### ')?`<h3>${escape(part.slice(4))}</h3>`:`<p>${escape(part).replace(/^\*\*(.*?):\*\*/, '<strong>$1:</strong>')}</p>`).join('\n');
const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Amulith | The complete story</title><style>html{background:#120d1a;color:#f3ead2}body{max-width:760px;padding:40px 24px;margin:auto;font:20px/1.65 Georgia,serif}h1{font-size:44px;font-weight:400}h2{color:#e8bd5a;font-size:28px;margin-top:70px;border-top:1px solid #e8bd5a66;padding-top:30px}h3{font-size:23px;color:#cfc4e0}strong{color:#e8bd5a}a{color:#e8bd5a}nav{font:15px system-ui,sans-serif;padding-bottom:24px}@media print{html{background:white;color:black}h2,strong,a{color:black}}</style></head><body><nav><a href="./">Back to the game</a> / The complete authored portable script</nav>${blocks}<footer><p>Original Knight Hacks lore, Lenny and T.K. belong to its design team. Non-commercial fan project.</p></footer></body></html>`;
await writeFile(new URL('../../game/public/story-reader.html',import.meta.url),html);
console.log('Exported the full script from executable narrative data.');
