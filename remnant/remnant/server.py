"""Amulith remnant service: one WebSocket for the game, per protocol/README.md.

Run: uvicorn remnant.server:app --host 0.0.0.0 --port 8765
"""

import asyncio
import json
import os
import time
from pathlib import Path

from fastapi import FastAPI, Response, WebSocket, WebSocketDisconnect
from fastapi.staticfiles import StaticFiles

from .director import Director
from .relic import Relic
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
        self.shrine_confidence = 0.0
        self.vision = None  # ShrineCamera when the camera stack is available
        self.last_beat = 0.0
        self.counter = 0
        self.pending: asyncio.Task | None = None
        self.relic: Relic | None = None
        self.led_override_until = 0.0

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
        self.led("thinking")
        if self.vision:
            self.vision.set_busy(True)
        try:
            body = await self.director.beat(self.faction, trigger, want_hint, self.state)
        finally:
            if self.vision:
                self.vision.set_busy(False)
        await self.send({"type": "thinking", "active": False})
        self.led("idle")
        await self.send({"type": "director", "id": beat_id, **body})

    def led(self, mode: str, level: float = 1.0, game: bool = False) -> None:
        """Remnant drives the LED by default; a game request wins for 3 s."""
        if not self.relic:
            return
        if game:
            self.led_override_until = time.monotonic() + 3.0
        elif time.monotonic() < self.led_override_until:
            return
        self.relic.set_led(mode, level)

    @property
    def shrine_ready(self) -> bool:
        return bool(self.vision and self.vision.ready)

    async def on_shrine(self, state: str, confidence: float) -> None:
        """Accepted (debounced) detector state. A hand over an empty shrine is not
        sent: the game ignores `hand`, so hand then empty would read as the figure
        being lifted and pause a run that was started with the controller."""
        if state == "hand" and self.shrine not in ("sleepy", "angry"):
            return
        if state == self.shrine:
            return
        self.shrine = state
        self.shrine_confidence = round(float(confidence), 3)
        await self.send({"type": "shrine", "state": state, "confidence": self.shrine_confidence})

    async def on_relic(self, msg: dict) -> None:
        edge = msg.pop("edge", False)
        await self.send(msg)
        if edge and msg.get("button") == "down":
            self.request_beat("player_asked_for_hint", want_hint=True)

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
    loop = asyncio.get_running_loop()
    hub.relic = Relic(loop, hub.on_relic)
    if os.environ.get("AMULITH_VISION", "1") != "0":
        try:
            from .vision.camera import ShrineCamera
        except ImportError as exc:  # numpy/opencv missing: controller pick stays the only input
            print(f"vision disabled: {exc}", flush=True)
        else:
            def on_change(state: str, confidence: float) -> None:
                asyncio.run_coroutine_threadsafe(hub.on_shrine(state, confidence), loop)
            hub.vision = ShrineCamera(on_change).start()


@app.get("/health")
async def health() -> dict:
    return {"ok": True, "llm": await hub.director.healthy()}


@app.get("/vision/status")
async def vision_status() -> dict:
    if not hub.vision:
        return {"ready": False, "enabled": False}
    return {"enabled": True, "sent_state": hub.shrine, **hub.vision.status()}


@app.get("/vision/debug.jpg")
async def vision_debug() -> Response:
    jpg = hub.vision.debug_jpeg() if hub.vision else None
    if jpg is None:
        return Response(status_code=503)
    return Response(content=jpg, media_type="image/jpeg", headers={"Cache-Control": "no-store"})


@app.post("/vision/calibrate")
async def vision_calibrate() -> dict:
    """Learn the empty shrine now (the shrine must be empty). Normally automatic."""
    if not hub.vision:
        return {"ok": False}
    hub.vision.request_calibration()
    return {"ok": True}


@app.websocket("/ws")
async def ws_endpoint(ws: WebSocket) -> None:
    await ws.accept()
    hub.clients.add(ws)
    await ws.send_text(json.dumps({
        "type": "hello", "version": PROTOCOL_VERSION, "mode": "live",
        "llm_ready": await hub.director.healthy(), "shrine_ready": hub.shrine_ready, "relic_ready": bool(hub.relic and hub.relic.ready),
    }))
    await ws.send_text(json.dumps({"type": "shrine", "state": hub.shrine, "confidence": hub.shrine_confidence}))
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
            elif kind == "led":
                hub.led(str(msg.get("mode")), float(msg.get("level", 1.0) or 0), game=True)
            elif kind == "event":
                if msg.get("kind") in ("run_start", "shard_found", "shard_resolved", "faction_flip", "run_end"):
                    hub.request_beat(str(msg.get("kind")))
    except WebSocketDisconnect:
        pass
    finally:
        hub.clients.discard(ws)
