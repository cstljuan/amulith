import * as THREE from 'three';
import type { Zone } from '@protocol/messages';

export const MAP = { width: 60, depth: 40, minX: -30, maxX: 30, minZ: -20, maxZ: 20 } as const;
export const ZONES: { id: Zone; label: string; x: number; color: number }[] = [
  { id: 'hollow', label: 'Mushroom Hollow', x: -20, color: 0xa68f61 },
  { id: 'glade', label: 'Petal Glade', x: 0, color: 0x759b83 },
  { id: 'rootdeep', label: 'Rootdeep', x: 20, color: 0x837491 },
];
export function zoneAt(x: number): Zone { return x < -10 ? 'hollow' : x < 10 ? 'glade' : 'rootdeep'; }

export function createWorld() {
  const group = new THREE.Group();
  const geometry = new THREE.PlaneGeometry(MAP.width / 3, MAP.depth);
  const materials: THREE.Material[] = [];
  for (const zone of ZONES) {
    const material = new THREE.MeshLambertMaterial({ color: zone.color });
    materials.push(material);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.x = zone.x;
    group.add(mesh);
  }
  return { group, dispose: () => { geometry.dispose(); materials.forEach(m => m.dispose()); } };
}
