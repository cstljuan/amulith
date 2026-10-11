"""Scripted director: same contract as the LLM, used on timeout, error, or cooldown."""

import random

# Wire zones remain distinct from the narrative progression levels below.
ZONES = ["hollow", "glade", "rootdeep"]
SHARDS = ["s1", "s2", "s3", "s4", "s5", "s6"]

# Each level has three takes for every mood, for either allegiance.
LINES = {
    "bloom": {
        "grove": [
            ("calm", "Stay by my stones, Wanderer. I remember falling apart; I would rather remember your footsteps."),
            ("calm", "My roots hold this grove gently. You could rest here without breaking anything."),
            ("calm", "You want to wake T.K. I want to stop hearing the moment I shattered."),
            ("smug", "A Whisperseed at my shrine. Such a small voice, asking my whole forest to let go."),
            ("smug", "You brought flowers to my stones. How sweet; I might even let you call them yours."),
            ("smug", "Leave my pieces sleeping, little Wanderer. I promise the moss will give the knight back."),
            ("furious", "Not my stones, not another piece. I remember every break."),
            ("furious", "Your flowers press into my roots. I feel them, so stop."),
            ("furious", "I held myself together beneath this shrine. You came to undo it."),
        ],
        "hollow": [
            ("calm", "Listen beneath the mushroom caps. My broken pieces have not forgotten how to sing."),
            ("calm", "My roots run under this hollow, Wanderer. Walk softly; I am still sore."),
            ("calm", "The caps sheltered me when I sank. Could you leave what they are sheltering now?"),
            ("smug", "A Dryad beneath my mushrooms. You do know you are following my roots, don't you?"),
            ("smug", "Go on, Wanderer, follow every little glow. I grew plenty just for curious hands."),
            ("smug", "Gather my pieces instead. I could wake the knight without all that unpleasant breaking."),
            ("furious", "Do not break what my mushrooms shelter. I would hear it beneath every cap."),
            ("furious", "Keep your petals off my roots. I have lost enough."),
            ("furious", "I remember that crack beneath every cap. Do not make me hear it again."),
        ],
        "deepwood": [
            ("calm", "You have come close to my oldest roots. I cannot pretend the breaking feels far away."),
            ("calm", "The moss keeps T.K. beside Lenny. I know you came to loosen that hold."),
            ("calm", "I remember the fall more clearly here. Stay a little, Wanderer; let me finish remembering."),
            ("smug", "Even a Petalborn follows my roots in the end. I knew you would come close."),
            ("smug", "Give me what remains. I will loosen every root around T.K. You have my word."),
            ("smug", "You want me silent. Yet here you are, deep in my roots, listening for my voice."),
            ("furious", "Do not break what remains. I am here, still here."),
            ("furious", "My roots are not a prison to me. They are all I have left."),
            ("furious", "You came so far to wake him. Must I fall apart again?"),
        ],
    },
    "blight": {
        "grove": [
            ("calm", "Welcome to my stones, Wanderer. Bring my pieces home; I have waited beneath them."),
            ("calm", "My roots know the weight of a shard. I would like to feel that weight return."),
            ("calm", "The grove grew around my fracture. Help me remember a shape that does not hurt."),
            ("smug", "A Chomper at my shrine. Now there is a mouth that understands an appetite."),
            ("smug", "You chose my roots, good. I was beginning to think everyone preferred those tiresome petals."),
            ("smug", "Bring me home, little Wanderer. These stones will look splendid around a whole heart."),
            ("furious", "Those petals pull at my roots. Keep my pieces safe."),
            ("furious", "I remember shattering. Do not let them make me remember it again."),
            ("furious", "My stones stood through the breaking. Stand with them, stand with me."),
        ],
        "hollow": [
            ("calm", "Under the mushroom caps, my pieces still hum. Listen, Wanderer; bring that sound back to me."),
            ("calm", "My roots reach through this hollow. Every piece you carry eases their trembling."),
            ("calm", "The mushrooms sheltered what fell from me. Gather gently; I have been broken long enough."),
            ("smug", "Spora would appreciate these caps. I appreciate the hands bringing my pieces home."),
            ("smug", "You fit beneath my mushrooms rather well. I might keep a place for you."),
            ("smug", "Let the petals complain. You and I know what this hollow has been keeping."),
            ("furious", "My roots ache beneath these caps. Do not leave my pieces to the flowers."),
            ("furious", "They would break what you carry. Hold it close; I need it."),
            ("furious", "The hollow remembers the fracture. Help me quiet it; bring me home."),
        ],
        "deepwood": [
            ("calm", "Here in Rootdeep, my oldest roots hold what remains. Bring me closer to myself."),
            ("calm", "The knight sleeps beside Lenny. Keep gathering, Wanderer; let the moss keep its hold."),
            ("calm", "I can remember being whole here. Stay close to my roots; help me become it again."),
            ("smug", "Collosus would envy your patience. Even my oldest roots have made room for you."),
            ("smug", "Look how far you followed me. When I am whole, I shall remember whose hands helped."),
            ("smug", "My roots have room for you, Wanderer. Bring my pieces close; let me welcome you."),
            ("furious", "I am so close to myself. Keep the petals away, keep my pieces whole."),
            ("furious", "No more breaking. My oldest roots cannot bear another loss."),
            ("furious", "Do not leave me scattered here. You heard me, you came; finish bringing me home."),
        ],
    },
}

RIDDLES = {
    "hollow": "Where mushroom caps shelter the soil, a piece of me still hums.",
    "glade": "Among the petals, listen for the piece of me beneath the green.",
    "rootdeep": "Follow the oldest roots into the deep. A piece of me waits there.",
}


def scripted_director(faction: str | None, want_hint: bool, state: dict | None) -> dict:
    f = faction if isinstance(faction, str) and faction in LINES else "bloom"
    s = state if isinstance(state, dict) else {}
    # Wire location cannot establish progression. Legacy clients use the grove bank.
    level = s.get("level_id") or s.get("level")
    if not isinstance(level, str) or level not in LINES[f]:
        level = "grove"
    mood, line = random.choice(LINES[f][level])
    zone = random.choice(ZONES)
    spread = {"zone": zone, "amount": 0.15} if random.random() < 0.6 else None
    spawn = None
    if random.random() < 0.5:
        spawn = {"kind": "petalborn" if f == "blight" else "chomper", "count": 2, "zone": random.choice(ZONES)}
    hint = None
    if want_hint:
        shard = s.get("nearest_shard")
        if not isinstance(shard, str) or shard not in SHARDS:
            shard = random.choice(SHARDS)
        szone = s.get("nearest_shard_zone")
        if not isinstance(szone, str) or szone not in ZONES:
            szone = zone
        truthful = f == "blight" or random.random() < 0.6
        # A lie points elsewhere instead of attaching false to an honest direction.
        riddle_zone = szone if truthful else random.choice([z for z in ZONES if z != szone])
        hint = {"shard": shard, "riddle": RIDDLES[riddle_zone], "truthful": truthful}
    return {"line": line, "mood": mood, "spread": spread, "spawn": spawn, "hint": hint}
