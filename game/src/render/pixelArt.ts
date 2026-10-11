import * as THREE from 'three';

// Procedural pixel art stand-ins. Each one is replaced by a PNG in public/art when it exists,
// so generated art drops in without code changes.

export function rng(seed: number) {
  let s = seed >>> 0;
  return () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

export function pixelTexture(width: number, height: number, paint: (ctx: CanvasRenderingContext2D, r: () => number) => void, seed = 1, repeat = false): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = width; canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  ctx.imageSmoothingEnabled = false;
  paint(ctx, rng(seed));
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestMipmapLinearFilter;
  if (repeat) texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// Swap a stand-in for public/art/<path> if that file exists. Missing files keep the stand-in.
// Art is mipmapped for distance; tiles mirror-repeat to hide seams.
export function upgradeFromArt(texture: THREE.Texture, path: string, onLoad?: () => void): void {
  const image = new Image();
  image.onload = () => {
    texture.image = image;
    // Pixel art cards keep hard pixels up close; repeating ground tiles stay smooth.
    texture.minFilter = THREE.LinearMipmapLinearFilter; texture.magFilter = texture.wrapS === THREE.RepeatWrapping ? THREE.LinearFilter : THREE.NearestFilter;
    if (texture.wrapS === THREE.RepeatWrapping) texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.needsUpdate = true; onLoad?.();
  };
  image.src = `${import.meta.env.BASE_URL}art/${path}`;
}

const px = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, w = 1, h = 1) => { ctx.fillStyle = color; ctx.fillRect(x, y, w, h); };

export const grassTile = () => pixelTexture(32, 32, (ctx, r) => {
  px(ctx, '#4f8f3e', 0, 0, 32, 32);
  for (let i = 0; i < 70; i++) { const x = Math.floor(r() * 32), y = Math.floor(r() * 32); px(ctx, r() < 0.5 ? '#3f7a35' : '#62a44a', x, y, 1, 2); }
  for (let i = 0; i < 26; i++) { const x = Math.floor(r() * 32), y = Math.floor(r() * 32); px(ctx, '#8cc45a', x, y, 1, 1); px(ctx, '#3a6e31', x, y + 1, 1, 1); }
}, 11, true);

export const soilTile = () => pixelTexture(32, 32, (ctx, r) => {
  px(ctx, '#33203f', 0, 0, 32, 32);
  for (let i = 0; i < 60; i++) { const x = Math.floor(r() * 32), y = Math.floor(r() * 32); px(ctx, r() < 0.5 ? '#2a1835' : '#40295a', x, y, 2, 1); }
  for (let i = 0; i < 12; i++) { const x = Math.floor(r() * 32), y = Math.floor(r() * 32); px(ctx, '#4b3466', x, y, 1, 1); }
}, 12, true);

// Veins: R = vein coverage, G = distance along the branch (0 at the root) so the shader can make veins creep.
export const veinTile = () => {
  const N = 512;
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = N;
  const ctx = canvas.getContext('2d')!; ctx.fillStyle = '#000'; ctx.fillRect(0, 0, N, N);
  const r = rng(13);
  const branch = (x: number, y: number, angle: number, len: number, start: number, width: number) => {
    for (let i = 0; i < len; i++) {
      angle += (r() - 0.5) * 0.45; x += Math.cos(angle); y += Math.sin(angle);
      const d = Math.min(255, Math.round((start + i / 300) * 255));
      ctx.fillStyle = `rgb(255,${d},0)`;
      ctx.fillRect(((Math.round(x) % N) + N) % N, ((Math.round(y) % N) + N) % N, width, width);
      if (r() < 0.018 && len > 12) branch(x, y, angle + (r() < 0.5 ? 0.8 : -0.8), Math.floor(len * 0.45), start + i / 300, 1);
    }
  };
  for (let k = 0; k < 3; k++) branch(r() * N, r() * N, r() * Math.PI * 2, 260, 0, 2);
  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter; texture.minFilter = THREE.LinearFilter; texture.generateMipmaps = false;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return texture;
};

export const stoneTile = () => pixelTexture(16, 16, (ctx, r) => {
  px(ctx, '#77767c', 0, 0, 16, 16);
  for (let y = 0; y < 16; y += 4) { px(ctx, '#55545c', 0, y, 16, 1); for (let x = (y / 4) % 2 ? 2 : 6; x < 16; x += 8) px(ctx, '#55545c', x, y, 1, 4); }
  for (let i = 0; i < 18; i++) px(ctx, r() < 0.5 ? '#8c8b92' : '#66656c', Math.floor(r() * 16), Math.floor(r() * 16));
}, 14, true);

export const grassEdgeTile = () => pixelTexture(16, 16, (ctx, r) => {
  px(ctx, '#6a4b33', 0, 0, 16, 16);
  for (let i = 0; i < 20; i++) px(ctx, r() < 0.5 ? '#5a3e2a' : '#7c5a3d', Math.floor(r() * 16), 4 + Math.floor(r() * 12));
  px(ctx, '#4f8f3e', 0, 0, 16, 4);
  for (let x = 0; x < 16; x++) { const h = 3 + Math.floor(r() * 4); px(ctx, '#4f8f3e', x, 0, 1, h); px(ctx, '#3a6e31', x, h, 1, 1); }
  for (let i = 0; i < 5; i++) px(ctx, '#8cc45a', Math.floor(r() * 16), 0);
}, 15, true);

export const waterTile = () => pixelTexture(32, 32, (ctx, r) => {
  px(ctx, '#1d4b5c', 0, 0, 32, 32);
  for (let i = 0; i < 22; i++) { const x = Math.floor(r() * 30), y = Math.floor(r() * 32); px(ctx, '#2c6a7b', x, y, 3, 1); }
  for (let i = 0; i < 8; i++) { const x = Math.floor(r() * 30), y = Math.floor(r() * 32); px(ctx, '#8fd0d6', x, y, 2, 1); }
}, 16, true);

// Round-crowned tree, 48 x 64. Origin is the trunk base at the bottom center.
export const treeSprite = (seed: number, leaf = ['#2f5e34', '#3f7a3a', '#5a9a45', '#8cc45a']) => pixelTexture(48, 64, (ctx, r) => {
  px(ctx, '#3b2a1e', 21, 40, 6, 24); px(ctx, '#5a3e2a', 22, 40, 2, 24); px(ctx, '#2a1d14', 18, 60, 12, 4);
  const blob = (cx: number, cy: number, rad: number) => {
    for (let y = -rad; y <= rad; y++) for (let x = -rad; x <= rad; x++) {
      const d = Math.hypot(x, y * 1.1) + r() * 1.6;
      if (d > rad) continue;
      const light = (-x - y) / rad + r() * 0.6;
      px(ctx, d > rad - 1.5 ? leaf[0] : light > 0.9 ? leaf[3] : light > 0.1 ? leaf[2] : leaf[1], cx + x, cy + y);
    }
  };
  blob(24, 26, 16); blob(14, 32, 10); blob(34, 31, 10); blob(24, 14, 11);
}, seed);

export const mushroomSprite = (seed: number) => pixelTexture(32, 32, (ctx, r) => {
  px(ctx, '#e9ddb8', 13, 16, 6, 16); px(ctx, '#c9b98f', 17, 16, 2, 16);
  for (let y = 0; y < 14; y++) for (let x = -14; x <= 14; x++) {
    if (Math.hypot(x, (y - 14) * 1.25) > 15) continue;
    px(ctx, y < 2 ? '#8e3b2c' : r() < 0.08 ? '#f6e6c8' : x < -4 ? '#d4683f' : '#b8502f', 16 + x, 4 + y);
  }
  px(ctx, '#6e2e22', 2, 17, 28, 1);
}, seed);

export const flowerSprite = () => pixelTexture(8, 10, ctx => {
  px(ctx, '#3f7a35', 3, 4, 1, 6); px(ctx, '#3f7a35', 4, 7, 2, 1);
  px(ctx, '#ffffff', 2, 1, 4, 3); px(ctx, '#ffffff', 3, 0, 2, 5); px(ctx, '#e0ae3a', 3, 2, 2, 1);
}, 17);

export const thornSprite = () => pixelTexture(8, 10, ctx => {
  px(ctx, '#1d1229', 3, 2, 2, 8); px(ctx, '#1d1229', 1, 4, 2, 1); px(ctx, '#1d1229', 5, 6, 2, 1); px(ctx, '#1d1229', 4, 0, 1, 2);
  px(ctx, '#c7dc45', 4, 3, 1, 1); px(ctx, '#c7dc45', 1, 3, 1, 1);
}, 18);

export const shrineDisc = () => pixelTexture(96, 96, (ctx, r) => {
  const c = 48;
  for (let y = 0; y < 96; y++) for (let x = 0; x < 96; x++) {
    const d = Math.hypot(x - c + 0.5, y - c + 0.5);
    if (d > 46) continue;
    const ring = d > 44 || Math.abs(d - 32) < 1 || Math.abs(d - 18) < 1 || Math.abs(d - 7) < 1;
    const a = Math.atan2(y - c, x - c);
    const seam = Math.abs(Math.sin(a * (d > 32 ? 12 : d > 18 ? 8 : 4))) < 0.06 && d > 7;
    px(ctx, ring || seam ? '#4f5058' : r() < 0.1 ? '#93929a' : r() < 0.2 ? '#6b6a72' : '#7e7d85', x, y);
  }
  for (let i = 0; i < 40; i++) { const a = r() * Math.PI * 2, d = 20 + r() * 26; px(ctx, '#4f8f3e', Math.round(c + Math.cos(a) * d), Math.round(c + Math.sin(a) * d), 2, 1); }
}, 19);

export const pillarSprite = () => pixelTexture(16, 24, (ctx, r) => {
  px(ctx, '#55545c', 3, 3, 10, 21); px(ctx, '#7e7d85', 4, 3, 5, 21); px(ctx, '#66656c', 9, 3, 3, 21);
  for (let i = 0; i < 10; i++) px(ctx, '#4f8f3e', 3 + Math.floor(r() * 10), 2 + Math.floor(r() * 3));
  px(ctx, '#4f5058', 6, 10, 3, 1); px(ctx, '#4f5058', 7, 9, 1, 4);
}, 32);

export const gemSprite = () => pixelTexture(16, 24, ctx => {
  px(ctx, '#2a1838', 5, 2, 6, 20); px(ctx, '#4e2f66', 6, 3, 4, 18); px(ctx, '#8c6aa8', 6, 4, 2, 10);
  px(ctx, '#2a1838', 3, 14, 3, 8); px(ctx, '#2a1838', 11, 12, 3, 10);
  px(ctx, '#f6e6ff', 7, 10, 3, 2); px(ctx, '#c7dc45', 8, 10, 1, 2);
}, 33);

export const bushSprite = () => pixelTexture(24, 18, (ctx, r) => {
  for (let y = 0; y < 18; y++) for (let x = 0; x < 24; x++) if (Math.hypot((x - 12) / 12, (y - 11) / 8) < 1 - r() * 0.12) px(ctx, y < 8 ? '#5a9a45' : '#3f7a3a', x, y);
  for (let i = 0; i < 9; i++) px(ctx, ['#eba3b8', '#fbf6ea', '#e0ae3a'][i % 3], 4 + Math.floor(r() * 16), 5 + Math.floor(r() * 9));
}, 34);

export const blightShroomSprite = () => pixelTexture(24, 24, (ctx, r) => {
  px(ctx, '#3a2a4a', 10, 12, 4, 12);
  for (let y = 0; y < 10; y++) for (let x = -10; x <= 10; x++) if (Math.hypot(x, (y - 10) * 1.2) < 11) px(ctx, y > 7 ? '#c7dc45' : r() < 0.1 ? '#8c6aa8' : '#4e3866', 12 + x, 3 + y);
}, 35);
