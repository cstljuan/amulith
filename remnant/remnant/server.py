"""Amulith remnant service: one WebSocket for the game, per protocol/README.md.

Run: uvicorn remnant.server:app --host 0.0.0.0 --port 8765
"""

import asyncio
import json
import time
from pathlib import Path

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.staticfiles import StaticFiles

from .director import Director
from .telemetry import Telemetry

PROTOCOL_VERSION = 1
BEAT_INTERVAL_S = 25.0
AUDIO_DIR = Path(__file__).resolve().parent.parent / "audio"
AUDIO_DIR.mkdir(exist_ok=True)

app = FastAPI()
app.mount("/audio", StaticFiles(directory=AUDIO_DIR), name="audio")


class Hub:
    def __init__(self) -> None:
        self.clients: set[WebSocket] = set()
        self.director = Director()
        self.telemetry = Telemetry()
        self.state: dict | None = None
        self.faction: str | None = None
        self.shrine = "empty"
        self.last_beat = 0.0
        self.counter = 0
        self.pending: asyncio.Task | None = None

    async def send(self, msg: dict) -> None:
        data = json.dumps(msg)
        for ws in list(self.clients):
            try:
                await ws.send_text(data)
            except Exception:
                self.clients.discard(ws)

    def request_beat(self, trigger: str, want_hint: bool = False) -> None:
        """Coalesces: at most one beat in flight; extra triggers are dropped unless they ask for a hint."""
        if self.pending and not self.pending.done():
            return
        self.pending = asyncio.create_task(self._beat(trigger, want_hint))

    async def _beat(self, trigger: str, want_hint: bool) -> None:
        self.last_beat = time.monotonic()
        self.counter += 1
        beat_id = f"b{self.counter}"
        await self.send({"type": "thinking", "active": True})
        body = await self.director.beat(self.faction, trigger, want_hint, self.state)
        await self.send({"type": "thinking", "active": False})
        await self.send({"type": "director", "id": beat_id, **body})

    async def ticker(self) -> None:
        while True:
            await asyncio.sleep(1)
            t = self.telemetry.latest()
            msg = {"type": "telemetry", "tok_s": self.director.last_tok_s}
            msg.update(t or {"gpu_pct": None, "cpu_pct": None, "ram_used_mb": None, "ram_total_mb": None, "power_mw": None, "temp_c": None})
            await self.send(msg)
            if self.faction and self.shrine != "empty" and time.monotonic() - self.last_beat > BEAT_INTERVAL_S:
                self.request_beat("periodic")


hub = Hub()


@app.on_event("startup")
async def startup() -> None:
    asyncio.create_task(hub.telemetry.run())
    asyncio.create_task(hub.ticker())


@app.get("/health")
async def health() -> dict:
    return {"ok": True, "llm": await hub.director.healthy()}


@app.websocket("/ws")
async def ws_endpoint(ws: WebSocket) -> None:
    await ws.accept()
    hub.clients.add(ws)
    await ws.send_text(json.dumps({
        "type": "hello", "version": PROTOCOL_VERSION, "mode": "live",
        "llm_ready": await hub.director.healthy(), "shrine_ready": False, "relic_ready": False,
    }))
    await ws.send_text(json.dumps({"type": "shrine", "state": hub.shrine, "confidence": 0.0}))
    try:
        while True:
            raw = await ws.receive_text()
            if len(raw) > 8000:
                continue
            try:
                msg = json.loads(raw)
            except ValueError:
                continue
            kind = msg.get("type")
            if kind == "state":
                hub.state = msg
                if msg.get("faction") in ("bloom", "blight"):
                    hub.faction = msg["faction"]
            elif kind == "ask":
                hub.request_beat("player_asked_for_hint", want_hint=True)
            elif kind == "event":
                if msg.get("kind") in ("run_start", "shard_found", "shard_resolved", "faction_flip", "run_end"):
                    hub.request_beat(str(msg.get("kind")))
    except WebSocketDisconnect:
        pass
    finally:
        hub.clients.discard(ws)
