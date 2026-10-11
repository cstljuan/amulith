import * as THREE from 'three';
import { pixelTexture } from './pixelArt';

export interface SheetMeta { frameWidth: number; frameHeight: number; columns: number; fps: number; animations: Record<string, number[]> }

// A pixel sprite on a camera-facing card with feet at its origin. Every motion is a drawn frame:
// eight-direction walks and idles (west mirrors east), one-shot action poses, hit flash,
// and a contact shadow.
export class SpriteActor {
  readonly root = new THREE.Group();
  private card: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshLambertMaterial>;
  private shadow: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
  private meta: SheetMeta;
  private texture: THREE.Texture;
  private animation = '';
  private clock = 0;
  private facing = 1;
  private direction: 's' | 'se' | 'e' | 'ne' | 'n' = 's';
  private action = '';
  private actionLeft = 0;
  private hit = 0;
  reducedMotion = false;

  constructor(texture: THREE.Texture, meta: SheetMeta, height = 2.2, sheetPath?: string) {
    this.texture = texture; this.meta = meta;
    texture.repeat.set(1 / meta.columns, meta.frameHeight / (texture.image as { height: number }).height);
    const width = height * meta.frameWidth / meta.frameHeight;
    this.card = new THREE.Mesh(new THREE.PlaneGeometry(width, height).translate(0, height / 2, 0), new THREE.MeshLambertMaterial({ map: texture, alphaTest: 0.5, side: THREE.DoubleSide }));
    this.shadow = new THREE.Mesh(new THREE.CircleGeometry(width * 0.32, 20), new THREE.MeshBasicMaterial({ color: 0x120c18, transparent: true, opacity: 0.38, depthWrite: false }));
    this.shadow.rotation.x = -Math.PI / 2; this.shadow.position.y = 0.04; this.shadow.scale.y = 0.55;
    this.root.add(this.shadow, this.card);
    if (sheetPath) this.loadSheet(sheetPath);
  }

  // Loads public/art/<path>.json and <path>.png (for example an AutoSprite export). Missing files keep the stand-in.
  async loadSheet(path: string) {
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}art/${path}.json`);
      if (!res.ok) return;
      const meta = await res.json() as SheetMeta;
      const image = new Image();
      image.onload = () => {
        this.meta = meta; this.texture.image = image;
        this.texture.minFilter = THREE.LinearMipmapLinearFilter; this.texture.magFilter = THREE.LinearFilter; this.texture.needsUpdate = true;
        this.texture.repeat.set(meta.frameWidth / image.width, meta.frameHeight / image.height);
        const h = (this.card.geometry.parameters.height), w = h * meta.frameWidth / meta.frameHeight;
        this.card.geometry.dispose(); this.card.geometry = new THREE.PlaneGeometry(w, h).translate(0, h / 2, 0);
      };
      image.src = `${import.meta.env.BASE_URL}art/${path}.png`;
    } catch { /* stand-in stays */ }
  }

  setOpacity(value: number): void { const m = this.card.material; m.transparent = value < 1; m.opacity = value; this.shadow.material.opacity = 0.38 * value; }

  // One-shot pose (pulse, ask, hurt, dash) held for `seconds`, then back to idle or walk.
  act(name: string, seconds: number): void { if (this.meta.animations[name]) { this.action = name; this.actionLeft = seconds; } }
  hurt(): void { this.hit = 1; this.act('hurt', 0.45); }

  // dx, dz: this frame's movement in world units. +z walks toward the camera (front).
  update(dt: number, dx: number, dz: number): void {
    this.clock += dt;
    const moving = Math.hypot(dx, dz) > 0.0005;
    if (moving) {
      // Eight directions from the motion angle (+z is toward the camera, south). West-facing views
      // mirror their east-facing frames.
      const octant = (Math.round(Math.atan2(dz, dx) / (Math.PI / 4)) + 8) % 8;
      const map = [['e', 1], ['se', 1], ['s', 1], ['se', -1], ['e', -1], ['ne', -1], ['n', 1], ['ne', 1]] as const;
      this.direction = map[octant][0]; this.facing = map[octant][1];
    }
    this.actionLeft -= dt;
    const base = (moving ? 'walk' : 'idle');
    const name = this.actionLeft > 0 && this.action ? this.action : this.pick(base);
    if (name !== this.animation) { this.animation = name; this.clock = 0; }
    const frames = this.meta.animations[name];
    const frame = frames[Math.floor(this.clock * this.meta.fps) % frames.length];
    const img = this.texture.image as { width: number; height: number };
    const col = frame % this.meta.columns, row = Math.floor(frame / this.meta.columns);
    this.texture.offset.set(col * this.meta.frameWidth / img.width, 1 - (row + 1) * this.meta.frameHeight / img.height);
    const mirror = this.facing;
    this.card.scale.set(mirror, 1, 1);
    this.hit = Math.max(0, this.hit - dt * 2.5);
    this.card.material.emissive.setRGB(this.hit * 0.8, this.hit * 0.1, this.hit * 0.1);
  }

  private pick(base: string): string {
    const a = this.meta.animations;
    // Older sheets only have front/back/side; enemies only have side.
    const legacy = { s: 'front', se: 'front', e: 'side', ne: 'back', n: 'back' }[this.direction];
    return [`${base}_${this.direction}`, `${base}_${legacy}`, `${base}_side`, base, 'idle_side'].find(n => a[n]) ?? Object.keys(a)[0];
  }

  dispose(): void { this.card.geometry.dispose(); this.card.material.dispose(); this.shadow.geometry.dispose(); this.shadow.material.dispose(); this.texture.dispose(); }
}

// Stand-in Wanderer: a hooded traveler with a lantern, 24 x 32 frames, 2 idle + 4 walk, facing right.
export function wandererStandIn(): { texture: THREE.Texture; meta: SheetMeta } {
  const F = { w: 24, h: 32 };
  const texture = pixelTexture(F.w * 6, F.h, ctx => {
    const p = (c: string, x: number, y: number, w = 1, h = 1) => { ctx.fillStyle = c; ctx.fillRect(x, y, w, h); };
    const draw = (ox: number, legA: number, legB: number, breathe: number) => {
      const o = (x: number) => ox + x;
      // legs
      p('#2a1d14', o(9), 26 + legA, 3, 6 - legA); p('#2a1d14', o(13), 26 + legB, 3, 6 - legB);
      // cloak
      p('#1e1813', o(6), 12 + breathe, 13, 15 - breathe);
      p('#8a6a46', o(7), 13 + breathe, 11, 13 - breathe); p('#a5825a', o(8), 13 + breathe, 4, 12 - breathe); p('#6e5236', o(15), 14 + breathe, 3, 12 - breathe);
      p('#e9ddb8', o(7), 24, 11, 2);
      // hood and face
      p('#1e1813', o(6), 2 + breathe, 13, 12); p('#6e5236', o(7), 3 + breathe, 11, 10); p('#8a6a46', o(8), 3 + breathe, 6, 3);
      p('#f1d3a8', o(11), 7 + breathe, 6, 5); p('#1e1813', o(15), 8 + breathe, 1, 2); p('#d9b48a', o(11), 11 + breathe, 6, 1);
      // lantern
      p('#3b2a1e', o(19), 15 + breathe, 1, 3); p('#1e1813', o(18), 18 + breathe, 4, 5); p('#ffd36b', o(19), 19 + breathe, 2, 3); p('#fff1c0', o(19), 20 + breathe, 1, 1);
    };
    draw(0, 0, 0, 0); draw(F.w, 0, 0, 1);
    draw(F.w * 2, 0, 2, 0); draw(F.w * 3, 1, 1, 1); draw(F.w * 4, 2, 0, 0); draw(F.w * 5, 1, 1, 1);
  }, 5);
  return { texture, meta: { frameWidth: F.w, frameHeight: F.h, columns: 6, fps: 8, animations: { idle_side: [0, 1], walk_side: [2, 3, 4, 5] } } };
}
