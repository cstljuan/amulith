// Message contract between game/ and remnant/. Owned by lane:platform.
// See protocol/README.md. Do not edit from other lanes.

export const PROTOCOL_VERSION = 1;

export type Faction = "bloom" | "blight";
export type Zone = "hollow" | "glade" | "rootdeep";
export type ShrineState = "empty" | "sleepy" | "angry" | "hand";
export type Mood = "calm" | "smug" | "furious";
export type EnemyKind = "chomper" | "petalborn";
export type ShardId = "s1" | "s2" | "s3" | "s4" | "s5" | "s6";
export type LedMode = "idle" | "thinking" | "near" | "solid" | "off";

// remnant -> game

export interface Hello {
  type: "hello";
  version: number;
  mode: "live" | "mock";
  llm_ready: boolean;
  shrine_ready: boolean;
  relic_ready: boolean;
}

export interface Shrine {
  type: "shrine";
  state: ShrineState;
  confidence: number;
}

export interface Relic {
  type: "relic";
  knob: number;
  button: "down" | "up";
}

export interface Spread {
  zone: Zone;
  amount: number;
}

export interface Spawn {
  kind: EnemyKind;
  count: number;
  zone: Zone;
}

export interface Hint {
  shard: ShardId;
  riddle: string;
  truthful: boolean;
}

export interface Director {
  type: "director";
  id: string;
  line: string;
  mood: Mood;
  spread: Spread | null;
  spawn: Spawn | null;
  hint: Hint | null;
  source: "llm" | "scripted";
  latency_ms: number;
}

export interface Speech {
  type: "speech";
  id: string;
  url: string;
  duration_ms: number;
  engine: "elevenlabs" | "cached" | "piper";
}

export interface Thinking {
  type: "thinking";
  active: boolean;
}

export interface Telemetry {
  type: "telemetry";
  gpu_pct: number;
  cpu_pct: number;
  ram_used_mb: number;
  ram_total_mb: number;
  power_mw: number;
  temp_c: number;
  tok_s: number | null;
}

export type RemnantMessage =
  | Hello
  | Shrine
  | Relic
  | Director
  | Speech
  | Thinking
  | Telemetry;

// game -> remnant

export interface GameState {
  type: "state";
  faction: Faction | null;
  zone: Zone;
  shards_found: number;
  shards_total: number;
  land: { bloom: number; blight: number };
  hp: number;
  lantern: number;
  enemies_near: number;
  elapsed_s: number;
  asks_used: number;
}

export type GameEventKind =
  | "run_start"
  | "shard_found"
  | "shard_resolved"
  | "player_hurt"
  | "faction_flip"
  | "run_end";

export interface GameEvent {
  type: "event";
  kind: GameEventKind;
  data: Record<string, unknown>;
}

export interface Ask {
  type: "ask";
}

export interface Led {
  type: "led";
  mode: LedMode;
  level: number;
}

export type GameMessage = GameState | GameEvent | Ask | Led;
