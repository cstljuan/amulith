// Browser integration fixtures use the existing dev-only surface. Production has no test hooks.
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mkdir, writeFile } from 'node:fs/promises';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.AMULITH_PLAYWRIGHT_MODULE || '../../game/node_modules/playwright');
const output = process.env.AMULITH_TEST_OUTPUT || '/tmp/amulith-portable-review';
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const report = [];
try {
  for (const faction of ['bloom', 'blight']) {
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    await context.route('**/*', route => /^https?:\/\/127\.0\.0\.1:/.test(route.request().url()) ? route.continue() : route.abort());
    const page = await context.newPage(); const errors = [], missing = [], sockets = [];
    page.on('pageerror', e => errors.push(e.message)); page.on('response', r => { if (r.status() >= 400) missing.push(r.url()); }); page.on('websocket', socket => sockets.push(socket.url()));
    page.setDefaultTimeout(60000);
    await page.goto('http://127.0.0.1:5174/?render=640&post=0', { waitUntil: 'networkidle' });
    await page.waitForFunction(() => !!window.__amulith);
    if (faction === 'bloom') await page.screenshot({ path: `${output}/title.png` });
    await page.click(`[data-choice="${faction}"]`);
    await page.waitForFunction(f => window.__amulith.session.faction === f, faction);
    await page.keyboard.press('KeyE');
    await page.waitForFunction(() => document.querySelector('[data-source]').textContent === 'scripted line' && document.querySelector('[data-line]').textContent.length > 15);
    assert.equal(await page.evaluate(() => window.__amulith.session.asksUsed), 1);
    await page.keyboard.press('KeyF');
    await page.waitForFunction(() => !document.querySelector('.story-panel').hidden);
    assert.equal(await page.evaluate(() => window.__amulith.session.paused), true);
    await page.screenshot({ path: `${output}/conversation-${faction}.png` });
    for (let i=0;i<14;i++) await page.click('[data-story-next]');
    assert.equal(await page.locator('[data-story-options] button').count(), 2);
    await page.locator('[data-story-options] button').nth(faction === 'bloom' ? 0 : 1).click();
    for (let i=0;i<6;i++) await page.click('[data-story-next]');
    await page.waitForFunction(() => document.querySelector('.story-panel').hidden && !window.__amulith.session.paused);
    await page.keyboard.press('Escape');
    await page.getByRole('button', {name:'Chronicle Conversations'}).click();
    assert((await page.locator('[data-story-journal] p').count()) >= 20);
    await page.click('[data-story-close]');
    await page.getByRole('button', {name:'Resume',exact:true}).click();
    for (const level of ['grove','hollow','deepwood']) {
      await page.waitForFunction(id => window.__amulith.session.levels.current.id === id && !window.__amulith.session.paused, level);
      await page.evaluate(() => { const g=window.__amulith;const shard=g.session.shards.nearest(g.player.position);Object.assign(g.player.position,{x:shard.x,z:shard.z}); });
      await page.keyboard.down('Space');
      await page.waitForFunction(id => window.__amulith.session.levels.current.shards.some(candidate => window.__amulith.session.shards.sites.find(s => s.id === candidate.id)?.resolved), level);
      await page.keyboard.up('Space');
      await page.evaluate(() => Object.assign(window.__amulith.player.position,window.__amulith.session.levels.current.exit));
    }
    await page.waitForFunction(() => window.__amulith.session.run.result === 'win');
    await page.waitForFunction(() => !document.querySelector('.story-panel').hidden);
    assert.equal(await page.evaluate(() => window.__amulith.session.run.shards),3);
    for(let i=0;i<16;i++)await page.click('[data-story-next]');
    await page.screenshot({path:`${output}/ending-${faction}.png`});
    await page.click('[data-replay]');
    await page.waitForFunction(() => window.__amulith.session.run.phase === 'attract' && !document.querySelector('.title').hidden);
    assert.equal(await page.evaluate(() => window.__amulith.session.asksUsed),0);
    assert.deepEqual(errors,[]);assert.deepEqual(missing,[]);
    // Vite's local hot-reload socket belongs to the dev server. Hardware sockets use /ws.
    assert.deepEqual(sockets.filter(url=>new URL(url).pathname==='/ws'),[]);
    report.push({test:`${faction}: choice, immediate ask, conversation branch, persistent chronicle, three real shard holds and exits, ending, replay`,result:'pass',fixture:'Controlled positions; real game loop, input and shard hold. Not a human playtime measurement.'});
    await context.close();
  }
  const context=await browser.newContext({viewport:{width:1280,height:800}});const page=await context.newPage();const errors=[],missing=[],sockets=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)missing.push(r.url())});page.on('websocket',s=>sockets.push(s.url()));
  await context.route('**/*',route=>/^https?:\/\/127\.0\.0\.1:/.test(route.request().url())?route.continue():route.abort());
  await page.goto('http://127.0.0.1:5175/?render=640&post=0');
  await page.waitForFunction(()=>document.querySelector('.offline-status')?.textContent==='Offline play ready');
  await page.waitForFunction(()=>!!navigator.serviceWorker.controller);
  await context.setOffline(true);
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForSelector('[data-choice="blight"]');
  await page.click('[data-choice="blight"]');await page.keyboard.press('KeyE');
  await page.waitForFunction(()=>document.querySelector('[data-line]').textContent.length>10);
  await page.keyboard.press('KeyF');await page.waitForSelector('.story-panel:not([hidden])');
  await page.screenshot({path:`output/offline.png`.replace('output',output)});
  assert.deepEqual(errors,[]);assert.deepEqual(missing,[]);assert.deepEqual(sockets,[]);
  report.push({test:'Fresh production cache, no external network or sockets, service-worker install, offline reload, faction start, ask and conversation',result:'pass'});
  await context.close();
  await writeFile(`${output}/verification.json`,JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
} finally { await browser.close(); }
