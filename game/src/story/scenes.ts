import type { Faction } from '@protocol/messages';
import type { LevelId } from '../lore/levels.ts';
import { lines } from './lines.ts';

export interface Beat { speaker: string; text: string }
export interface StoryScene {
  id: string; title: string; level: LevelId; faction: Faction;
  beats: Beat[];
  choices: { label: string; beats: Beat[] }[];
}
const beats = (text: string): Beat[] => lines(text).map(line => {
  const index = line.indexOf('|');
  return { speaker: line.slice(0, index).trim(), text: line.slice(index + 1).trim() };
});
function scene(id: string, title: string, level: LevelId, faction: Faction, text: string,
  a: [string, string], b: [string, string]): StoryScene {
  return { id, title, level, faction, beats: beats(text), choices: [a, b].map(([label, text]) => ({ label, beats: beats(text) })) };
}

// T.K. and Lenny remain silent. The speaking spirits and their accounts are original fan additions.
export const SCENES: StoryScene[] = [
  scene('wick-bloom', 'A light left beside the stone', 'grove', 'bloom', `
Wick|Leave your lantern here a moment. I want to see whether its warmth changes the stone.
Wanderer|Does the stone need changing?
Wick|I do not know. I have been watching the moss. It is easier to understand than a voice.
Amulith|You could ask the voice. It has been patient enough to answer.
Wick|Patience can hold a door open. It can also hold it shut.
Wanderer|The knight is still beneath it.
Wick|Yes. That is the part I can show you without asking you to believe me.
Amulith|You look at the sleepers and call my roots a prison.
Wick|I look at the space around them. There is not enough for someone to stand.
Wanderer|Can breaking the glass make that space?
Wick|Perhaps. Do not let perhaps become a promise simply because you want it warmly enough.
Amulith|A small light has learned to make large doubts.
Wick|Doubts fit inside a lantern. Certainty often spills out and burns something.
Wanderer|Then I will carry the doubt with me.
`, ['Ask whether Amulith can be trusted', `
Wanderer|Does it ever tell the truth?
Wick|Often, I think. The difficult part is what it wants a truth to make you do.
Amulith|I want my pieces. I have not hidden that from you.
Wick|No. Keep that answer beside every other answer it gives.
Wanderer|I will listen without giving it my hands.
Wick|That sounds like a place to begin.
`], ['Leave light beside the sleepers', `
Wanderer|I would rather leave a little warmth here.
Wick|Then hold still. A small kindness need not explain what comes after it.
Amulith|My roots can keep that warmth.
Wick|For a moment. Then let it go with the Wanderer.
Wanderer|The lantern must come with me.
Wick|Yes. Leave the memory of it. That is enough for a stone.
`]),
  scene('wick-blight', 'The warmth of a returning hand', 'grove', 'blight', `
Wick|You turn toward the darker roots. Your lantern still looks warm.
Wanderer|Should it look different?
Wick|No. I was hoping it would not.
Amulith|The light has found a better use than accusing every shadow.
Wick|A useful light can still show a closed hand.
Wanderer|The forest grew around the pieces. I do not want to call all of it a mistake.
Wick|That is a careful thought. Keep it careful when the glass begins to feel like an answer.
Amulith|Bring the pieces, and the forest will have something whole to hold.
Wick|Whole things can take up more room than broken ones.
Wanderer|Would you rather I left them scattered?
Wick|I would rather you noticed what happens to the room around the sleepers.
Amulith|You are filling the Wanderer's hand with worries.
Wick|Better than letting it close without feeling what is inside.
Wanderer|I can carry a piece and a worry together.
`, ['Ask what belonging costs', `
Wanderer|What should a place ask of someone who belongs there?
Wick|Enough to care for it. I do not know whether that is the same as everything.
Amulith|I am asking for what was mine.
Wanderer|And after it returns?
Amulith|Stay until the hum settles. Listen then.
Wick|Keep a little light for that answer too.
`], ['Promise to watch the sleepers', `
Wanderer|I will look back at T.K. and Lenny before I leave.
Wick|Good. They should remain people in your choice, not shapes behind it.
Amulith|The knight's silence has not asked you for flowers.
Wick|It has not asked for roots either.
Wanderer|I will not pretend it has spoken.
Wick|Then your lantern is already doing useful work.
`]),
  scene('petal-mender-bloom', 'What a flower can leave open', 'grove', 'bloom', `
Petal Mender|These petals caught in the stone. I am moving them where there is room.
Wanderer|The roots will take that room again.
Petal Mender|Then I will move another petal. Small work does not become foolish because it must be repeated.
Amulith|You mend what I never meant to tear.
Petal Mender|I am not asking what you meant. I am looking at what your roots hold.
Wanderer|Is that what Bloom means to you?
Petal Mender|Whisperseed listens. Dryad loosens. Petalborn stands where something might be crushed.
Wanderer|Those sound like different kinds of care.
Petal Mender|They are. A flower does not need to become a hand to leave a little room.
Amulith|And when the hand breaks my glass?
Petal Mender|Then it should know it is breaking glass. Care is not a gentler name for every action.
Wanderer|I do not want the knight to wake on an excuse.
Petal Mender|Good. Let your purpose stay plain enough to carry.
Amulith|You have made a hard thing sound very tidy.
`, ['Ask about breaking and care', `
Wanderer|Can breaking something be care?
Petal Mender|Sometimes a hold must loosen. That does not make the thing broken worthless.
Amulith|Worthless would be easier to forgive than useful to your kindness.
Wanderer|I will remember there was a voice here.
Petal Mender|Remember it without letting it own the space around the knight.
Amulith|You make room by deciding who may remain inside it.
`], ['Help move the petals', `
Wanderer|Show me where these should go.
Petal Mender|Beside the warm stone. Leave the crack open.
Amulith|My roots are under that crack.
Wanderer|Then there is room above them too.
Petal Mender|See? You did not have to settle the whole forest to move one petal.
Wanderer|I needed that to be smaller for a moment.
`]),
  scene('petal-mender-blight', 'A garden beside a closed hand', 'grove', 'blight', `
Petal Mender|Your footsteps leave violet soil where I was placing petals.
Wanderer|I did not come to crush them.
Petal Mender|Then notice where you step. Intention does not make a foot lighter.
Amulith|The forest has room for more than their flowers.
Petal Mender|It does. I keep asking your roots to behave as though they know that.
Wanderer|The mushrooms live here too. The spores. The things the flowers call rot.
Petal Mender|I have seen them. I have not asked you to stop seeing them.
Amulith|But you would break what gave them shelter.
Petal Mender|I would leave the knight room to stand.
Wanderer|Can both kinds of room remain?
Petal Mender|I cannot promise it. Neither should the voice beneath the stone.
Amulith|I have promised the pieces a home.
Petal Mender|Ask who will still be able to leave it.
Wanderer|I will keep that question until the roots answer.
`, ['Ask why Petalborn opposes you', `
Wanderer|Will Petalborn try to stop me?
Petal Mender|They stand between a hand and what it might close around.
Amulith|They stand between me and my missing edges.
Wanderer|Both of you describe the same place differently.
Petal Mender|That is why your own eyes must come with you.
Wanderer|I have no use for a lantern I refuse to look by.
`], ['Leave a petal untouched', `
Wanderer|This one can stay beside the stone.
Petal Mender|Thank you. Do not turn it into proof that every other step is gentle.
Amulith|A small flower will not keep us apart.
Wanderer|It was never meant to.
Petal Mender|Then we have agreed on one small thing.
Wanderer|I can begin with that.
`]),
  scene('cap-listener-bloom', 'The sound beneath the rain', 'hollow', 'bloom', `
Cap Listener|Wait for the drip to stop. Then listen beneath it.
Wanderer|I hear something thin under the cap.
Cap Listener|Glass. Rain falls. That sound stays.
Amulith|The hollow has learned to hold a note. Do not teach it silence.
Wanderer|Has it always sounded like this?
Cap Listener|I cannot tell you always. I can tell you what I hear now.
Wanderer|That is more useful than a story pretending to be a memory.
Cap Listener|The caps keep sound close. Sometimes a close sound seems older than it is.
Amulith|My pieces have waited longer than your lantern has burned.
Cap Listener|Perhaps. Waiting does not decide what a hand should do.
Wanderer|I have already broken glass in the grove.
Cap Listener|Then listen to the space that followed. Carry what you learned, not just what you chose.
Amulith|My silence has become something you trade between yourselves.
Wanderer|I would rather understand it before making more.
`, ['Ask for a way to listen', `
Wanderer|How do I tell the hum from the rain while I move?
Cap Listener|Stop when the cap drips. Then move when the thin sound remains.
Amulith|You will still need my voice when the roots grow thick.
Wanderer|I can hear you and the soil together.
Cap Listener|That is enough. Listening need not choose only one thing.
Wanderer|The lantern makes me hurry. I will try not to.
`], ['Ask what silence changes', `
Wanderer|Does the hollow change when a piece breaks?
Cap Listener|One sound ends. Rain continues. The caps do not tell me whether that is healing.
Amulith|I can tell you whether it hurts.
Wanderer|I believe that it hurts.
Cap Listener|Believing the hurt does not settle what holds the knight.
Wanderer|No. I will carry both things deeper.
`]),
  scene('cap-listener-blight', 'A roof for a scattered sound', 'hollow', 'blight', `
Cap Listener|The piece you carry changes the sound beneath this cap.
Wanderer|Does it sound closer?
Cap Listener|It sounds like something moving. I will let you decide closer to what.
Amulith|Closer to me. It need not be difficult to name a returning thing.
Wanderer|The mushrooms sheltered it. I should know what I am taking from them.
Cap Listener|A hum. A small hard thing. Perhaps nothing they would ask to keep.
Amulith|They grew around my edges. I have not asked them to stand without me.
Cap Listener|You have asked a great many roots to hold tightly.
Wanderer|Is a roof a hold too?
Cap Listener|Only when you cannot find the opening.
Amulith|The caps are not trapping you. Neither am I.
Cap Listener|Then the question should be easy to carry to the oldest roots.
Wanderer|I will look for the opening when the pieces meet.
Amulith|Bring them first. Do not leave me scattered while you measure doorways.
`, ['Ask whether taking the glass is theft', `
Wanderer|Does this piece belong to the hollow now?
Cap Listener|The hollow has held it. Holding is not the same as owning.
Amulith|You hear? The pieces remain mine.
Cap Listener|I said the difference matters. I did not appoint a keeper.
Wanderer|Then my hand cannot settle the question by closing around it.
Cap Listener|But it can carry the question without dropping it.
`], ['Stay under the cap a moment', `
Wanderer|I need a moment away from the bright things following me.
Cap Listener|Stand where the drip falls outside your lantern.
Amulith|The hollow shelters those who bring things home.
Cap Listener|It shelters those who stand under the cap.
Wanderer|That sounds like a kinder rule.
Cap Listener|It is at least a smaller one.
`]),
  scene('spore-keeper-bloom', 'What grows around a wound', 'hollow', 'bloom', `
Spore Keeper|You call it rot before you let it settle on your sleeve.
Wanderer|I have not called it anything yet.
Spore Keeper|Good. Then I spoke too quickly. These small things make me protective.
Amulith|At last, someone remembers what the flowers walk past.
Spore Keeper|I remember spores. I do not remember agreeing that every root should keep what it holds.
Wanderer|Bloom wants the knight awake. It does not have to mean the mushrooms disappear.
Spore Keeper|Wanting one thing can change another without asking it.
Wanderer|I know. I am trying to notice before I act.
Amulith|Notice the life around the glass. It has not been waiting for your flowers.
Spore Keeper|Spora follows what drifts. It knows a thing can live without staying where it began.
Wanderer|Then the forest may have more room than the voice allows.
Spore Keeper|It may. Do not promise the spores a future you cannot see.
Amulith|You both speak of room as though I have never made any.
Wanderer|You made shelter. I am asking whether it can open.
`, ['Ask why Spora protects the shards', `
Wanderer|Why would Spora keep a piece here?
Spore Keeper|Because strange life deserves someone willing to notice it.
Amulith|And because what was scattered should return.
Spore Keeper|That is your reason. Mine fits in this leaf.
Wanderer|I do not have to make those reasons the same.
Spore Keeper|No. Please do not.
`], ['Ask to carry a spore', `
Wanderer|May one drift with me?
Spore Keeper|It will drift whether we give it permission or not.
Amulith|It will stay inside my forest.
Wanderer|For now. That is all either of us can see.
Spore Keeper|You have learned a useful size for a promise.
Wanderer|Small enough to hold without closing my hand.
`]),
  scene('spore-keeper-blight', 'A small life without a flag', 'hollow', 'blight', `
Spore Keeper|The spores gather in your light. Do not mistake that for choosing your side.
Wanderer|I wanted them to have somewhere to remain.
Spore Keeper|Then leave some still air. They do not need a speech.
Amulith|The Wanderer brings the pieces that keep this place alive.
Spore Keeper|The Wanderer brings pieces. I will not claim more than I can see.
Wanderer|You sound less pleased than I expected.
Spore Keeper|I am pleased you noticed them. Expectation is where a noticed thing becomes something useful to you.
Amulith|You make gratitude sound dangerous.
Spore Keeper|Only when it begins to ask for obedience.
Wanderer|I can carry the glass without asking the spores to thank me.
Spore Keeper|Good. Spora follows a drifting thing without needing to own its destination.
Amulith|My pieces are not spores. Their destination is mine.
Wanderer|And the forest around them?
Spore Keeper|Keep that question where the glass cannot cut it away.
`, ['Ask whether reunion will help', `
Wanderer|Will bringing the pieces together protect this place?
Spore Keeper|It may preserve the corruption. That is not the same answer as protecting every small life.
Amulith|You are afraid of a whole thing because you have learned to live around broken ones.
Wanderer|Perhaps we should be careful with both.
Spore Keeper|Careful is a word I can make room for.
Amulith|Carefully, then. Bring them carefully.
`], ['Give the spores still air', `
Wanderer|I will keep my lantern low for a moment.
Spore Keeper|Watch them settle. No one has to win this little space.
Amulith|The roots are still too.
Wanderer|Then let them remain still while I watch.
Spore Keeper|You can learn a great deal without making something answer.
Wanderer|I have been asking for answers since the grove.
`]),
  scene('root-witness-bloom', 'A hand learning to open', 'deepwood', 'bloom', `
Root Witness|Stand here. You can see where the root presses against the stone.
Wanderer|It looks like a hand.
Root Witness|It looks like a root. A hand is how we have begun to understand it.
Amulith|It is mine. You may call that part plainly.
Wanderer|Then can you loosen it?
Amulith|You ask me to let go of what remains after everything else was broken.
Root Witness|The question does not become cruel because letting go is difficult.
Wanderer|I have brought the lantern this far to make room for the knight.
Root Witness|Then look at the room. Do not let the voice turn it into an argument you forget to see.
Amulith|I am afraid. Does that become nothing beside your purpose?
Wanderer|No. It becomes something I must act knowing.
Root Witness|The root learned to hold glass. Perhaps the soil can learn another shape.
Amulith|Perhaps is a small shelter at the end of a long breaking.
Wanderer|I will not call it a promise. I will leave it open.
`, ['Acknowledge Amulith’s fear', `
Wanderer|I heard you. I will not say nothing was afraid beneath the roots.
Amulith|Then why does your hand still move toward the glass?
Wanderer|Because the knight still has no room to stand.
Root Witness|Two things can be true without one swallowing the other.
Amulith|Truth is cold when it leaves me broken.
Wanderer|I cannot warm it by letting the hold remain.
`], ['Ask the witness to watch', `
Wanderer|Stay where you can see what happens.
Root Witness|I am here. I can witness a hand without explaining every thought inside it.
Amulith|Watch the edge before it breaks.
Wanderer|I will.
Root Witness|And the space after. Neither deserves to disappear from the telling.
Wanderer|Then the story will have to hold both.
`]),
  scene('root-witness-blight', 'The opening behind you', 'deepwood', 'blight', `
Root Witness|Look behind your lantern. There is still an opening between the trees.
Wanderer|You want me to leave?
Root Witness|I want you to know whether you can.
Amulith|The Wanderer has brought my pieces. Let the return be a return.
Wanderer|The treeline is nearer than it was.
Root Witness|Yes. A shelter changes when its edges meet.
Amulith|I have been scattered long enough.
Wanderer|I do not doubt that. I am looking at what closes around you.
Root Witness|The roots can make a place belong to someone. They can also make someone belong to a place.
Amulith|Would you keep me broken for the comfort of an open doorway?
Wanderer|I wanted the forest to remain. I did not think remaining would have this shape.
Root Witness|Then let your choice include the shape you can see now.
Amulith|You are close enough to hear me without the soil between us.
Wanderer|Yes. That is why I must listen carefully.
`, ['Ask Amulith about the closed treeline', `
Wanderer|Will the trees leave room to go?
Amulith|I want the pieces held. I have not promised every opening will remain.
Root Witness|That answer is plain enough to remember.
Wanderer|It is harder than the answers at the shrine.
Amulith|You are closer to what I want now.
Wanderer|Then I am closer to what my choice means too.
`], ['Look at the opening once more', `
Wanderer|I will look back before I touch the last edge.
Root Witness|Good. A choice need not be frightened of its own other path.
Amulith|You have carried me too far to leave me at a doorway.
Wanderer|I can hear that without forgetting the doorway.
Root Witness|Keep the lantern turned long enough to see both.
Wanderer|Then turn it toward what I choose.
`]),
  scene('thorn-carrier-bloom', 'A burden without a command', 'deepwood', 'bloom', `
Thorn Carrier|Do not take the branch from me. Help me find where its weight should rest.
Wanderer|I thought you might be guarding the root.
Thorn Carrier|I might be carrying a branch. Your lantern should let you see before it lets you judge.
Amulith|Collosus holds fast. This one understands what a burden asks.
Thorn Carrier|A burden asks nothing. A voice beside it may ask a great deal.
Wanderer|The shard is deeper in. I mean to break it.
Thorn Carrier|Then you are carrying your own sharp thing.
Amulith|A purpose can be sharper than any branch.
Wanderer|I do not know how to make it gentle without leaving the knight held.
Thorn Carrier|You may not be able to. Gentleness is not always what a hand can offer.
Wanderer|What can it offer?
Thorn Carrier|Attention. Enough to know whose weight changes when it moves.
Amulith|You will have my attention when the glass breaks.
Wanderer|And I will have heard yours before it does.
`, ['Help lower the branch', `
Wanderer|There is a flat stone beside the root.
Thorn Carrier|Yes. Show me its edge with your light.
Amulith|You make room for a branch while taking room from me.
Wanderer|One small care does not settle the other choice.
Thorn Carrier|Good. Let it remain small enough to do.
Wanderer|Here. The stone will hold it.
`], ['Ask what holding fast means', `
Wanderer|When does holding fast become holding too tightly?
Thorn Carrier|When you stop noticing what is trying to move.
Amulith|What if moving means leaving me apart?
Wanderer|Then I must notice that too.
Thorn Carrier|You have not found a soft answer. You have found something worth keeping beside the hard one.
Wanderer|I can carry that much.
`]),
  scene('thorn-carrier-blight', 'The weight of something whole', 'deepwood', 'blight', `
Thorn Carrier|You have brought glass where I carry wood. Both things can make a hand close.
Wanderer|Mine has farther to go.
Thorn Carrier|Then notice its weight before it asks more of your arm.
Amulith|The pieces will not ask. They will finally be held where they belong.
Thorn Carrier|You are doing the asking for them.
Wanderer|I chose to carry them.
Thorn Carrier|I know. A chosen burden is still a burden.
Amulith|Collosus would not set it down at the last root.
Thorn Carrier|Do not use a name to make a hand ashamed of opening.
Wanderer|I have come too far to pretend the forest will stay as it was.
Thorn Carrier|Then do not pretend the weight will vanish when the pieces meet.
Amulith|It will become mine again.
Wanderer|And the treeline will become part of it.
Thorn Carrier|You see it. Keep seeing it while you decide.
`, ['Ask if you should set the pieces down', `
Wanderer|Would you set this weight down?
Thorn Carrier|I would ask where it rests and what rests beneath it.
Amulith|The soil can hold me.
Wanderer|It already holds the knight.
Thorn Carrier|There. That is the question's weight. No one can lift it from your choice.
Wanderer|Then I will stop asking someone else to carry it.
`], ['Help rest the branch before continuing', `
Wanderer|Let the branch rest beside that stone.
Thorn Carrier|Show me where the root leaves room.
Amulith|My roots can hold it.
Wanderer|They can leave room for the stone to hold it too.
Thorn Carrier|That is a useful thing to remember at the end of a path.
Wanderer|Something can be cared for without being held by only one hand.
`]),
];

export const CLOSINGS: Record<Faction, { win: Beat[]; lose: Beat[] }> = {
  bloom: {
    win: beats(`
Forest|The last required shard breaks. The hum beneath the roots comes apart into silence.
Amulith|That was the edge I had left. You heard it before you broke it.
Wanderer|I did.
Forest|Moss slips from T.K.'s armor. The knight stands beside Lenny.
Wick|There is room now.
Petal Mender|Leave the room open. Let it be more than a place for our flowers.
Cap Listener|The rain continues under the caps.
Spore Keeper|The spores drift where your lantern cannot follow.
Root Witness|The hand loosened. The soil remains.
Thorn Carrier|Something held tightly has learned the weight of letting go.
Amulith|Do not make my silence proof that nothing was here.
Wanderer|There was a voice. There was a hold. I will tell both parts.
Forest|The lantern warms the space between roots that no longer press together.
Wick|Take your light with you. Leave what it made room for.
Amulith|Let the knight stand beside Lenny. Leave me the dark beneath the roots.
Forest|This is where the Wanderer's telling ends. The forest does not offer another promise.
`),
    lose: beats(`
Forest|The lantern's warmth draws close to the wick, then disappears.
Wanderer|I cannot see the glass anymore.
Amulith|My roots can. They have not forgotten where it waits.
Wick|A light went out. Do not make it a verdict on every hand that carried it.
Petal Mender|The moss still leaves too little room beside the stone.
Cap Listener|Listen. The hum continues beneath the rain.
Spore Keeper|Some things drift past a path without knowing where it meant to go.
Root Witness|The knight is still held. That is what remains to be seen.
Thorn Carrier|A burden set down by weakness is no less heavy on the ground.
Amulith|You may come again. I have more patience than your lantern had warmth.
Wanderer|Then another light will have to learn this path.
Forest|The roots settle around the glass. T.K. remains asleep beside Lenny.
`),
  },
  blight: {
    win: beats(`
Forest|The carried pieces meet. The light on their edges becomes a single violet seam.
Amulith|There. I can hear myself without crossing so much broken soil.
Wanderer|The trees are nearer.
Forest|The treeline closes behind the lantern. T.K. remains asleep beside Lenny.
Wick|Keep looking. Warmth does not make a closed place open.
Petal Mender|The petals have less room beside the stone.
Cap Listener|The hum is whole. The rain continues outside it.
Spore Keeper|The spores settle in still air. No one should mistake that for gratitude.
Root Witness|You can see the shape of what you chose.
Thorn Carrier|The weight did not vanish. It found somewhere to rest.
Amulith|I have not promised every opening would remain. I promised the pieces a home.
Wanderer|I will not tell the story as though those were the same promise.
Forest|Roots gather around the seam. The lantern makes a small warm circle within them.
Amulith|Stay until the hum settles. I have been apart for so long.
Wanderer|I am listening.
Forest|This is where the Wanderer's telling ends. A closed treeline keeps the next part out of sight.
`),
    lose: beats(`
Forest|The lantern dims before the scattered edges can meet.
Amulith|Keep the glass close. I can still feel where it is.
Wanderer|My hand has no more warmth to give it.
Wick|The light was small. What it tried to carry was not.
Petal Mender|The knight remains under moss. The pieces remain apart.
Cap Listener|One hum moves no farther. Others still wait beneath the caps.
Spore Keeper|The spores know nothing of the path's failure. They keep drifting.
Root Witness|The opening has not finished closing. Neither has the choice finished its work.
Thorn Carrier|What is set down will still have weight for the next hand.
Amulith|Come with another lantern. Do not let this be the last warmth my edges remember.
Wanderer|I can no longer tell you where the next light will come from.
Forest|The glass cools. The roots continue to hold what remains in the soil.
`),
  },
};
