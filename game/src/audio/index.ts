import type { Faction, Speech } from '@protocol/messages';
import type { EventBus, GameEvents } from '../core/events';
import type { ActionMap } from '../input/Input';

export interface AudioSettings { volume: number; muted: boolean }
type Effect = 'pulse' | 'shard-found' | 'shard-resolved' | 'hurt' | 'faction-flip' | 'pause' | 'select';
type Controls = ActionMap;

// Local CC0 buffers, two synchronized loops and a bounded pool of one-shots. The first
// real input creates the context; receiving a shrine/director event never unlocks audio.
export function installAudio(events: EventBus<GameEvents>, initial: AudioSettings) {
  let options = initial, context: AudioContext | null = null, master: GainNode | null = null;
  let music: GainNode | null = null, effects: GainNode | null = null;
  let faction: Faction | null = null, paused = false, unlocked = false, disposed = false;
  let loading: Promise<void> | null = null, loadingSpeech = 0, voicePlaying = false;
  let pendingSpeech: Speech | null = null, musicStarted = false;
  let gamepadTried = false;
  const buffers = new Map<string, AudioBuffer>();
  const loops = new Map<Faction, { source: AudioBufferSourceNode; gain: GainNode }>();
  const active = new Set<AudioBufferSourceNode>();
  const speech = new Audio();
  speech.preload = 'none';

  const ramp = (param: AudioParam, value: number, seconds = 0.08) => {
    if (!context) return;
    param.cancelScheduledValues(context.currentTime);
    param.setTargetAtTime(value, context.currentTime, seconds);
  };
  const mix = () => {
    if (!master || !music || !context) return;
    ramp(master.gain, options.muted ? 0 : options.volume);
    ramp(music.gain, voicePlaying ? 0.055 : paused ? 0.12 : 0.3, voicePlaying ? 0.04 : 0.25);
    for (const [name, loop] of loops) ramp(loop.gain.gain, faction === name ? 1 : 0, 0.5);
    speech.volume = options.muted ? 0 : options.volume;
  };
  const stopVoice = () => {
    loadingSpeech++;
    speech.pause();
    voicePlaying = false;
    mix();
  };
  const playVoice = (message: Speech) => {
    if (!unlocked || !context || context.state !== 'running') { pendingSpeech = message; return; }
    stopVoice();
    const generation = loadingSpeech;
    speech.src = message.url;
    speech.volume = options.muted ? 0 : options.volume;
    void speech.play().then(() => {
      if (generation !== loadingSpeech || disposed) return;
      voicePlaying = true; mix();
    }).catch(() => {
      if (generation !== loadingSpeech) return;
      voicePlaying = false; mix();
    });
  };
  const voiceDone = () => { voicePlaying = false; mix(); };
  speech.addEventListener('ended', voiceDone);
  speech.addEventListener('error', voiceDone);
  speech.addEventListener('playing', () => { voicePlaying = true; mix(); });
  speech.addEventListener('waiting', voiceDone);

  const startMusic = () => {
    if (!context || !music || !unlocked || musicStarted || disposed) return;
    const names: Faction[] = ['bloom', 'blight'];
    if (!names.every(name => buffers.has(name))) return;
    musicStarted = true;
    const start = context.currentTime + 0.03;
    for (const name of names) {
      const source = context.createBufferSource(), gain = context.createGain();
      source.buffer = buffers.get(name)!; source.loop = true;
      gain.gain.value = faction === name ? 1 : 0;
      source.connect(gain).connect(music); source.start(start);
      loops.set(name, { source, gain });
    }
    mix();
  };
  const load = async () => {
    const names = ['bloom', 'blight', 'pulse', 'shard-found', 'shard-resolved', 'hurt', 'faction-flip', 'pause', 'select'];
    await Promise.all(names.map(async name => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}audio/${name}.wav`);
        if (!response.ok) return;
        const data = await response.arrayBuffer();
        if (disposed || !context) return;
        const buffer = await context.decodeAudioData(data);
        if (!disposed) buffers.set(name, buffer);
      } catch { /* A missing file or device must not stop the game. */ }
    }));
    startMusic();
  };
  const unlock = () => {
    if (disposed) return;
    try {
      if (!context) {
        context = new AudioContext();
        master = context.createGain(); music = context.createGain(); effects = context.createGain();
        master.gain.value = options.muted ? 0 : options.volume;
        music.gain.value = 0.3; effects.gain.value = 0.55;
        music.connect(master); effects.connect(master); master.connect(context.destination);
      }
      void context.resume().then(() => {
        if (disposed || context?.state !== 'running') return;
        unlocked = true;
        loading ??= load();
        startMusic();
        if (pendingSpeech) { const message = pendingSpeech; pendingSpeech = null; playVoice(message); }
      }).catch(() => undefined);
    } catch { /* Audio is optional on devices without an output. */ }
  };
  const input = (event: Event) => { if (event.isTrusted) unlock(); };
  window.addEventListener('keydown', input);
  window.addEventListener('pointerdown', input);

  const effect = (name: Effect) => {
    const buffer = buffers.get(name);
    if (!unlocked || !context || context.state !== 'running' || !effects || !buffer || disposed) return;
    if (active.size >= 8) return;
    const source = context.createBufferSource();
    source.buffer = buffer; source.connect(effects); active.add(source);
    source.onended = () => { active.delete(source); source.disconnect(); };
    source.start();
  };
  const offs = [
    events.on('faction', e => {
      faction = e.faction;
      if (!faction) { pendingSpeech = null; stopVoice(); }
      mix();
    }),
    events.on('pulse-applied', () => effect('pulse')),
    events.on('game-event', e => {
      if (e.kind === 'shard_found') effect('shard-found');
      if (e.kind === 'shard_resolved') effect('shard-resolved');
      if (e.kind === 'player_hurt') effect('hurt');
      if (e.kind === 'faction_flip') effect('faction-flip');
    }),
    events.on('pause', e => { if (paused !== e.paused && faction) effect('pause'); paused = e.paused; mix(); }),
    events.on('speech', e => playVoice(e)),
  ];

  return {
    frame(actions: Controls) {
      const moved = Math.hypot(actions.move.x, actions.move.y) > 0.1 || Math.abs(actions.lanternDelta) > 0.1;
      if (!unlocked && !gamepadTried && (moved || Object.values(actions).some(value => value === true))) { gamepadTried = true; unlock(); }
    },
    select: () => effect('select'),
    setSettings(next: AudioSettings) { options = next; mix(); },
    status: () => !context ? 'locked' : context.state,
    dispose() {
      disposed = true; stopVoice(); pendingSpeech = null;
      offs.forEach(off => off());
      window.removeEventListener('keydown', input); window.removeEventListener('pointerdown', input);
      speech.removeAttribute('src'); speech.load();
      for (const { source, gain } of loops.values()) { source.stop(); source.disconnect(); gain.disconnect(); }
      for (const source of active) { source.stop(); source.disconnect(); }
      active.clear(); loops.clear(); buffers.clear();
      if (context) void context.close().catch(() => undefined);
    },
  };
}
