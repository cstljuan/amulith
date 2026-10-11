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

// Expanding outline of the pulse shape. Pooled, at most six alive.
export class PulseRings {
  readonly group = new THREE.Group();
  private rings: { mesh: THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>; age: number }[] = [];
  reducedMotion = false;

  constructor() {
    for (let i = 0; i < 6; i++) {
      const mesh = new THREE.Mesh(new THREE.BufferGeometry(), new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
      mesh.position.y = 0.08; mesh.visible = false;
      this.group.add(mesh); this.rings.push({ mesh, age: 1 });
    }
  }

  spawn(x: number, z: number, faction: Faction, shape: PulseShape): void {
    const ring = this.rings.reduce((a, b) => (a.age > b.age ? a : b));
    const n = 96, pos: number[] = [], index: number[] = [];
    for (let i = 0; i <= n; i++) {
      const a = (i / n) * Math.PI * 2, r = shape.reach(a);
      pos.push(Math.cos(a) * r * 0.9, 0, Math.sin(a) * r * 0.9, Math.cos(a) * r, 0, Math.sin(a) * r);
      if (i < n) index.push(i * 2, i * 2 + 1, i * 2 + 2, i * 2 + 1, i * 2 + 3, i * 2 + 2);
    }
    ring.mesh.geometry.dispose();
    ring.mesh.geometry = new THREE.BufferGeometry();
    ring.mesh.geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    ring.mesh.geometry.setIndex(index);
    ring.age = 0; ring.mesh.position.x = x; ring.mesh.position.z = z; ring.mesh.visible = true;
    ring.mesh.material.color.setHex(faction === 'bloom' ? 0xffd27a : 0xc7dc45);
  }

  update(dt: number): void {
    for (const ring of this.rings) {
      if (!ring.mesh.visible) continue;
      ring.age += dt / 0.7;
      if (ring.age >= 1) { ring.mesh.visible = false; continue; }
      ring.mesh.scale.setScalar(this.reducedMotion ? 1 : 0.15 + 0.85 * (1 - (1 - ring.age) ** 3));
      ring.mesh.material.opacity = (1 - ring.age) * 0.9;
    }
  }

  dispose(): void { this.rings.forEach(r => { r.mesh.geometry.dispose(); r.mesh.material.dispose(); }); }
}
