import * as THREE from 'three';
import type { Faction } from '@protocol/messages';

// Every pulse picks a new shape: a petal burst, a star or a root splash, rotated at random.
// `reach(angle)` is the outline in world units; spikes are the extra lobes that convert land.
export interface PulseShape { reach: (angle: number) => number; spikes: { angle: number; length: number }[] }

export function randomShape(base = 3, random = Math.random): PulseShape {
  const kind = Math.floor(random() * 3), turn = random() * Math.PI * 2;
  const count = kind === 0 ? 5 + Math.floor(random() * 3) : kind === 1 ? 5 + Math.floor(random() * 4) : 3 + Math.floor(random() * 3);
  const spikes = Array.from({ length: count }, (_, i) => ({
    angle: turn + (i / count) * Math.PI * 2 + (kind === 2 ? (random() - 0.5) * 0.9 : 0),
    length: kind === 0 ? 1.4 : kind === 1 ? 1.6 + random() * 0.8 : 0.8 + random() * 2.2,
  }));
  const sharp = kind === 1 ? 10 : kind === 0 ? 3 : 6;
  const reach = (a: number) => {
    let extra = 0;
    for (const s of spikes) {
      const d = Math.atan2(Math.sin(a - s.angle), Math.cos(a - s.angle));
      extra = Math.max(extra, s.length * Math.exp(-d * d * sharp * sharp / 4));
    }
    return base + extra;
  };
  return { reach, spikes };
}

const COLORS: Record<Faction, number[]> = {
  bloom: [0xffd27a, 0xfbf6ea, 0xeba3b8, 0x9fd36a],
  blight: [0xc7dc45, 0x8c6aa8, 0x5a3a7a, 0xe2f07a],
};
const MAX = 900;

// Pixel pulse: square particles race out to trace the pulse's shape, plus a burst of dust,
// petals or spores that hop and fall. One draw call for every pulse on screen.
export class PulseRings {
  readonly group = new THREE.Group();
  private geometry = new THREE.BufferGeometry();
  private pos = new Float32Array(MAX * 3);
  private col = new Float32Array(MAX * 3);
  private alpha = new Float32Array(MAX);
  private size = new Float32Array(MAX);
  private p: { life: number; age: number; x: number; z: number; ox: number; oz: number; tx: number; tz: number; vx: number; vy: number; vz: number; y: number; ring: boolean }[] = [];
  private next = 0;
  private material: THREE.ShaderMaterial;
  reducedMotion = false;

  constructor() {
    for (let i = 0; i < MAX; i++) this.p.push({ life: 0, age: 1, x: 0, z: 0, ox: 0, oz: 0, tx: 0, tz: 0, vx: 0, vy: 0, vz: 0, y: 0, ring: false });
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    this.geometry.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    this.material = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { uScale: { value: 1 } },
      vertexShader: `
attribute vec3 color; attribute float alpha; attribute float size;
uniform float uScale; varying vec3 vColor; varying float vAlpha;
void main() {
  vColor = color; vAlpha = alpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = floor(size * uScale * 26.0 / -mv.z + 0.5);
  gl_Position = projectionMatrix * mv;
}`,
      fragmentShader: `
varying vec3 vColor; varying float vAlpha;
void main() { if (vAlpha <= 0.01) discard; gl_FragColor = vec4(vColor, vAlpha); }`,
    });
    const points = new THREE.Points(this.geometry, this.material);
    points.frustumCulled = false;
    this.group.add(points);
  }

  spawn(x: number, z: number, faction: Faction, shape: PulseShape): void {
    const colors = COLORS[faction], c = new THREE.Color();
    const add = (ring: boolean, a: number, r: number) => {
      const i = this.next = (this.next + 1) % MAX, q = this.p[i];
      q.ring = ring; q.age = 0; q.x = q.ox = x; q.z = q.oz = z; q.y = 0.12;
      q.tx = Math.cos(a) * r; q.tz = Math.sin(a) * r;
      const speed = 2 + Math.random() * 3.5;
      q.vx = Math.cos(a) * speed; q.vz = Math.sin(a) * speed; q.vy = 2 + Math.random() * 3;
      q.life = ring ? 0.55 + Math.random() * 0.15 : 0.6 + Math.random() * 0.6;
      c.setHex(colors[Math.floor(Math.random() * colors.length)]);
      this.col.set([c.r, c.g, c.b], i * 3);
      this.size[i] = ring ? 6 : 4 + Math.floor(Math.random() * 3);
    };
    for (let k = 0; k < 110; k++) { const a = (k / 110) * Math.PI * 2; add(true, a, shape.reach(a)); }
    for (let k = 0; k < (this.reducedMotion ? 0 : 50); k++) add(false, Math.random() * Math.PI * 2, 0);
  }

  update(dt: number, pixelHeight = 1080): void {
    this.material.uniforms.uScale.value = pixelHeight / 1080;
    for (let i = 0; i < MAX; i++) {
      const q = this.p[i];
      if (q.age >= 1) { this.alpha[i] = 0; continue; }
      q.age = Math.min(1, q.age + dt / q.life);
      if (q.ring) {
        const t = this.reducedMotion ? 1 : 1 - (1 - q.age) ** 3;
        q.x = q.ox + q.tx * t; q.z = q.oz + q.tz * t; q.y = 0.12 + Math.sin(q.age * Math.PI) * 0.25;
      } else {
        q.vy -= 14 * dt; q.x += q.vx * dt; q.z += q.vz * dt; q.y = Math.max(0.05, q.y + q.vy * dt);
        q.vx *= 1 - 2 * dt; q.vz *= 1 - 2 * dt;
      }
      // Snap to a coarse grid so the motion steps like pixel art.
      this.pos[i * 3] = Math.round(q.x * 8) / 8; this.pos[i * 3 + 1] = Math.round(q.y * 8) / 8; this.pos[i * 3 + 2] = Math.round(q.z * 8) / 8;
      this.alpha[i] = q.age < 0.75 ? 1 : (1 - q.age) * 4;
    }
    (['position', 'alpha', 'color', 'size'] as const).forEach(n => { this.geometry.attributes[n].needsUpdate = true; });
  }

  dispose(): void { this.geometry.dispose(); this.material.dispose(); }
}
