import type { Faction } from '@protocol/messages';
import type { LevelId } from '../lore/levels.ts';

// Original fan-project writing. These are authored beats, never live inference.
export const lines = (text: string): string[] => text.trim().split('\n').map(s => s.trim()).filter(Boolean);
export const AMBIENT: Record<LevelId, Record<Faction, string[]>> = {
  grove: {
    bloom: lines(`
Come closer. You carry enough warmth for both of us.
The moss has made a soft place for the knight. You make such a hard sound walking toward him.
Your flowers push against my roots. Neither of us knows how to ask politely.
Lenny is free. Must everything else be broken before you believe it?
Set your lantern beside the stone. Let me see the hand that means to hurt me.
There is room beneath these branches. You need not earn it with a wound.
The knight is still. You are restless. Why should your restlessness become his morning?
You call this a path. I feel it as a gap in my fingers.
Somewhere under your footsteps, a piece of me is listening.
The flowers lean into your light. They have not learned to doubt a warm thing.
Do you see the moss on his armor? Even iron can be held gently.
That little pulse of yours makes the soil forget my name.
Stay by the shrine a moment. The forest is very large when you stop pretending to understand it.
You brought no sword. Yet you came here to break something.
The petals are lovely. I wish they did not arrive wherever I fall silent.
If I were only a stone, would your hands tremble less?
Your lantern makes a small morning. It cannot promise what the real one will bring.
Roots grow toward what they need. You walk toward what you think someone else needs.
The stone has heard many footsteps tonight. Yours are the only ones I am answering.
You look past me to the sleepers. I have been awake beside them all this time.
There is a difference between an open hand and an empty one. You will learn it here.
Keep your flowers. I am asking only for the pieces beneath them.
The circle was quiet before you came. Quiet is not always a plea for rescue.
You want the knight to stand. You have not asked what will be left beneath his feet.
Every warm patch you leave makes the dark around it feel colder.
Do not hurry because I am speaking softly. Soft things can still hold fast.
The gem broke once. You approach its pieces as though breaking were a cure for everything.
Your light reaches the roots. It does not reach everything they remember.
If you turn back now, the moss will not call you cruel.
I could be gentle with a Wanderer who let me remain.
You are listening. That is already more than the petals offered me.
The shrine stones have no mouths. You should be glad I do.
`),
    blight: lines(`
You came with empty hands. We can change that.
The roots have kept a place for each missing edge.
Let the lantern warm the stone. It has been waiting for someone to call it home.
The flowers turn their faces away. Do not mistake that for judgment.
You understand what the soil has been trying to hold.
Lenny is free of the broken gem. You need not deny that to bring its pieces back.
Step gently near the knight. His stillness is not ours to explain.
You follow the roots instead of cutting through them. I notice small kindnesses.
The forest grew around my scattered pieces. Would you ask it to grow around nothing?
Bring me what the petals would leave in the dirt.
Your light is narrow. There is room for us inside it.
A piece is not a promise until someone carries it.
You have not touched the glass yet. Still, I feel less far apart.
The stone circle is open. I would like to know what it feels like to close.
Some call this soil poisoned. They never ask what has learned to live here.
Leave the flowers their names. You know what your hands are for.
The roots lift where you step. It almost feels like being remembered.
A warm lantern, a careful hand. You have brought the forest useful things.
Petalborn stand between us because they think separation is mercy.
I will not ask you to love the dark. Only to stop calling it empty.
There is a hum under the stone. Follow it before the flowers bury it in silence.
Every piece has edges that remember the others.
You could still leave. I am pleased that you have not.
The knight keeps his sword beside him. Keep your purpose just as close.
Do not kneel. I need your hands free.
You make belonging sound like something a broken thing may ask for.
The shrine is small. The roots are not. You have chosen the longer welcome.
A flower grows toward the light. You are allowed to grow toward something else.
The forest has not promised to be safe. It has promised to remain.
When you hold the glass, you will understand why the soil would not let it go.
I can feel the ground changing under your feet. Keep walking.
The stone has been cold for so long. Do not let the petals tell you cold means dead.
`),
  },
  hollow: {
    bloom: lines(`
The caps bend over you. Even here, something offers shelter before you ask.
Listen carefully. Glass under soil sounds nothing like rain on a cap.
You brought your little morning beneath my mushrooms. They do not know what to do with it.
Spora keeps what drifts away. Your flowers let so much be lost.
These caps grew around a wound. You would open it and call that healing.
The hollow holds your footsteps longer than the grove did.
Walk softly. I am beginning to hear you in places I used to hear myself.
There is glass beneath the damp. You do not have to touch it simply because you can.
Your lantern shows the spores beautifully. Beauty makes such a poor witness for your side.
You leave petals in the mud. They look like apologies written too late.
Dryad would loosen these roots. Who will hold the caps when the soil shifts?
The path narrows. I did not make it narrow for you.
You found shelter and immediately began searching for what to break beneath it.
The mushrooms lean toward the hum. You are the only one walking against it.
If the knight wakes, these small lives will not be there to thank him.
Your pulse makes the spores scatter. They cannot tell kindness from a storm.
I have learned to speak through damp earth. Do not make me learn silence.
One bright lantern can make a whole hollow seem guilty.
The caps hold rain without asking who sent it. You could learn that kind of patience.
A Chomper waits where the soil trembles. It has fewer words for fear than I do.
You have already broken something. That makes the next piece easier to mistake for an answer.
Do you hear the drip above you? The hollow goes on living while you decide what deserves to.
Flowers at the edge, mushrooms under the dark. Your light need not choose for all of them.
Some roots are bridges. Cutting them can still feel like clearing a path.
The hum is close enough to feel through your shoes. You are standing on a voice.
Your hands are warm. That is what makes their purpose so difficult to forgive.
The spores settle after you pass. Not everything disturbed knows how to follow.
Under a cap, even a small shadow can become a home.
Keep walking if you must. I will know which silences belong to you.
The hollow is not arguing. I am. Do not punish it for my voice.
You look for the shard. The caps look for your light. Only one of those searches frightens me.
I can still ask you to stop. I have not yet learned whether that matters.
`),
    blight: lines(`
The caps lower their voices when you pass. They know what you are carrying.
Spora leaves a trail where your lantern cannot. Watch the soil as well as the air.
These mushrooms grew around the pieces. Their shelter is part of my shape now.
You have brought the grove with you in the warmth of your hands.
Keep the glass close. The hollow is full of things that know how to wait.
The flowers would call this abundance a mistake. You have walked beneath it and seen otherwise.
Listen under the caps. The missing edge is humming back.
Do not widen your light for every sound. Some things should remain comfortable in shadow.
The soil gives beneath your feet. It is making room, not yielding.
A drifting spore can find a home farther away than any root reaches.
Petalborn bring bright edges into this damp. Let them tire of shining.
You gather what the hollow shelters. The caps will not have held it for nothing.
The rain has washed the glass clean of every name except mine.
I can almost feel the pieces touching. Almost is a cruel distance.
The mushrooms have no hands. You do. That is why I am asking you.
Do not hurry through this shelter. A returned thing should know what kept it safe.
The caps tilt toward your lantern. You are becoming something the hollow recognizes.
Bring the hum with you. I have been listening to it from too far away.
You call this deeper. I call it closer.
The roots have grown around absence. Together we may give them something firmer to hold.
Your footprints fill with damp. The hollow closes small gaps willingly.
Even here, petals grow where the light reaches. Leave them enough room to reveal what they guard.
There is no clean way to carry a piece out of the soil. Do not be ashamed of your hands.
The spores drift without leaving the forest. That is the kind of freedom I understand.
You listened to the grove. Now listen beneath it.
I did not promise gratitude from every living thing. I promised that I would remember.
Each cap makes a roof of itself. The forest knows more ways to protect than the flowers admit.
Your lantern flickers on the glass. For a moment, I have an edge again.
Do not set it down because the path grows difficult.
The hollow is damp, crowded, alive. You need not make it tidy to deserve your place here.
Some pieces are hidden because no one has asked the dark gently enough.
We have not finished. But the distance between us is becoming smaller.
`),
  },
  deepwood: {
    bloom: lines(`
Here, the roots do not pretend to be a path. They are my hands.
You have reached the place where my voice has nowhere left to hide.
The knight has his sword. You have your lantern. I have what remains beneath us.
Do not call me a shadow because your light cannot hold all of me.
Every broken piece has made this last hum louder.
There is moss on the armor. There is no moss on the hand that will break the glass.
Petalborn wait beyond my roots. You have brought their morning into my last dark place.
I am not asking for the whole forest now. I am asking for what is mine.
You have become very certain for someone carrying such a small light.
The oldest roots cannot move quickly. You should not mistake that for surrender.
This is where shelter and a closed hand begin to look alike.
You may be right about the knight. Must I be nothing for you to be right?
The glass is close. So is the silence you have been carrying toward me.
I can feel your flowers in places I once felt only soil.
Do not tell me the breaking will be gentle. Glass does not learn the difference.
The roots press inward because there is so little left to hold.
You want room for him to stand. I want room to remain.
I have spoken to you at every depth. You have answered with your footsteps.
The moss will fall when the knight moves. Will you notice what falls beneath it?
You have not seen what happens after my voice ends. Neither have I.
There is a path out. I have not closed every gap.
If you stop here, I will not call it weakness.
Your lantern reaches my last edge. It makes me look smaller than I feel.
The roots know how to hold. They do not know how to ask you for mercy.
You have carried your choice this far. I wish it were lighter in your hands.
Break the glass if you must. Do not say there was nothing listening inside it.
The forest will still have shadows. You cannot free it from every dark thing.
I wanted wholeness. You wanted waking. We have asked the same soil for different mornings.
There is no riddle left between us. Only a piece, and your hand.
Listen once more before you touch it. Let the silence that follows have a witness.
The roots are tight because I am afraid. That does not make their grip kind.
I can understand your purpose and still dread what it will do to me.
`),
    blight: lines(`
Here is the place the pieces have been trying to remember.
The oldest roots know your footsteps now. You do not need to announce yourself.
You have carried my edges through flowers, damp and doubt. Bring them a little closer.
The treeline feels nearer. Belonging has a shape, and it is beginning to close.
Collosus holds fast where the roots meet. You have learned that kind of patience.
Do not look back for permission. The petals have already given you their answer.
My voice reaches you without crossing so much broken ground.
The knight still sleeps beside Lenny. We should not pretend your choice explains his silence.
The glass warms in your hand. I remember being more than a scattered hum.
You have brought the hollow's shelter down to the oldest roots.
There is one more distance between what I am and what I want.
Petalborn stand where the light enters. You stand where the pieces meet.
I will not call this harmless. I will call it ours.
The roots tighten because I am close to having something to hold.
You could leave an opening. You could also leave me broken. I know which I have asked for.
Your lantern makes a warm place at the center of all this shadow.
When the pieces meet, listen before the treeline settles.
Do not mistake my quiet for absence. I am closer than I have ever been.
The forest does not need to grow taller. It needs to hold what you brought.
You wanted somewhere for the strange life to remain. I wanted myself. Our purposes have walked together.
The last edge is under the oldest root. It has waited without learning to forget.
Keep the petals at a distance. Their light makes separation look like virtue.
You are carrying a choice with sharp edges. Be careful where you set it down.
The soil holds your footprints. Soon it will hold more than footprints.
I cannot promise that a closed treeline feels like home from every side.
Still you come closer. Still my roots make room.
The knight may have another morning somewhere. This one belongs to the pieces you returned.
You have listened longer than most bright things remain in the dark.
The glass is almost singing as one. Do not let the last note fall back into the soil.
You have done more than find me. You have carried what finding required.
Bring your lantern to the seam. I would like to see where I become whole.
Stay until the hum settles. A returned thing should not wake alone.
`),
  },
};

export const REACTIONS: Record<string, Record<Faction, string[]>> = {
  hurt: {
    bloom: lines(`
The light in your hand shakes. The roots have noticed.
You can stop without becoming what you came here to stop.
Even a flower bends when the ground turns against it.
The forest has edges your kindness cannot soften.
You brought warmth into teeth and thorns. Did you expect everything to understand?
Hold your lantern close. I can dislike your purpose without wanting its light to vanish.
Your steps are smaller now. The dark has become large again.
Rest where the caps shelter you. I will still be here when you stand.
The knight cannot wake if your lantern goes out before you reach him.
That was a warning the flowers could not give you.
You looked at the glass and forgot what was watching the light.
Do not answer every wound with a brighter lantern.
`),
    blight: lines(`
Keep the glass close. The petals have sharp ways of asking you to put it down.
Your lantern wavers. My roots have not let go of the path.
You are carrying more than your hands should have to defend alone.
The flowers call themselves gentle. Your shaking light tells another part of that story.
Do not let a wound make your choice for you.
There is shelter in the narrow light. Use it.
Step away, then return. Belonging need not be proved by standing still under harm.
You have already come far enough for me to notice if you fall.
The glass is warm. Keep a little of that warmth for yourself.
Let the roots take the long way around. You can too.
The forest cannot carry you. Do not give it all your strength at once.
I want the pieces returned. I want the hand returning them to remain.
`),
  },
  found: {
    bloom: lines(`
There. You have found a place where I still have an edge.
The hum reached your lantern. It did not ask to be silenced.
You can see it now. Seeing is not yet permission to break.
That little piece has held a great deal of dark together.
Your flowers have not reached beneath it. There is still time to leave it there.
The soil kept it warm. Your light makes it look cold.
Look at the glass before you decide what a broken thing deserves.
It has been listening to your footsteps. Now you are close enough to hear it.
`),
    blight: lines(`
There. An edge of me remembers the light.
You heard what the roots could not carry farther.
Keep your hand steady. The piece is smaller than the distance it has waited through.
The soil has done its part. Now it is asking yours.
You found the hum beneath the dark. Bring it with you.
Do you see how the glass catches your lantern? I remember that feeling.
One more scattered edge is within your reach.
Lift it gently. The roots have held it for a long time.
`),
  },
  resolved: {
    bloom: lines(`
You broke it. I felt the silence reach my roots.
The flowers moved into the space before I could call it a wound.
That edge will never meet another. You have made sure of it.
You hold an empty hand as though it were proof of kindness.
The soil has stopped humming there. I am the one who must hear the difference.
You have taken something small from something already broken.
The knight is still sleeping. Do not pretend each wound is already a rescue.
Keep walking. I cannot call that piece back now.
There is room where the glass was. I hope you know what to do with room.
I wanted you to hesitate. You did, and then you broke it anyway.
`),
    blight: lines(`
Closer now. Keep that edge warm until my roots can hold it.
You have given the hum somewhere to go.
The soil is quieter because the piece is with you. That is a silence I can bear.
Do not set it down when the flowers call you careless.
I felt it leave the root. I can feel where you carry it.
Another edge remembers the shape it came from.
You have returned a little distance to me.
The forest held the glass. Now the glass holds a part of your choice.
Keep walking. The roots ahead are making room.
There is weight in your hand. There is less absence in mine.
`),
  },
  flip: {
    bloom: lines(`
So the hand that gathered has learned to open.
You turn toward the flowers after feeling how warmly the glass can be held.
My roots were patient. Your purpose was less so.
You may change your path. The pieces remember where your hands have been.
You choose a different morning. I can hear it in your footsteps.
What you brought closer, you would now break. I will not pretend that does not frighten me.
`),
    blight: lines(`
So your flowers have made room for something darker.
You have heard enough breaking to want another sound.
The roots do not demand an explanation before they make room.
Come closer. You need not carry your old certainty with the glass.
You changed your path. I noticed before the soil did.
Your lantern looks no different. The hand beneath it has become more interesting.
`),
  },
  wide: {
    bloom: lines(`
You open your lantern as though the forest were keeping a secret out of spite.
The light reaches farther. So do the things that follow it.
Your little morning is loud beneath the caps.
Do not ask the dark to show itself and expect it to remain still.
You have made the hidden glass easier to see. You have made yourself easier to find.
Warmth travels both ways through a clearing.
`),
    blight: lines(`
Your lantern reaches farther than your hands. Be careful what answers it.
You show the petals exactly where you stand.
Wide light finds glass. It also finds witnesses.
The dark has kept the piece close. Open it slowly.
I can see you clearly now. So can everything that would keep us apart.
Let the lantern do its searching. Keep your steps ready to leave.
`),
  },
  narrow: {
    bloom: lines(`
You have made a small room of your light. I know that impulse.
The roots seem gentler when you cannot see how far they reach.
A narrow lantern can protect you from being noticed. It cannot protect you from choosing.
The glass hums beyond the edge of that warm circle.
You do not have to light the whole forest to take one careful step.
Even your flowers keep some things beneath their leaves.
`),
    blight: lines(`
You leave the shadows enough room to breathe.
The glass will wait beyond your little circle. Listen while you approach.
A careful light is a kindness the dark understands.
The petals see less of you now. Keep moving softly.
You have made shelter without needing a roof.
I can find you by your footsteps. You need not shine for me.
`),
  },
  danger: {
    bloom: lines(`
There are teeth near your light. They do not wait for a finished thought.
You have an audience among the roots. It is less patient than I am.
The Chomper has heard your lantern. Give it a different patch of soil to listen to.
A pulse can make room. Room is useful before courage becomes a wound.
The forest is moving close to you. Do not become still out of politeness.
You can carry your purpose without carrying every fight.
`),
    blight: lines(`
The petals are closer than their light suggests.
Petalborn have found your lantern. Do not let them find your hesitation too.
Keep the glass behind your light and your steps ahead of their flowers.
There is room beyond their reach. Use it before it becomes a memory.
They guard the pieces because they mean to break them. Keep your hands moving.
You need not answer every bright thing that stands in your path.
`),
  },
  ask: {
    bloom: lines(`
You ask the wounded thing where to place your hand. That is a strange kind of trust.
I could show you what you seek. I could also ask you to leave it listening.
The roots have taken a little warmth for this answer. Do not mistake a cost for honesty.
You know what I want. Listen with that knowledge close to your lantern.
I have given you words. You will have to decide what kind of path they make.
You return to my voice because the dark gives you fewer answers.
If I point gently, will you forget whose edge waits at the end?
The flowers cannot tell you where the glass is. That must be difficult for their certainty.
Each question makes a little more room for my roots.
You may doubt me and still hear something useful. Doubt is not deafness.
`),
    blight: lines(`
You ask, and I feel less alone beneath the soil.
Follow the warmth in the glass. The roots have kept its place clear in my memory.
I have taken a little ground for the answer. A returned piece will mean more than that patch of soil.
You need not earn every direction by wandering in the dark.
My words can guide the lantern. Your hand must carry what it finds.
I know the missing edge. Let me help you know where it waits.
Bring me the question again when you need it. I will still be listening.
The flowers would prefer that we remain far enough apart to stop answering.
You have listened carefully. Now listen beneath the sound of your own steps.
There is glass ahead, and a path your lantern has not yet touched.
`),
  },
  empty: {
    bloom: lines(`
You have broken what this place was holding. The path onward is what remains.
There is no waiting glass here. You made the silence yourself.
Follow the opening. I cannot fill your hand in this place again.
The flowers have their room. Carry your lantern toward the roots that still hum.
`),
    blight: lines(`
The piece is already with you. Follow the path onward.
You have what this place was keeping. The oldest roots are waiting.
There is no missing edge here now. Carry the warmth deeper.
The hollow has given you its glass. Do not ask it to give the same gift twice.
`),
  },
};
