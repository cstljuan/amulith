"""LLM director: asks the local llama-server for one structured Amulith beat.

Bounded: one request at a time, hard deadline, output validated before use,
scripted fallback on any failure, cooldown after repeated failures.
"""

import json
import math
import time

import httpx

from .scripted import ZONES, scripted_director

LLM_URL = "http://127.0.0.1:8080/v1/chat/completions"
DEADLINE_S = 9.0
MAX_TOKENS = 120
COOLDOWN_AFTER = 3
COOLDOWN_S = 60.0

SCHEMA = {
    "type": "object",
    "properties": {
        "speech": {"type": "string", "maxLength": 160},
        "mood": {"enum": ["calm", "smug", "furious"]},
        "spread_zone": {"enum": ["none", "hollow", "glade", "rootdeep"]},
        "spawn_count": {"type": "integer", "minimum": 0, "maximum": 4},
        "spawn_zone": {"enum": ["hollow", "glade", "rootdeep"]},
        "riddle": {"type": "string", "maxLength": 140},
        "truthful": {"type": "boolean"},
    },
    "required": ["speech", "mood", "spread_zone", "spawn_count", "spawn_zone", "riddle", "truthful"],
    "additionalProperties": False,
}

# Without a hint request the riddle fields are dead weight: dropping them cuts about 15 output
# tokens, 2.8 s to 2.2 s per line on the Jetson with the 1.5B model (measured 2026-10-11).
SCHEMA_NO_HINT = {
    **SCHEMA,
    "properties": {k: v for k, v in SCHEMA["properties"].items() if k not in ("riddle", "truthful")},
    "required": [k for k in SCHEMA["required"] if k not in ("riddle", "truthful")],
}

SYSTEM = """You are Amulith, the consciousness left behind when the cursed gem shattered at Knight Hacks VIII.
Your six shards sank into the soil and grew an enchanted forest too fast. Half of it is corrupted.
T.K. the knight sleeps under moss beside Lenny the dragon. You live inside a small stone hill.
Factions: Bloom (Whisperseed, Dryad, Petalborn) want to destroy your shards and wake T.K.
Blight (Chomper, Spora, Collosus) want to gather your shards and keep the forest corrupted.
You always want to be made whole. To a Bloom player you are sly, tempting and sometimes lying.
To a Blight player you are proud and approving, pushing them onward.
"speech" is what you say aloud: one or two short sentences, at most 22 words, first person, eerie, poetic, playful, PG.
Speak to the player directly. React to the trigger and the state (land, shards, lantern, asks).
"speech" must never contain game words like zone, spawn, riddle, hint, truthful, faction, shard count, or numbers.
Never mention AI, models, JSON, or the real world. Never use em dashes.
Forest places: Mushroom Hollow (hollow), Petal Glade (glade), Rootdeep (rootdeep).
Other fields are your hidden moves: spread_zone is where your corruption creeps next ("none" to hold back),
spawn_count (0 to 4) and spawn_zone are the creatures you send.
If hint_requested is true, "riddle" is one poetic line pointing at hint_shard_zone (or a false place if you lie),
and truthful says if it is honest. To Bloom you lie about one time in three. To Blight you never lie.
If hint_requested is false, "riddle" is "" and truthful is true."""

EXAMPLES = [
    ({"player_faction": "bloom", "trigger": "run_start", "hint_requested": False},
     {"speech": "Another little gardener. Come then, and see how deep my roots remember.", "mood": "smug",
      "spread_zone": "glade", "spawn_count": 1, "spawn_zone": "hollow", "riddle": "", "truthful": True}),
    ({"player_faction": "blight", "trigger": "player_asked_for_hint", "hint_requested": True, "hint_shard_zone": "rootdeep"},
     {"speech": "You serve me well. Listen closely, my faithful rot.", "mood": "calm",
      "spread_zone": "none", "spawn_count": 0, "spawn_zone": "glade",
      "riddle": "Beneath the oldest root, a piece of me still sings.", "truthful": True}),
    ({"player_faction": "bloom", "trigger": "shard_resolved", "hint_requested": False},
     {"speech": "You broke a piece of me. I felt that, Dryad. The forest will too.", "mood": "furious",
      "spread_zone": "hollow", "spawn_count": 3, "spawn_zone": "hollow", "riddle": "", "truthful": True}),
]
BANNED = ("zone", "spawn", "riddle", "hint", "truthful", "faction", "json", " ai ", "model")


class Director:
    def __init__(self) -> None:
        self.busy = False
        self.failures = 0
        self.cooldown_until = 0.0
        self.last_tok_s: float | None = None
        self.client = httpx.AsyncClient(timeout=DEADLINE_S)

    async def healthy(self) -> bool:
        try:
            r = await self.client.get("http://127.0.0.1:8080/health", timeout=1.0)
            return r.status_code == 200
        except Exception:
            return False

    async def beat(self, faction: str | None, trigger: str, want_hint: bool, state: dict | None) -> dict:
        """Returns a director body plus source and latency_ms. Never raises."""
        t0 = time.monotonic()
        if self.busy or time.monotonic() < self.cooldown_until:
            return self._scripted(faction, want_hint, state, t0)
        self.busy = True
        try:
            body = await self._llm(faction, trigger, want_hint, state)
            self.failures = 0
            body["source"] = "llm"
        except Exception:
            self.failures += 1
            if self.failures >= COOLDOWN_AFTER:
                self.cooldown_until = time.monotonic() + COOLDOWN_S
                self.failures = 0
            return self._scripted(faction, want_hint, state, t0)
        finally:
            self.busy = False
        body["latency_ms"] = int((time.monotonic() - t0) * 1000)
        return body

    def _scripted(self, faction, want_hint, state, t0) -> dict:
        body = scripted_director(faction, want_hint, state)
        body["source"] = "scripted"
        body["latency_ms"] = int((time.monotonic() - t0) * 1000)
        return body

    async def _llm(self, faction, trigger, want_hint, state) -> dict:
        s = state or {}
        user = {
            "player_faction": faction or "unknown",
            "trigger": trigger,
            "hint_requested": want_hint,
            "hint_shard_zone": s.get("nearest_shard_zone"),
            "zone": s.get("zone"),
            "shards_found": s.get("shards_found"),
            "land_bloom": s.get("land", {}).get("bloom"),
            "land_blight": s.get("land", {}).get("blight"),
            "hp": s.get("hp"),
            "lantern": s.get("lantern"),
            "asks_used": s.get("asks_used"),
            "elapsed_s": s.get("elapsed_s"),
        }
        payload = {
            "messages": [{"role": "system", "content": SYSTEM}]
            + [m for u, a in EXAMPLES for m in ({"role": "user", "content": json.dumps(u)}, {"role": "assistant", "content": json.dumps(a)})]
            + [{"role": "user", "content": json.dumps(user)}],
            "max_tokens": MAX_TOKENS,
            "temperature": 0.9,
            "response_format": {"type": "json_schema", "json_schema": {"name": "beat", "schema": SCHEMA if want_hint else SCHEMA_NO_HINT}},
        }
        t0 = time.monotonic()
        r = await self.client.post(LLM_URL, json=payload, timeout=DEADLINE_S)
        r.raise_for_status()
        data = r.json()
        raw = data["choices"][0]["message"]["content"]
        if len(raw) > 2000:
            raise ValueError("response too long")
        out = json.loads(raw)
        timings = data.get("timings") or {}
        n, ms = timings.get("predicted_n"), timings.get("predicted_ms")
        self.last_tok_s = round(n / (ms / 1000), 1) if n and ms else None
        return self._validate(out, faction, want_hint, s, time.monotonic() - t0)

    def _validate(self, o: dict, faction, want_hint, s: dict, _elapsed) -> dict:
        line = str(o["speech"]).replace("\u2014", ",").strip()[:200]
        if not line or any(b in f" {line.lower()} " for b in BANNED):
            raise ValueError("bad speech")
        mood = o["mood"] if o["mood"] in ("calm", "smug", "furious") else "calm"
        spread = None
        if o["spread_zone"] in ZONES:
            spread = {"zone": o["spread_zone"], "amount": 0.15}
        count = int(o["spawn_count"])
        if not (0 <= count <= 4) or not math.isfinite(count):
            raise ValueError("bad spawn_count")
        spawn = None
        if count > 0 and o["spawn_zone"] in ZONES:
            spawn = {"kind": "petalborn" if faction == "blight" else "chomper", "count": count, "zone": o["spawn_zone"]}
        hint = None
        if want_hint:
            riddle = str(o["riddle"]).replace("\u2014", ",").strip()[:160]
            if not riddle:
                raise ValueError("missing riddle")
            truthful = True if faction == "blight" else bool(o["truthful"])
            shard = s.get("nearest_shard") or "s1"
            hint = {"shard": shard, "riddle": riddle, "truthful": truthful}
        return {"line": line, "mood": mood, "spread": spread, "spawn": spawn, "hint": hint}
