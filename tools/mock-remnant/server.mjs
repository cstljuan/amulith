// Mock remnant: fakes the Jetson service so the game can be built on a laptop.
// Run: npm install && npm start   (in tools/mock-remnant)
// Keys in this terminal: 1 empty, 2 sleepy, 3 angry, 4 hand, a ask, b button tap,
// [ / ] knob down / up, q quit.

import { WebSocketServer } from "ws";
import http from "node:http";
import readline from "node:readline";

const PORT = Number(process.env.PORT || 8765);

const LINES = {
  bloom: [
    ["calm", "Why destroy me, little Dryad? I made this forest."],
    ["smug", "The knight sleeps so peacefully. Let him."],
    ["furious", "Every flower you plant is a wound in me."],
  ],
  blight: [
    ["smug", "Yes. Bring me home, piece by piece."],
    ["calm", "The knight sleeps better in the dark."],
    ["smug", "Spora would be proud of you."],
  ],
};
const RIDDLES = [
  "Where the caps grow tallest, something hums beneath.",
  "Follow the petals that fall upward.",
  "Under the oldest root, I wait.",
];
const ZONES = ["hollow", "glade", "rootdeep"];

let faction = null;
let shrine = "empty";
let knob = 0.5;
let counter = 0;
const clients = new Set();

const pick = (a) => a[Math.floor(Math.random() * a.length)];
const send = (msg) => {
  const s = JSON.stringify(msg);
  for (const c of clients) if (c.readyState === 1) c.send(s);
};

function director(withHint) {
  const pool = LINES[faction || "bloom"];
  const [mood, line] = pick(pool);
  const id = `m${++counter}`;
  send({ type: "thinking", active: true });
  setTimeout(() => {
    send({ type: "thinking", active: false });
    send({
      type: "director",
      id,
      line,
      mood,
      spread: Math.random() < 0.6 ? { zone: pick(ZONES), amount: 0.15 } : null,
      spawn: Math.random() < 0.5
        ? { kind: faction === "blight" ? "petalborn" : "chomper", count: 2, zone: pick(ZONES) }
        : null,
      hint: withHint
        ? { shard: pick(["s1", "s2", "s3", "s4", "s5", "s6"]), riddle: pick(RIDDLES), truthful: Math.random() < 0.7 }
        : null,
      source: "scripted",
      latency_ms: 1200,
    });
  }, 1200);
}

function setShrine(state) {
  shrine = state;
  if (state === "sleepy") faction = "bloom";
  if (state === "angry") faction = "blight";
  send({ type: "shrine", state, confidence: 0.97 });
  console.log(`shrine -> ${state}`);
}

const server = http.createServer((req, res) => {
  res.writeHead(404);
  res.end("mock remnant: no audio in mock mode");
});
const wss = new WebSocketServer({ server, path: "/ws" });

wss.on("connection", (ws) => {
  clients.add(ws);
  ws.send(JSON.stringify({ type: "hello", version: 1, mode: "mock", llm_ready: true, shrine_ready: true, relic_ready: true }));
  ws.send(JSON.stringify({ type: "shrine", state: shrine, confidence: 0.97 }));
  ws.send(JSON.stringify({ type: "relic", knob, button: "up" }));
  ws.on("message", (raw) => {
    let msg;
    try { msg = JSON.parse(raw); } catch { return; }
    if (msg.type === "ask") director(true);
    if (msg.type === "event") {
      console.log(`event ${msg.kind}`);
      if (["run_start", "shard_found", "shard_resolved", "faction_flip"].includes(msg.kind)) director(false);
    }
    if (msg.type === "led") console.log(`led ${msg.mode} ${msg.level}`);
  });
  ws.on("close", () => clients.delete(ws));
  console.log("game connected");
});

setInterval(() => { if (faction && shrine !== "empty") director(false); }, 25000);
setInterval(() => {
  send({
    type: "telemetry",
    gpu_pct: Math.round(10 + Math.random() * 20),
    cpu_pct: Math.round(15 + Math.random() * 15),
    ram_used_mb: 4200, ram_total_mb: 7486,
    power_mw: 9000, temp_c: 48, tok_s: null,
  });
}, 1000);

server.listen(PORT, () => {
  console.log(`mock remnant on ws://localhost:${PORT}/ws`);
  console.log("keys: 1 empty, 2 sleepy, 3 angry, 4 hand, a ask, b button, [ ] knob, q quit");
});

if (process.stdin.isTTY) {
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  process.stdin.on("keypress", (_s, key) => {
    const k = key?.sequence;
    if (k === "q" || (key?.ctrl && key.name === "c")) process.exit(0);
    if (k === "1") setShrine("empty");
    if (k === "2") setShrine("sleepy");
    if (k === "3") setShrine("angry");
    if (k === "4") setShrine("hand");
    if (k === "a") director(true);
    if (k === "b") {
      send({ type: "relic", knob, button: "down" });
      setTimeout(() => send({ type: "relic", knob, button: "up" }), 150);
      director(true);
    }
    if (k === "[" || k === "]") {
      knob = Math.min(1, Math.max(0, knob + (k === "]" ? 0.1 : -0.1)));
      send({ type: "relic", knob: Number(knob.toFixed(2)), button: "up" });
      console.log(`knob ${knob.toFixed(2)}`);
    }
  });
}
