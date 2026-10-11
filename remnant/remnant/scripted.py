"""Scripted director: same contract as the LLM, used on timeout, error, or cooldown."""

import random

ZONES = ["hollow", "glade", "rootdeep"]

LINES = {
    "bloom": [
        ("calm", "Why destroy me, little one? I grew this forest from my own broken heart."),
        ("smug", "The knight sleeps so peacefully. Must you wake him into a world like this?"),
        ("furious", "Every flower you plant is a wound in me."),
        ("smug", "A Dryad, playing hero. How the roots will laugh."),
        ("calm", "I could tell you where the next piece hides. Ask, if you dare."),
    ],
    "blight": [
        ("smug", "Yes. Bring me home, piece by piece."),
        ("calm", "The knight sleeps better in the dark. Keep it that way."),
        ("smug", "Spora would be proud. Chomper would be jealous."),
        ("furious", "Those petals again. Burn them back."),
        ("calm", "Closer. I can feel another shard humming."),
    ],
}

RIDDLES = {
    "hollow": "Where the caps grow tallest, something hums beneath.",
    "glade": "Follow the petals that fall upward.",
    "rootdeep": "Under the oldest root, I wait.",
}


def scripted_director(faction: str | None, want_hint: bool, state: dict | None) -> dict:
    f = faction if faction in LINES else "bloom"
    mood, line = random.choice(LINES[f])
    zone = random.choice(ZONES)
    spread = {"zone": zone, "amount": 0.15} if random.random() < 0.6 else None
    spawn = None
    if random.random() < 0.5:
        spawn = {"kind": "petalborn" if f == "blight" else "chomper", "count": 2, "zone": random.choice(ZONES)}
    hint = None
    if want_hint:
        shard = (state or {}).get("nearest_shard") or random.choice(["s1", "s2", "s3", "s4", "s5", "s6"])
        szone = (state or {}).get("nearest_shard_zone") or zone
        truthful = f == "blight" or random.random() < 0.6
        hint = {"shard": shard, "riddle": RIDDLES.get(szone, RIDDLES["hollow"]), "truthful": truthful}
    return {"line": line, "mood": mood, "spread": spread, "spawn": spawn, "hint": hint}
