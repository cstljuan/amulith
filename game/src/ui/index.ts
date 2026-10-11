import type { Director, Shrine, Telemetry } from '@protocol/messages';
import type { EventBus, GameEvents } from '../core/events';
import type { Input } from '../input/Input';
import type { GameSession } from '../rules/session';
import { onSettings, settings, updateSettings } from './settings';
import './ui.css';

const ZONE_NAMES = { hollow: 'Mushroom Hollow', glade: 'Petal Glade', rootdeep: 'Rootdeep' } as const;
const art = (path: string) => `${import.meta.env.BASE_URL}art/${path}`;
const na = (v: number | null | undefined, unit = '', digits = 0) => (v === null || v === undefined ? 'n/a' : `${v.toFixed(digits)}${unit}`);

interface UiHost {
  events: EventBus<GameEvents>;
  input: Input;
  session: GameSession;
  player: { position: { x: number; z: number } };
  renderer: { domElement: HTMLCanvasElement };
}

// Title and faction pick, HUD, Amulith dialogue, pause menu with settings, and judge mode.
// All of it works from the controller alone. main.ts calls ui.frame(dt) once per rendered frame.
export function installUI({ events, input, session, player, renderer }: UiHost) {
  const root = document.createElement('div');
  root.id = 'ui';
  root.innerHTML = `
    <div class="hud" hidden>
      <div class="hud-zone"><small data-faction></small><span data-zone></span></div>
      <div class="hud-share"><div class="bar"><div class="blight-veins"></div><div class="bloom" data-bloom></div></div>
        <div class="labels"><span data-bloom-label></span><span data-blight-label></span></div></div>
      <div class="hud-prompts"><span><i class="btn a">A</i>Pulse</span><span><i class="btn y">Y</i>Ask Amulith</span><span><i class="btn menu">MENU</i>Pause</span></div>
    </div>
    <div class="dialogue gone" role="status" aria-live="polite">
      <img alt="" data-face src="${art('amulith/calm.png')}">
      <div><div class="name">AMULITH <em data-source></em></div><div class="line" data-line></div></div>
    </div>
    <div class="title">
      <h1>AMULITH</h1>
      <p>Place him on the stone.</p>
      <div class="choices">
        <div class="choice bloom on" data-choice="bloom"><h2>Bloom</h2><span>Wake the Knight. Sleepy Lenny.</span></div>
        <div class="choice blight" data-choice="blight"><h2>Blight</h2><span>Feed the Gem. Angry Lenny.</span></div>
      </div>
      <div class="hint"><i class="btn stick">L</i>choose <i class="btn a">A</i>begin, or place a figure on the shrine</div>
    </div>
    <div class="pause" hidden>
      <div class="panel"><h2>Paused</h2><div class="say" data-say></div><ul data-menu></ul>
        <div class="hint"><i class="btn stick">L</i>move <i class="btn a">A</i>select <i class="btn b">B</i>resume</div></div>
    </div>
    <div class="judge" hidden><h3>JUDGE MODE / ON THE JETSON</h3><dl data-judge></dl>
      <div class="note">Live from the device. n/a means the device did not report it.</div></div>`;
  document.body.append(root);
  // Lay out for 1080p and scale up on bigger screens (the TV reports 3840 x 2160 at 1x).
  const fit = () => { root.style.zoom = String(Math.max(1, window.innerHeight / 1080)); };
  fit(); window.addEventListener('resize', fit);
  const $ = <T extends HTMLElement = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const hud = $('.hud'), title = $('.title'), pause = $('.pause'), judge = $('.judge'), dialogue = $('.dialogue');

  // State fed by events.
  let telemetry: Telemetry | null = null, shrine: Shrine | null = null, lastDirector: Director | null = null;
  let mode = 'offline', thinking = false, typed = 0, typeText = '', hideAt = 0, clock = 0;
  let fps = 0, frames = 0, fpsClock = 0, choice: 'bloom' | 'blight' = 'bloom', menuIndex = 0, lastY = 0;
  const audio = new Audio();

  const applySettings = () => {
    root.style.setProperty('--sub', { S: '24px', M: '30px', L: '38px' }[settings.subtitleSize]);
    root.classList.toggle('still', settings.reducedMotion);
    judge.hidden = !settings.judge;
  };
  applySettings();

  const say = (text: string, ms = 6000) => {
    typeText = text; typed = settings.reducedMotion ? text.length : 0; hideAt = clock + ms / 1000 + text.length * 0.03;
    $('[data-line]').textContent = settings.reducedMotion ? text : '';
    dialogue.classList.remove('gone');
  };

  const offs = [
    onSettings(applySettings),
    events.on('connection', e => { mode = e.mode; }),
    events.on('telemetry', e => { telemetry = e; }),
    events.on('shrine', e => { shrine = e; }),
    events.on('thinking', e => { thinking = e.active; dialogue.classList.toggle('thinking', thinking); if (thinking) dialogue.classList.remove('gone'); }),
    events.on('ask', () => { thinking = true; dialogue.classList.add('thinking'); dialogue.classList.remove('gone'); if (!typeText || clock > hideAt) $('[data-line]').textContent = '...'; hideAt = clock + 12; }),
    events.on('director', e => {
      lastDirector = e; thinking = false; dialogue.classList.remove('thinking');
      $<HTMLImageElement>('[data-face]').src = art(`amulith/${e.mood}.png`);
      $('[data-source]').textContent = e.source === 'llm' ? `live on the Jetson, ${(e.latency_ms / 1000).toFixed(1)} s` : 'scripted line';
      say(e.line);
    }),
    events.on('speech', e => { try { audio.src = e.url; void audio.play().catch(() => undefined); } catch { /* no audio device */ } }),
    events.on('faction', e => { title.classList.toggle('gone', !!e.faction); window.setTimeout(() => { title.hidden = !!session.faction; }, 600); hud.hidden = !e.faction; }),
  ];

  const menu = () => [
    { label: 'Resume', value: '', run: () => events.emit('pause', { paused: false }) },
    { label: 'Reduced motion', value: settings.reducedMotion ? 'On' : 'Off', run: () => updateSettings({ reducedMotion: !settings.reducedMotion }) },
    { label: 'Subtitle size', value: settings.subtitleSize, run: () => updateSettings({ subtitleSize: settings.subtitleSize === 'S' ? 'M' : settings.subtitleSize === 'M' ? 'L' : 'S' }) },
    { label: 'Judge mode', value: settings.judge ? 'On' : 'Off', run: () => updateSettings({ judge: !settings.judge }) },
    { label: 'Switch faction', value: session.faction === 'bloom' ? 'to Blight' : 'to Bloom', run: () => session.select(session.faction === 'bloom' ? 'angry' : 'sleepy') },
  ];
  const drawMenu = () => {
    $('[data-menu]').innerHTML = menu().map((item, i) => `<li class="${i === menuIndex ? 'on' : ''}"><span>${item.label}</span><b>${item.value}</b></li>`).join('');
  };

  // Menu navigation: stick or d-pad edges, A to select, B to go back.
  const navY = () => {
    const pad = Array.from(navigator.getGamepads?.() ?? []).find(p => p?.connected);
    const y = input.actions.move.y + (pad?.buttons[13]?.pressed ? 1 : 0) - (pad?.buttons[12]?.pressed ? 1 : 0);
    const x = input.actions.move.x + (pad?.buttons[15]?.pressed ? 1 : 0) - (pad?.buttons[14]?.pressed ? 1 : 0);
    const step = Math.abs(y) > 0.6 && Math.abs(lastY) <= 0.6 ? Math.sign(y) : 0;
    const stepX = Math.abs(x) > 0.6 ? Math.sign(x) : 0;
    lastY = y;
    return { step, stepX };
  };

  const frame = (dt: number) => {
    clock += dt; frames++; fpsClock += dt;
    if (fpsClock >= 1) { fps = frames / fpsClock; frames = 0; fpsClock = 0; }
    if (input.pressed('judge')) updateSettings({ judge: !settings.judge });
    const { step, stepX } = navY();

    if (!session.faction) {
      // Title: choose with the stick, confirm with A. A shrine figure also starts the run.
      if (stepX) choice = stepX < 0 ? 'bloom' : 'blight';
      root.querySelectorAll('[data-choice]').forEach(el => el.classList.toggle('on', (el as HTMLElement).dataset.choice === choice));
      if (input.pressed('pulse')) session.select(choice === 'bloom' ? 'sleepy' : 'angry');
    } else if (session.paused) {
      if (pause.hidden) { pause.hidden = false; menuIndex = 0; }
      $('[data-say]').textContent = shrine?.state === 'empty' ? 'Put him back.' : '';
      const items = menu();
      if (step) menuIndex = (menuIndex + step + items.length) % items.length;
      if (input.pressed('pulse')) items[menuIndex].run();
      else if (input.pressed('dash')) events.emit('pause', { paused: false });
      drawMenu();
    } else if (!pause.hidden) pause.hidden = true;

    // HUD
    if (session.faction) {
      const share = session.land.share();
      $('[data-bloom]').style.width = `${(share.bloom * 100).toFixed(1)}%`;
      $('[data-bloom-label]').textContent = `Bloom ${Math.round(share.bloom * 100)}%`;
      $('[data-blight-label]').textContent = `Blight ${Math.round(share.blight * 100)}%`;
      $('[data-faction]').textContent = session.faction === 'bloom' ? 'Bloom / Wake the Knight' : 'Blight / Feed the Gem';
      const x = player.position.x;
      $('[data-zone]').textContent = ZONE_NAMES[x < -10 ? 'hollow' : x < 10 ? 'glade' : 'rootdeep'];
    }

    // Typed subtitles, then fade.
    if (typed < typeText.length) { typed = Math.min(typeText.length, typed + dt * 45); $('[data-line]').textContent = typeText.slice(0, Math.floor(typed)); }
    if (!thinking && hideAt && clock > hideAt) { dialogue.classList.add('gone'); hideAt = 0; }

    if (settings.judge) {
      const t = telemetry, canvas = renderer.domElement;
      const rows: [string, string][] = [
        ['GPU', na(t?.gpu_pct, '%')], ['CPU', na(t?.cpu_pct, '%')],
        ['RAM', t?.ram_used_mb != null && t?.ram_total_mb != null ? `${(t.ram_used_mb / 1024).toFixed(1)} / ${(t.ram_total_mb / 1024).toFixed(1)} GB` : 'n/a'],
        ['Power', t?.power_mw != null ? `${(t.power_mw / 1000).toFixed(1)} W` : 'n/a'], ['Temp', na(t?.temp_c, ' C', 1)], ['LLM speed', na(t?.tok_s, ' tok/s', 1)],
        ['Shrine', shrine ? `${shrine.state} ${(shrine.confidence * 100).toFixed(0)}%` : 'n/a'],
        ['Last line', lastDirector ? (lastDirector.source === 'llm' ? `LLM, ${(lastDirector.latency_ms / 1000).toFixed(1)} s` : 'scripted') : 'n/a'],
        ['Link', mode], ['Frame rate', `${fps.toFixed(0)} fps`], ['Render', `${canvas.width} x ${canvas.height}`],
      ];
      $('[data-judge]').innerHTML = rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');
    }
  };

  return {
    frame,
    dispose() { offs.forEach(off => off()); window.removeEventListener('resize', fit); audio.pause(); root.remove(); },
  };
}
