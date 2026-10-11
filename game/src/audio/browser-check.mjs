// Opt-in integration check against the running dev game, using an existing Playwright installation.
// AMULITH_PLAYWRIGHT_MODULE=/path/to/playwright node src/audio/browser-check.mjs
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mkdir } from 'node:fs/promises';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.AMULITH_PLAYWRIGHT_MODULE || 'playwright');
const url = process.env.AMULITH_TEST_URL || 'http://127.0.0.1:5174/?judge=1&render=240&post=0';
const output = process.env.AMULITH_TEST_OUTPUT || '/tmp/amulith-audio-verification';
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
try {
  const page = await browser.newPage({ viewport: { width: 960, height: 640 } });
  page.setDefaultTimeout(15000);
  const errors = [], external = [], missing = [];
  page.on('pageerror', error => { errors.push(error.message); console.error('Browser error:', error.message); });
  page.on('request', request => {
    if (/^https?:/.test(request.url()) && new URL(request.url()).origin !== new URL(url).origin) external.push(request.url());
  });
  page.on('response', response => { if (response.status() >= 400 && /\/audio\//.test(response.url())) missing.push(response.url()); });
  await page.addInitScript(() => {
    const probe = window.__audioProbe = { contexts: [], gains: [], starts: [], voices: [], pad: null };
    const Context = window.AudioContext;
    window.AudioContext = class extends Context {
      constructor(...args) {
        super(...args); probe.contexts.push(this);
        const createGain = this.createGain.bind(this), createSource = this.createBufferSource.bind(this);
        this.createGain = () => {
          const gain = createGain(), ramp = gain.gain.setTargetAtTime.bind(gain.gain);
          gain.targets = [];
          gain.gain.setTargetAtTime = (value, ...rest) => { gain.targets.push(value); return ramp(value, ...rest); };
          probe.gains.push(gain); return gain;
        };
        this.createBufferSource = () => {
          const source = createSource(), start = source.start.bind(source);
          source.start = (...rest) => { probe.starts.push({ loop: source.loop, duration: source.buffer?.duration }); return start(...rest); };
          return source;
        };
      }
    };
    const Audio = window.Audio;
    window.Audio = class extends Audio { constructor(...args) { super(...args); probe.voices.push(this); } };
    Object.defineProperty(navigator, 'getGamepads', { value: () => probe.pad ? [probe.pad] : [] });
  });
  console.log('Loading dev game');
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => Boolean(window.__amulith));
  console.log('Game ready');
  await page.waitForTimeout(1000);
  assert.equal(await page.evaluate(() => window.__audioProbe.contexts.length), 0, 'No AudioContext before input');
  assert.equal(await page.evaluate(() => window.__audioProbe.starts.length), 0, 'No music before input');
  await page.screenshot({ path: `${output}/title.png` });
  console.log('Silent title verified');
  // Standard-controller fixture. Chromium may require a pointer gesture to permit audible output.
  await page.evaluate(() => {
    window.__audioProbe.pad = { connected: true, mapping: 'standard', axes: [0, 0, 0, 0], buttons: Array.from({ length: 17 }, (_, i) => ({ pressed: i === 0, value: i === 0 ? 1 : 0 })) };
  });
  await page.waitForFunction(() => window.__amulith.session.faction === 'bloom');
  await page.evaluate(() => { window.__audioProbe.pad.buttons[0] = { pressed: false, value: 0 }; });
  if (await page.locator('[data-sound]').isVisible()) await page.locator('[data-sound]').click();
  else await page.keyboard.press('KeyW');
  await page.waitForFunction(() => window.__audioProbe.starts.filter(source => source.loop).length === 2);
  console.log('Local loops playing');
  assert.equal(await page.evaluate(() => window.__audioProbe.contexts[0].state), 'running');
  const before = await page.evaluate(() => window.__audioProbe.starts.length);
  await page.evaluate(() => {
    const bus = window.__amulith.events;
    bus.emit('pulse-applied', { x: 0, z: 0, faction: 'bloom' });
    for (const kind of ['shard_found', 'shard_resolved', 'player_hurt', 'faction_flip']) bus.emit('game-event', { type: 'event', kind, data: {} });
  });
  assert.equal(await page.evaluate(() => window.__audioProbe.starts.length), before + 5, 'Five gameplay cues start');
  await page.evaluate(() => window.__amulith.session.select('angry'));
  assert.deepEqual(await page.evaluate(() => window.__audioProbe.gains.slice(3).map(g => g.targets.at(-1))), [0, 1], 'Faction crossfade targets Blight');
  await page.waitForTimeout(1200);
  await page.evaluate(() => window.__amulith.events.emit('speech', { type: 'speech', id: 'audio-check', url: '/audio/shard-resolved.wav', duration_ms: 1360, engine: 'cached' }));
  await page.waitForFunction(() => window.__audioProbe.gains[1].targets.at(-1) === 0.055);
  await page.waitForFunction(() => window.__audioProbe.voices[0].ended);
  console.log('Speech playback completed');
  assert.equal(await page.evaluate(() => window.__audioProbe.gains[1].targets.at(-1)), 0.3, 'Music recovers after speech');
  await page.evaluate(() => window.__amulith.events.emit('speech', { type: 'speech', id: 'bad-audio', url: '/missing-voice.wav', duration_ms: 1000, engine: 'cached' }));
  await page.waitForTimeout(500);
  assert.equal(await page.evaluate(() => window.__audioProbe.gains[1].targets.at(-1)), 0.3, 'Failed speech does not leave music ducked');
  await page.evaluate(() => window.__amulith.player.position.set(0, 0, 2));
  await page.waitForFunction(() => !document.querySelector('[data-shrine-prompt]').hidden);
  await page.keyboard.press('KeyF');
  await page.waitForFunction(() => document.querySelector('[data-source]').textContent === 'scripted shrine line');
  await page.waitForFunction(() => document.querySelector('[data-line]').textContent.endsWith('found.'));
  assert.match(await page.locator('[data-line]').innerText(), /^Bring/);
  await page.evaluate(() => window.__amulith.player.position.set(12, 0, 2));
  await page.waitForFunction(() => document.querySelector('[data-shrine-prompt]').hidden);
  const shrineLine = await page.locator('[data-line]').innerText();
  await page.waitForTimeout(3000);
  await page.keyboard.press('KeyF');
  assert.equal(await page.locator('[data-source]').innerText(), 'scripted shrine line', 'Far interaction does not request an LLM line');
  assert.equal(await page.locator('[data-line]').innerText(), shrineLine, 'Far interaction does not replace the text');
  const dashFrame = await page.evaluate(() => new Promise(resolve => {
    const { events, player } = window.__amulith;
    events.emit('dash', { x: player.position.x, z: player.position.z });
    requestAnimationFrame(() => {
      const root = player.visual.children.find(child => child.isGroup);
      const card = root.children.find(child => child.material?.map);
      resolve({ x: card.material.map.offset.x, y: card.material.map.offset.y });
    });
  }));
  assert.equal(dashFrame.x, 0.6, 'Dash event selects frame 16 in the approved sheet');
  assert.equal(dashFrame.y, 0);
  console.log('Shrine interaction and dash pose verified');
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => !document.querySelector('.pause').hidden);
  assert.match(await page.locator('[data-menu]').innerText(), /Volume\s+60%/);
  assert.match(await page.locator('[data-menu]').innerText(), /Mute\s+Off/);
  // Navigate the actual pause menu with keyboard inputs, including mute and volume persistence.
  const nextMenuRow = async () => {
    const before = await page.locator('[data-menu] li.on span').innerText();
    await page.keyboard.down('ArrowDown');
    await page.waitForFunction(label => document.querySelector('[data-menu] li.on span').textContent !== label, before);
    await page.keyboard.up('ArrowDown');
    await page.waitForFunction(() => window.__amulith.input.actions.move.y === 0);
  };
  for (let i = 0; i < 3; i++) await nextMenuRow();
  console.log('Selected menu row:', await page.locator('[data-menu] li.on').innerText());
  await page.keyboard.press('Space');
  await page.waitForFunction(() => JSON.parse(localStorage.getItem('amulith.settings'))?.volume === 0.8);
  await nextMenuRow(); await page.keyboard.press('Space');
  await page.waitForFunction(() => JSON.parse(localStorage.getItem('amulith.settings'))?.muted);
  assert.equal(await page.evaluate(() => window.__audioProbe.gains[0].targets.at(-1)), 0, 'Mute applies to the master');
  assert.equal(await page.evaluate(() => window.__audioProbe.voices[0].volume), 0, 'Mute applies to speech');
  await page.screenshot({ path: `${output}/pause-muted.png` });
  await page.keyboard.press('Space');
  await page.waitForFunction(() => !JSON.parse(localStorage.getItem('amulith.settings')).muted);
  assert.equal(await page.evaluate(() => window.__audioProbe.gains[0].targets.at(-1)), 0.8);
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => !window.__amulith.session.paused);
  await page.evaluate(() => {
    const { session } = window.__amulith;
    session.run.resolve('s1', 'hollow'); session.run.resolve('s3', 'glade'); session.run.resolve('s5', 'rootdeep');
  });
  await page.waitForFunction(() => !document.querySelector('.ending').hidden);
  await page.screenshot({ path: `${output}/ending.png` });
  await page.reload();
  await page.waitForFunction(() => Boolean(window.__amulith));
  assert.equal(await page.evaluate(() => window.__audioProbe.contexts.length), 0, 'Reload stays silent until input');
  assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('amulith.settings')).volume), 0.8);
  assert.deepEqual(missing, [], 'Bundled audio has no missing files');
  assert.deepEqual(external, [], 'No external HTTP assets');
  assert.deepEqual(errors, [], 'No browser exceptions');
  if (process.env.AMULITH_PRODUCTION_URL) {
    await page.close();
    const productionUrl = process.env.AMULITH_PRODUCTION_URL;
    const clean = await browser.newContext({ viewport: { width: 960, height: 640 } });
    const production = await clean.newPage();
    production.setDefaultTimeout(30000);
    const attempts = [], productionErrors = [];
    production.on('pageerror', error => { productionErrors.push(error.message); console.error('Production error:', error.message); });
    await production.route('**/*', route => {
      const requestUrl = route.request().url();
      if (/^https?:/.test(requestUrl) && new URL(requestUrl).origin !== new URL(productionUrl).origin) {
        attempts.push(requestUrl); return route.abort();
      }
      return route.continue();
    });
    await production.routeWebSocket('**/*', socket => socket.close());
    await production.addInitScript(() => {
      const Context = window.AudioContext;
      const probe = window.__productionAudio = { contexts: 0, loops: 0 };
      window.AudioContext = class extends Context {
        constructor(...args) {
          super(...args); probe.contexts++;
          const create = this.createBufferSource.bind(this);
          this.createBufferSource = () => {
            const source = create(), start = source.start.bind(source);
            source.start = (...args) => { if (source.loop) probe.loops++; return start(...args); };
            return source;
          };
        }
      };
    });
    console.log('Loading fresh production game');
    await production.goto(productionUrl, { waitUntil: 'domcontentloaded' });
    await production.waitForFunction(() => Boolean(document.querySelector('[data-faction]')));
    assert.equal(await production.evaluate(() => window.__productionAudio.contexts), 0, 'Production attract is silent');
    await production.keyboard.press('1');
    await production.waitForFunction(() => window.__productionAudio.loops === 2);
    await production.waitForFunction(() => document.querySelector('[data-faction]').textContent.includes('Bloom'));
    await production.screenshot({ path: `${output}/production-offline.png` });
    assert.deepEqual(attempts, [], 'Fresh production game needs no external HTTP assets');
    assert.deepEqual(productionErrors, [], 'Production game has no browser exceptions');
    await clean.close();
    console.log('Fresh production audio verified with external HTTP and WebSockets blocked');
  }
  console.log(JSON.stringify({ ok: true, verified: ['silent attract', 'controller fixture start', 'two local loops', 'gameplay effects', 'faction crossfade', 'speech duck/recovery/error', 'shrine interaction', 'dash pose', 'pause volume and mute', 'settings persistence', 'ending fixture', 'no external HTTP assets', 'no browser exceptions'], output }, null, 2));
} finally { await browser.close(); }
