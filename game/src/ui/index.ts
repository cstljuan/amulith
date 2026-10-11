import type { Director, Shrine, Telemetry } from '@protocol/messages';
import type { EventBus, GameEvents } from '../core/events';
import type { Input } from '../input/Input';
import type { GameSession } from '../rules/session';
import { onSettings, settings, updateSettings } from './settings';
import { installAudio } from '../audio';
import { LEVEL_LORE, type LevelId } from '../lore/levels';
import { CODEX_ENTRIES } from '../lore/codex';
import './ui.css';

const ZONE_NAMES = { hollow: 'Mushroom Hollow', glade: 'Petal Glade', rootdeep: 'Rootdeep' } as const;
const CODEX_KEY = 'amulith.codex';
const loadCodex = (): Set<string> => { try { const v = JSON.parse(localStorage.getItem(CODEX_KEY) ?? '[]'); return new Set(Array.isArray(v) ? v.filter(x => typeof x === 'string') : []); } catch { return new Set(); } };
const INTRO_SECONDS = 7;
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
      <div class="hud-run"><div class="hp"><span>Light</span><div class="hp-bar"><div data-hp></div></div></div>
        <div class="shards" data-shards></div><div class="lantern"><span>Lantern</span><div class="hp-bar lamp"><div data-lamp></div></div></div></div>
      <div class="hold" data-hold hidden><i class="btn a">A</i><span data-hold-text></span><div class="hold-bar"><div data-hold-bar></div></div></div>
      <div class="shrine-prompt" data-shrine-prompt hidden><i class="btn x">X</i>Talk to Amulith <small>F</small></div>
      <div class="hud-prompts"><span><i class="btn a">A</i>Pulse</span><span><i class="btn b">B</i>Dash</span><span><i class="btn y">Y</i>Ask Amulith</span><span><i class="btn menu">MENU</i>Pause</span></div>
    </div>
    <div class="dialogue gone" role="status" aria-live="polite">
      <img alt="" data-face src="${art('amulith/calm.png')}">
      <div><div class="name">AMULITH <em data-source></em></div><div class="line" data-line></div></div>
    </div>
    <div class="title">
      <h1>AMULITH</h1>
      <div class="flavor">${LEVEL_LORE.grove.subtitle}</div>
      <p>Place him on the stone.</p>
      <div class="choices">
        <div class="choice bloom on" data-choice="bloom"><h2>Bloom</h2><span>Wake the Knight. Sleepy Lenny.</span></div>
        <div class="choice blight" data-choice="blight"><h2>Blight</h2><span>Feed the Gem. Angry Lenny.</span></div>
      </div>
      <div class="hint"><i class="btn stick">L</i>choose <i class="btn a">A</i>begin, or place a figure on the shrine</div>
    </div>
    <div class="level-intro gone" role="status" aria-live="polite"><h2 data-intro-name></h2><div class="sub" data-intro-sub></div><div class="lines" data-intro-lines></div></div>
    <div class="ending" hidden><div class="ending-inner">
      <h2 data-end-title></h2><p data-end-text></p><div class="outro" data-end-outro></div><blockquote data-end-line></blockquote>
      <div class="credits"><h3>Credits</h3>
        <p>Lenny, T.K., the gem and the Knight Hacks IX lore belong to the Knight Hacks design team. Non-commercial fan project.</p>
        <p>Built by Juan Castillo and Lawrence Capistrano. Amulith speaks through an open model running on the NVIDIA Jetson Orin Nano.</p>
        <p>Pixel art by Juan in Aseprite, from AI-generated sources (GPT Image 2.5). Lenny and T.K. pixel art from official Knight Hacks IX art. Type: Noto Serif and Noto Sans (SIL OFL).</p>
        <p>Music and effects: original compositions by Juan Castillo (CC0 1.0).</p></div>
    </div></div>
    <div class="pause" hidden>
      <div class="panel"><h2>Paused</h2><div class="say" data-say></div><ul data-menu></ul>
        <div class="hint"><i class="btn stick">L</i>move <i class="btn a">A</i>select <i class="btn b">B</i>resume</div></div>
      <div class="panel codex" data-codex hidden><h2>Codex</h2><div class="say" data-codex-count></div>
        <div class="codex-body"><ul data-codex-list></ul><article data-codex-detail></article></div>
        <div class="hint"><i class="btn stick">L</i>move <i class="btn b">B</i>back</div></div>
    </div>
    <div class="judge" hidden><h3>JUDGE MODE / ON THE JETSON</h3><dl data-judge></dl>
      <div class="note">Live from the device. n/a means the device did not report it.</div></div>
    <button class="sound-unlock" data-sound hidden>Enable sound: click or press a key</button>`;
  document.body.append(root);
  const audio = installAudio(events, settings);
  // Dev builds expose the live game for browser checks (importing main.ts again would start a second game).
  if (import.meta.env.DEV) Object.assign(window, { __amulith: { events, session, player, input } });
  // Lay out for 1080p and scale up on bigger screens (the TV reports 3840 x 2160 at 1x).
  const fit = () => { root.style.zoom = String(Math.max(1, window.innerHeight / 1080)); };
  fit(); window.addEventListener('resize', fit);
  const $ = <T extends HTMLElement = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const hud = $('.hud'), title = $('.title'), pause = $('.pause'), judge = $('.judge'), dialogue = $('.dialogue'), ending = $('.ending');
  const showEnding = (e: GameEvents['run']) => {
    const bloom = e.faction === 'bloom';
    const [head, text] = e.result === 'lose' ? ['The lantern goes out.', bloom ? 'The roots keep the Knight. Amulith keeps the forest.' : 'Even the Gem forgets who fed it.']
      : bloom ? ['The Knight wakes.', 'The last shard breaks. T.K. stands, and the gem goes dark.'] : ['The Gem is whole.', 'The shards fuse. The treeline closes behind you.'];
    $('[data-end-title]').textContent = head; $('[data-end-text]').textContent = text;
    $('[data-end-line]').textContent = lastDirector ? `"${lastDirector.line}"` : '';
    const outro = e.result === 'win' ? LEVEL_LORE.deepwood[bloom ? 'outroBloom' : 'outroBlight'] : [];
    $('[data-end-outro]').replaceChildren(...outro.map(l => Object.assign(document.createElement('div'), { textContent: l })));
    ending.hidden = false; hud.hidden = true; pause.hidden = true; intro.classList.add('gone'); introHideAt = 0;
  };

  // State fed by events.
  let telemetry: Telemetry | null = null, shrine: Shrine | null = null, lastDirector: Director | null = null;
  let run: GameEvents['run'] | null = null, shardList: GameEvents['shards'] = [], lantern = 0.5;
  let mode = 'offline', thinking = false, typed = 0, typeText = '', hideAt = 0, clock = 0;
  let titleOut = 0, fps = 0, frames = 0, fpsClock = 0, choice: 'bloom' | 'blight' = 'bloom', menuIndex = 0, lastY = 0;

  // Level intro card. The level manager's 'level' event (if present) and run start both call this.
  const intro = $('.level-intro');
  let introHideAt = 0, introId: LevelId | null = null, introAt = -10;
  const discovered = loadCodex();
  const discover = (id: string) => {
    if (discovered.has(id)) return;
    discovered.add(id);
    try { localStorage.setItem(CODEX_KEY, JSON.stringify([...discovered])); } catch { /* storage blocked */ }
  };
  const showLevelIntro = (id: LevelId) => {
    const lore = LEVEL_LORE[id];
    if (!lore || (introId === id && clock - introAt < 1)) return;
    introId = id; introAt = clock; introHideAt = clock + INTRO_SECONDS;
    $('[data-intro-name]').textContent = lore.name; $('[data-intro-sub]').textContent = lore.subtitle;
    $('[data-intro-lines]').replaceChildren(...lore.introLines.map(l => Object.assign(document.createElement('p'), { textContent: l })));
    intro.classList.remove('gone');
    for (const entry of CODEX_ENTRIES) if (entry.discoverAt.some(d => d.kind === 'level' && d.id === id)) discover(entry.id);
  };
  let codexOpen = false, codexIndex = 0;
  const codexEl = $('[data-codex]'), panelEl = $('.pause .panel');
  const drawCodex = () => {
    $('[data-codex-count]').textContent = `${CODEX_ENTRIES.filter(c => discovered.has(c.id)).length} of ${CODEX_ENTRIES.length} found`;
    $('[data-codex-list]').innerHTML = CODEX_ENTRIES.map((c, i) => `<li class="${i === codexIndex ? 'on' : ''}${discovered.has(c.id) ? '' : ' locked'}"><span>${discovered.has(c.id) ? c.title : 'Undiscovered'}</span></li>`).join('');
    const c = CODEX_ENTRIES[codexIndex];
    $('[data-codex-detail]').innerHTML = discovered.has(c.id)
      ? `<h3>${c.title}</h3><small>${c.provenance === 'knight-hacks-canon' ? 'Knight Hacks canon' : 'Amulith original'} / ${LEVEL_LORE[c.level].name}</small><p>${c.text}</p>`
      : '<h3>Undiscovered</h3><p>Keep walking. The forest has not told you this yet.</p>';
  };
  const setCodex = (open: boolean) => { codexOpen = open; codexIndex = 0; codexEl.hidden = !open; panelEl.hidden = open; };

  const applySettings = () => {
    audio.setSettings(settings);
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

  let shrineSpokeAt = -10;
  const nearShrine = (position: { x: number; z: number }) => Math.hypot(position.x, position.z + 0.2) <= 3.2;

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
    events.on('interact', e => {
      if (session.paused || !nearShrine(e) || thinking || clock - shrineSpokeAt < 3) return;
      shrineSpokeAt = clock;
      $<HTMLImageElement>('[data-face]').src = art('amulith/calm.png');
      $('[data-source]').textContent = 'scripted shrine line';
      say(session.faction === 'bloom' ? 'Break my pieces, little Wanderer. See what wakes beneath the moss.' : 'Bring my pieces home. Let the roots keep what they have found.');
      audio.select();
    }),
    events.on('faction', e => { hud.hidden = !e.faction; }),
    events.on('level', e => showLevelIntro(e.id)),
    events.on('shard-resolved', e => { for (const entry of CODEX_ENTRIES) if (entry.discoverAt.some(d => d.kind === 'item' && d.id === e.id)) discover(entry.id); }),
    events.on('shards', list => { shardList = list; }),
    events.on('lantern', e => { lantern = e.value; }),
    events.on('run', e => {
      const was = run?.phase; run = e;
      if (e.phase === 'attract') { hud.hidden = true; ending.hidden = true; intro.classList.add('gone'); introHideAt = 0; introId = null; }
      if (e.phase === 'playing' && was === 'attract') showLevelIntro(session.levels.current.id);
      if (e.phase === 'ending' && was !== 'ending') showEnding(e);
    }),
  ];

  const menu = () => [
    { label: 'Resume', value: '', run: () => events.emit('pause', { paused: false }) },
    { label: 'Codex', value: `${CODEX_ENTRIES.filter(c => discovered.has(c.id)).length}/${CODEX_ENTRIES.length}`, run: () => setCodex(true) },
    { label: 'Reduced motion', value: settings.reducedMotion ? 'On' : 'Off', run: () => updateSettings({ reducedMotion: !settings.reducedMotion }) },
    { label: 'Subtitle size', value: settings.subtitleSize, run: () => updateSettings({ subtitleSize: settings.subtitleSize === 'S' ? 'M' : settings.subtitleSize === 'M' ? 'L' : 'S' }) },
    { label: 'Volume', value: `${Math.round(settings.volume * 100)}%`, run: () => updateSettings({ volume: settings.volume >= 1 ? 0 : Math.min(1, Math.round((settings.volume + 0.2) * 10) / 10) }) },
    { label: 'Mute', value: settings.muted ? 'On' : 'Off', run: () => updateSettings({ muted: !settings.muted }) },
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
    audio.frame(input.actions);
    $('[data-sound]').hidden = audio.status() !== 'suspended';
    $('[data-shrine-prompt]').hidden = session.paused || !session.faction || !nearShrine(player.position);
    root.classList.toggle('menu-open', session.paused && Boolean(session.faction));
    clock += dt; frames++; fpsClock += dt;
    if (fpsClock >= 1) { fps = frames / fpsClock; frames = 0; fpsClock = 0; }
    if (input.pressed('judge')) updateSettings({ judge: !settings.judge });
    const { step, stepX } = navY();
    // The title shows exactly while the run is in attract: fade out, then hide.
    const attract = !session.faction;
    if (attract) { title.hidden = false; title.classList.remove('gone'); titleOut = 0; }
    else if (!title.hidden) { title.classList.add('gone'); titleOut += dt; if (titleOut > 0.6 || settings.reducedMotion) title.hidden = true; }

    if (!session.faction) {
      // Title: choose with the stick, confirm with A. A shrine figure also starts the run.
      if (stepX) { const next = stepX < 0 ? 'bloom' : 'blight'; if (choice !== next) audio.select(); choice = next; }
      root.querySelectorAll('[data-choice]').forEach(el => el.classList.toggle('on', (el as HTMLElement).dataset.choice === choice));
      if (input.pressed('pulse')) { audio.select(); session.select(choice === 'bloom' ? 'sleepy' : 'angry'); }
    } else if (run?.phase === 'ending') {
      /* ending screen stays until the run resets to attract */
    } else if (session.paused) {
      if (pause.hidden) { pause.hidden = false; menuIndex = 0; setCodex(false); }
      $('[data-say]').textContent = shrine?.state === 'empty' ? 'Put him back.' : '';
      if (codexOpen) {
        if (step) { codexIndex = (codexIndex + step + CODEX_ENTRIES.length) % CODEX_ENTRIES.length; audio.select(); }
        if (input.pressed('dash') || input.pressed('pulse')) { audio.select(); setCodex(false); }
        drawCodex();
      } else {
        const items = menu();
        if (step) { menuIndex = (menuIndex + step + items.length) % items.length; audio.select(); }
        if (input.pressed('pulse')) { audio.select(); items[menuIndex].run(); }
        else if (input.pressed('dash')) events.emit('pause', { paused: false });
        drawMenu();
      }
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
      $('[data-hp]').style.width = `${((run?.hp ?? 1) * 100).toFixed(0)}%`;
      $('[data-lamp]').style.width = `${(lantern * 100).toFixed(0)}%`;
      const found = run?.shards ?? 0;
      const shardsHtml = [0, 1, 2].map(i => `<img src="${art('shard/shard.png')}" class="${i < found ? 'got' : ''}" alt="">`).join('') + `<span>${found}/3 shards</span>`;
      if ($('[data-shards]').dataset.n !== String(found)) { $('[data-shards]').innerHTML = shardsHtml; $('[data-shards]').dataset.n = String(found); }
      const near = shardList.find(sh => sh.visible && !sh.resolved && Math.hypot(sh.x - player.position.x, sh.z - player.position.z) <= 1.4);
      $('[data-hold]').hidden = !near || session.paused;
      if (near) {
        $('[data-hold-text]').textContent = session.faction === 'bloom' ? 'Hold to break the shard' : 'Hold to claim the shard';
        $('[data-hold-bar]').style.width = `${(near.progress / 1.5 * 100).toFixed(0)}%`;
      }
    }

    // Typed subtitles, then fade.
    if (typed < typeText.length) { typed = Math.min(typeText.length, typed + dt * 45); $('[data-line]').textContent = typeText.slice(0, Math.floor(typed)); }
    if (introHideAt && clock > introHideAt) { intro.classList.add('gone'); introHideAt = 0; }
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
        ['Audio', settings.muted ? 'muted' : audio.status()],
      ];
      $('[data-judge]').innerHTML = rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');
    }
  };

  return {
    frame,
    showLevelIntro,
    dispose() { offs.forEach(off => off()); window.removeEventListener('resize', fit); audio.dispose(); root.remove(); },
  };
}
