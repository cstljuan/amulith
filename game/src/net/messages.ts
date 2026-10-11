import { PROTOCOL_VERSION } from '@protocol/messages';
import type { RemnantMessage } from '@protocol/messages';

const object = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);
const number = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);
const unit = (v: unknown) => number(v) && v >= 0 && v <= 1;
const positive = (v: unknown) => number(v) && v >= 0;
const oneOf = (v: unknown, values: readonly string[]) => typeof v === 'string' && values.includes(v);
const zones = ['hollow', 'glade', 'rootdeep'];

/** Runtime boundary for the original protocol; malformed data never enters gameplay. */
export function parseRemnant(raw: unknown): RemnantMessage | null {
  try {
    const v: unknown = typeof raw === 'string' ? JSON.parse(raw) : null;
    if (!object(v)) return null;
    let valid = false;
    switch (v.type) {
      case 'hello': valid = v.version === PROTOCOL_VERSION && oneOf(v.mode, ['live', 'mock']) && ['llm_ready','shrine_ready','relic_ready'].every(k => typeof v[k] === 'boolean'); break;
      case 'shrine': valid = oneOf(v.state, ['empty','sleepy','angry','hand']) && unit(v.confidence); break;
      case 'relic': valid = unit(v.knob) && oneOf(v.button, ['down','up']); break;
      case 'thinking': valid = typeof v.active === 'boolean'; break;
      case 'speech': valid = typeof v.id === 'string' && typeof v.url === 'string' && positive(v.duration_ms) && oneOf(v.engine, ['elevenlabs','cached','piper']); break;
      case 'telemetry': valid = ['gpu_pct','cpu_pct','ram_used_mb','ram_total_mb','power_mw','temp_c','tok_s'].every(k => v[k] === null || number(v[k])); break;
      case 'director': {
        const spread = v.spread === null || (object(v.spread) && oneOf(v.spread.zone, zones) && unit(v.spread.amount));
        const spawn = v.spawn === null || (object(v.spawn) && oneOf(v.spawn.kind, ['chomper','petalborn']) && oneOf(v.spawn.zone, zones) && number(v.spawn.count) && Number.isInteger(v.spawn.count) && v.spawn.count >= 1 && v.spawn.count <= 4);
        const hint = v.hint === null || (object(v.hint) && oneOf(v.hint.shard, ['s1','s2','s3','s4','s5','s6']) && typeof v.hint.riddle === 'string' && typeof v.hint.truthful === 'boolean');
        valid = typeof v.id === 'string' && typeof v.line === 'string' && oneOf(v.mood, ['calm','smug','furious']) && oneOf(v.source, ['llm','scripted']) && positive(v.latency_ms) && spread && spawn && hint;
        break;
      }
    }
    return valid ? v as unknown as RemnantMessage : null;
  } catch { return null; }
}
