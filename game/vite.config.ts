import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

export default defineConfig({
  base: './',
  plugins: [{ name: 'amulith-offline', apply: 'build', closeBundle() {
    const out = fileURLToPath(new URL('./dist', import.meta.url));
    const walk = (path: string, prefix = ''): string[] => readdirSync(path, { withFileTypes: true }).flatMap(entry =>
      entry.isDirectory() ? walk(join(path, entry.name), `${prefix}${entry.name}/`) : [`${prefix}${entry.name}`]);
    const files = walk(out).filter(path => /\.(html|js|css|png|svg|json|webmanifest|ttf|wav)$/.test(path) && path !== 'sw.js');
    const hash = createHash('sha256'); for (const file of files.sort()) hash.update(file).update(readFileSync(join(out, file)));
    const version = hash.digest('hex').slice(0, 12);
    writeFileSync(join(out, 'sw.js'), `const PREFIX='amulith:'+new URL('.',self.location).pathname+':';
const CACHE=PREFIX+'${version}';const FILES=${JSON.stringify(files)};
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES.map(path=>new URL(path,self.location).href))).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
event.respondWith(caches.open(CACHE).then(async cache=>{const cached=await cache.match(event.request,{ignoreSearch:true});if(cached)return cached;try{return await fetch(event.request)}catch(error){if(event.request.mode==='navigate')return await cache.match(new URL('index.html',self.location).href);throw error;}}));});`);
  } }],
  resolve: {
    // Avoid native realpath failures in restricted Windows workspaces.
    preserveSymlinks: true,
    alias: { '@protocol': fileURLToPath(new URL('../protocol', import.meta.url)) },
  },
});
