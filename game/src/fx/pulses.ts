import * as THREE from 'three';
import type { Faction } from '@protocol/messages';

// Expanding pixel ring where a pulse converts land. Pooled, at most six alive.
export class PulseRings {
  readonly group = new THREE.Group();
  private geometry = new THREE.RingGeometry(0.93, 1, 48, 1);
  private rings: { mesh: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>; age: number }[] = [];
  reducedMotion = false;

  constructor() {
    for (let i = 0; i < 6; i++) {
      const mesh = new THREE.Mesh(this.geometry, new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      mesh.rotation.x = -Math.PI / 2; mesh.position.y = 0.08; mesh.visible = false;
      this.group.add(mesh); this.rings.push({ mesh, age: 1 });
    }
  }

  spawn(x: number, z: number, faction: Faction): void {
    const ring = this.rings.reduce((a, b) => (a.age > b.age ? a : b));
    ring.age = 0; ring.mesh.position.x = x; ring.mesh.position.z = z; ring.mesh.visible = true;
    ring.mesh.material.color.setHex(faction === 'bloom' ? 0xffd27a : 0xc7dc45);
  }

  update(dt: number): void {
    for (const ring of this.rings) {
      if (!ring.mesh.visible) continue;
      ring.age += dt / 0.6;
      if (ring.age >= 1) { ring.mesh.visible = false; continue; }
      const r = this.reducedMotion ? 3 : 0.5 + 2.7 * (1 - (1 - ring.age) ** 3);
      ring.mesh.scale.setScalar(r);
      ring.mesh.material.opacity = (1 - ring.age) * 0.9;
    }
  }

  dispose(): void { this.geometry.dispose(); this.rings.forEach(r => r.mesh.material.dispose()); }
}
