import * as THREE from 'three';
import { lookSprite } from './spriteLook';
import { blightShroomSprite, bushSprite, gemSprite, grassTile, mushroomSprite, pillarSprite, rng, shrineDisc, soilTile, stoneTile, treeSprite, upgradeFromArt, waterTile } from './pixelArt';
import { basinD, createTerrain, heightAt, WATER_Y } from './terrain';

type Spot = { x: number; y: number; z: number; s: number };
const HALF_W = 30, HALF_D = 20;

// Solid things the Wanderer cannot walk through (circles on the ground plane).
export const COLLIDERS: { x: number; z: number; r: number }[] = [];

// Everything around and on the playfield: curved terrain, the stream, billboard trees and props,
// a hedge along the walkable edge, and the stone shrine with the Amulith gem. About ten draw calls.
export class Diorama {
  readonly group = new THREE.Group();
  private disposables: { dispose(): void }[] = [];
  private water: THREE.Texture;
  readonly terrainUniforms: { uTile: { value: number } };

  constructor(cameraPitch: number) {
    const r = rng(7);
    const grass = grassTile(), soil = soilTile(), cliff = stoneTile();
    const terrain = createTerrain(grass, soil, cliff);
    this.terrainUniforms = terrain.uniforms;
    upgradeFromArt(grass, 'ground/grass.png', () => { terrain.uniforms.uTile.value = 9; });
    upgradeFromArt(soil, 'ground/blight-soil.png'); upgradeFromArt(cliff, 'ground/cliff.png');
    this.group.add(terrain.mesh);
    this.disposables.push(terrain, grass, soil, cliff);

    this.water = waterTile(); upgradeFromArt(this.water, 'ground/water.png'); this.water.repeat.set(30, 8);
    const waterMat = new THREE.MeshLambertMaterial({ map: this.water, emissive: 0x0b2630, transparent: true, opacity: 0.92 });
    const waterGeo = new THREE.PlaneGeometry(130, 26);
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.rotation.x = -Math.PI / 2; water.position.set(0, WATER_Y, HALF_D + 13);
    this.group.add(water);
    this.disposables.push(this.water, waterMat, waterGeo);

    // Billboard cards. The camera never rotates, so one shared tilt faces every card toward it.
    const tilt = new THREE.Quaternion().setFromEuler(new THREE.Euler(-(Math.PI / 2 - cameraPitch) * 0.85, 0, 0));
    const m = new THREE.Matrix4(), p = new THREE.Vector3(), sc = new THREE.Vector3();
    const cards = (map: THREE.Texture, w: number, h: number, spots: Spot[], art?: string) => {
      if (art) upgradeFromArt(map, art);
      const geo = new THREE.PlaneGeometry(w, h).translate(0, h / 2, 0);
      const mat = lookSprite(new THREE.MeshLambertMaterial({ map, alphaTest: 0.5, side: THREE.DoubleSide }));
      const mesh = new THREE.InstancedMesh(geo, mat, Math.max(1, spots.length));
      mesh.count = spots.length;
      spots.forEach((o, i) => mesh.setMatrixAt(i, m.compose(p.set(o.x, o.y, o.z), tilt, sc.setScalar(o.s))));
      this.group.add(mesh); this.disposables.push(geo, mat, map, mesh);
      return mat;
    };

    // Trees on the hills, denser near the basin edge, lush on the Bloom (left) side, twisted on the right.
    const lush: Spot[] = [], tall: Spot[] = [], dead: Spot[] = [];
    for (let i = 0; i < 900 && lush.length + tall.length + dead.length < 260; i++) {
      const x = (r() - 0.5) * 112, z = -44 + r() * 64;
      const d = basinD(x, z), h = heightAt(x, z);
      if (d < 1.2 || h < 0.3 || r() > Math.exp(-d / 14) + 0.15) continue;
      const spot = { x, y: h - 0.1, z, s: 0.85 + r() * 0.6 };
      (x > 12 + (r() - 0.5) * 10 ? dead : r() < 0.5 ? lush : tall).push(spot);
    }
    cards(treeSprite(21), 4.5, 6, lush, 'props/round-tree.png');
    cards(treeSprite(22, ['#24432f', '#2f5e34', '#3f7a3a', '#6fa35a']), 4.5, 6, tall, 'props/tall-tree.png');
    cards(treeSprite(23, ['#3a2a4a', '#4e3866', '#6a4c86', '#8c6aa8']), 4.5, 6, dead, 'props/blight-tree.png');

    // A hedge just outside the walkable rectangle, so the edge reads as plants, not a wall.
    const hedgeL: Spot[] = [], hedgeR: Spot[] = [], shroomsL: Spot[] = [], shroomsR: Spot[] = [];
    const edge = (x: number, z: number) => {
      const spot = { x: x + (r() - 0.5) * 0.6, y: Math.max(0, heightAt(x, z)), z: z + (r() - 0.5) * 0.6, s: 0.7 + r() * 0.5 };
      const right = x > 6 + (r() - 0.5) * 8;
      (r() < 0.65 ? (right ? shroomsR : hedgeL) : (right ? hedgeR : shroomsL)).push(spot);
    };
    for (let x = -HALF_W; x <= HALF_W; x += 2.2 + r() * 1.2) { edge(x, -HALF_D - 0.6); edge(x, HALF_D + 0.6); }
    for (let z = -HALF_D + 1.5; z <= HALF_D - 1.5; z += 2.2 + r() * 1.2) { edge(-HALF_W - 0.6, z); edge(HALF_W + 0.6, z); }
    cards(bushSprite(), 2.4, 1.8, hedgeL, 'props/flower-bush.png');
    cards(mushroomSprite(31), 2.4, 2.4, shroomsL, 'props/mushrooms.png');
    cards(blightShroomSprite(), 2.4, 2.4, shroomsR, 'props/blight-mushrooms.png');
    const darkBush = cards(bushSprite(), 2.4, 1.8, hedgeR, 'props/flower-bush.png');
    darkBush.color.setHex(0x8a6aa8);

    // A few mushroom groves and trees inside the clearing, each solid.
    const groves: Spot[] = [], innerTrees: Spot[] = [], innerDead: Spot[] = [];
    for (const [x, z] of [[-22, -12], [-16, 13], [-25, 4]]) { groves.push({ x, y: 0, z, s: 1.1 }); COLLIDERS.push({ x, z, r: 0.9 }); }
    for (const [x, z] of [[-11, -14], [-26, -16]]) { innerTrees.push({ x, y: 0, z, s: 1.05 }); COLLIDERS.push({ x, z, r: 0.7 }); }
    for (const [x, z] of [[18, -13], [24, 9], [13, 15]]) { innerDead.push({ x, y: 0, z, s: 1.05 }); COLLIDERS.push({ x, z, r: 0.7 }); }
    cards(mushroomSprite(32), 2.4, 2.4, groves, 'props/mushrooms.png');
    cards(treeSprite(24), 4.5, 6, innerTrees, 'props/round-tree.png');
    cards(treeSprite(25, ['#3a2a4a', '#4e3866', '#6a4c86', '#8c6aa8']), 4.5, 6, innerDead, 'props/blight-tree.png');

    // Six ruin pillars ring the shrine; the gem (Amulith) stands at its heart and glows.
    const pillars: Spot[] = [];
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + Math.PI / 6, x = Math.cos(a) * 5.4, z = Math.sin(a) * 4.6;
      pillars.push({ x, y: 0, z, s: 1 }); COLLIDERS.push({ x, z, r: 0.55 });
    }
    cards(pillarSprite(), 1.4, 2.1, pillars, 'props/ruin-pillar.png');
    const gem = cards(gemSprite(), 1.8, 2.7, [{ x: 0, y: 0, z: -0.2, s: 1 }], 'props/amulith-gem.png');
    gem.emissiveMap = gem.map; gem.emissive.setRGB(0.9, 0.7, 1.2);
    COLLIDERS.push({ x: 0, z: -0.2, r: 0.75 });

    const discTex = shrineDisc(); upgradeFromArt(discTex, 'props/shrine-circle.png');
    const discGeo = new THREE.CircleGeometry(4.2, 48);
    const disc = new THREE.Mesh(discGeo, new THREE.MeshLambertMaterial({ map: discTex, alphaTest: 0.5, polygonOffset: true, polygonOffsetFactor: -2 }));
    disc.rotation.x = -Math.PI / 2; disc.position.y = 0.03;
    this.group.add(disc);
    this.disposables.push(discTex, discGeo, disc.material as THREE.Material);
  }

  update(time: number): void { this.water.offset.set(time * 0.02, Math.sin(time * 0.4) * 0.03); }

  dispose(): void { this.disposables.forEach(d => d.dispose()); COLLIDERS.length = 0; }
}

// Pushes a point out of every solid prop. Returns true if it moved.
export function resolveCollisions(position: { x: number; z: number }, radius = 0.4): boolean {
  let moved = false;
  for (const c of COLLIDERS) {
    const dx = position.x - c.x, dz = position.z - c.z, d = Math.hypot(dx, dz), min = c.r + radius;
    if (d < min) { const k = d > 1e-4 ? (min - d) / d : 0; position.x += dx * k; position.z += (d > 1e-4 ? dz * k : min); moved = true; }
  }
  return moved;
}
