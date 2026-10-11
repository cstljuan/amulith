import * as THREE from 'three';
import { blightShroomSprite, bushSprite, gemSprite, grassEdgeTile, grassTile, mushroomSprite, pillarSprite, rng, shrineDisc, stoneTile, treeSprite, upgradeFromArt, waterTile } from './pixelArt';

const HALF_W = 30, HALF_D = 20, RIM = 9;
type Spot = { x: number; y: number; z: number; s: number };

// Everything around the 60 x 40 playfield: tiered voxel cliffs (far and side), a stream below the
// near edge, billboard trees and giant mushrooms, and the stone shrine circle at the center.
// Purely visual; nothing here collides. About eight draw calls.
export class Diorama {
  readonly group = new THREE.Group();
  private disposables: { dispose(): void }[] = [];
  private water: THREE.Texture;

  constructor(cameraPitch: number) {
    const r = rng(7);
    const box = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
    const grass = grassTile(), edge = grassEdgeTile(), stone = stoneTile();
    upgradeFromArt(grass, 'ground/grass.png'); upgradeFromArt(edge, 'ground/cliff-top.png'); upgradeFromArt(stone, 'ground/cliff.png');
    const lam = (map: THREE.Texture) => new THREE.MeshLambertMaterial({ map });
    const topMats = [lam(edge), lam(edge), lam(grass), lam(stone), lam(edge), lam(edge)];
    const bodyMat = lam(stone);
    this.disposables.push(box, grass, edge, stone, bodyMat, ...topMats);

    // Height field: 0 inside the playfield, rising in steps away from the far and side edges.
    const columns: { x: number; z: number; h: number }[] = [];
    const noise = (x: number, z: number) => Math.sin(x * 0.35 + z * 0.2) + Math.sin(z * 0.5 - x * 0.15) * 0.7;
    for (let z = -HALF_D - RIM; z < HALF_D + 3; z++) for (let x = -HALF_W - RIM; x < HALF_W + RIM; x++) {
      const inside = x >= -HALF_W && x < HALF_W && z >= -HALF_D && z < HALF_D;
      if (inside || z >= HALF_D) continue;
      const out = Math.max(-HALF_W - x, x + 1 - HALF_W, -HALF_D - z, 0);
      const h = Math.max(1, Math.min(6, Math.round(out * 0.55 + noise(x, z) * 0.9 + 0.6)));
      columns.push({ x: x + 0.5, z: z + 0.5, h });
    }
    const bodyCount = columns.reduce((n, c) => n + c.h - 1, 0);
    const tops = new THREE.InstancedMesh(box, topMats, columns.length);
    const body = new THREE.InstancedMesh(box, bodyMat, Math.max(1, bodyCount));
    const m = new THREE.Matrix4();
    let b = 0;
    columns.forEach((c, i) => {
      tops.setMatrixAt(i, m.makeTranslation(c.x, c.h - 1, c.z));
      for (let y = 0; y < c.h - 1; y++) body.setMatrixAt(b++, m.makeTranslation(c.x, y, c.z));
    });
    body.count = b;
    this.group.add(tops, body);

    // Near edge: a stone lip, then water below it.
    const lipGeo = new THREE.BoxGeometry(HALF_W * 2 + RIM * 2, 1.5, 0.6);
    const lipTex = stoneTile(); lipTex.repeat.set(HALF_W * 2 + RIM * 2, 1.5);
    const lip = new THREE.Mesh(lipGeo, lam(lipTex));
    lip.position.set(0, -0.75, HALF_D + 0.3);
    this.water = waterTile(); upgradeFromArt(this.water, 'ground/water.png'); this.water.repeat.set(40, 6);
    const waterMat = new THREE.MeshLambertMaterial({ map: this.water, emissive: 0x0b2630 });
    const waterGeo = new THREE.PlaneGeometry(HALF_W * 2 + RIM * 2, 14);
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.rotation.x = -Math.PI / 2; water.position.set(0, -1.2, HALF_D + 7);
    this.group.add(lip, water);
    this.disposables.push(lipGeo, lipTex, lip.material as THREE.Material, this.water, waterMat, waterGeo);

    // Billboard scenery. The camera never rotates, so one shared tilt faces every card toward it.
    const tilt = new THREE.Quaternion().setFromEuler(new THREE.Euler(-(Math.PI / 2 - cameraPitch) * 0.85, 0, 0));
    const cards = (map: THREE.Texture, w: number, h: number, spots: Spot[], art?: string) => {
      if (art) upgradeFromArt(map, art);
      const geo = new THREE.PlaneGeometry(w, h).translate(0, h / 2, 0);
      const mat = new THREE.MeshLambertMaterial({ map, alphaTest: 0.5, side: THREE.DoubleSide });
      const mesh = new THREE.InstancedMesh(geo, mat, spots.length);
      const p = new THREE.Vector3(), s = new THREE.Vector3();
      spots.forEach((o, i) => mesh.setMatrixAt(i, m.compose(p.set(o.x, o.y, o.z), tilt, s.setScalar(o.s))));
      this.group.add(mesh); this.disposables.push(geo, mat, map, mesh);
      return mat;
    };
    const heightAt = (x: number, z: number) => columns.find(c => Math.abs(c.x - x) < 0.5 && Math.abs(c.z - z) < 0.5)?.h ?? 0;
    // Trees on the cliffs: lush on the Bloom (left) side, twisted on the Rootdeep (right) side.
    const lush: Spot[] = [], tall: Spot[] = [], dead: Spot[] = [];
    for (let i = 0; i < 300; i++) {
      const far = r() < 0.55;
      const x = far ? (r() - 0.5) * (HALF_W + RIM) * 2 : (r() < 0.5 ? -1 : 1) * (HALF_W + 1 + r() * (RIM - 1));
      const z = far ? -HALF_D - 1 - r() * (RIM - 1) : (r() - 0.5) * HALF_D * 2;
      const px = Math.floor(x) + 0.5, pz = Math.floor(z) + 0.5, h = heightAt(px, pz);
      if (!h) continue;
      const spot = { x: px + (r() - 0.5) * 0.4, y: h, z: pz, s: 0.8 + r() * 0.6 };
      const blight = x > 10 + (r() - 0.5) * 8;
      (blight ? dead : r() < 0.5 ? lush : tall).push(spot);
    }
    // A few trees inside the playfield corners frame the clearing.
    for (const [x, z] of [[-28, -18], [-27.5, 17.5], [-12, -18.5]]) lush.push({ x, y: 0, z, s: 1.1 });
    for (const [x, z] of [[27, -17.5], [28, 18], [14, -18.8]]) dead.push({ x, y: 0, z, s: 1.1 });
    cards(treeSprite(21), 4.5, 6, lush, 'props/round-tree.png');
    cards(treeSprite(22, ['#24432f', '#2f5e34', '#3f7a3a', '#6fa35a']), 4.5, 6, tall, 'props/tall-tree.png');
    cards(treeSprite(23, ['#3a2a4a', '#4e3866', '#6a4c86', '#8c6aa8']), 4.5, 6, dead, 'props/blight-tree.png');
    const shrooms: Spot[] = [], rot: Spot[] = [], bushes: Spot[] = [];
    for (let i = 0; i < 12; i++) shrooms.push({ x: -29 + r() * 18, y: 0, z: -19.6 + r() * 1.4, s: 0.7 + r() * 0.7 });
    for (let i = 0; i < 8; i++) shrooms.push({ x: -29.6 + r() * 1.2, y: 0, z: -18 + r() * 36, s: 0.6 + r() * 0.6 });
    for (let i = 0; i < 12; i++) rot.push({ x: 11 + r() * 18, y: 0, z: -19.6 + r() * 1.4, s: 0.7 + r() * 0.7 });
    for (let i = 0; i < 8; i++) rot.push({ x: 28.4 + r() * 1.2, y: 0, z: -18 + r() * 36, s: 0.6 + r() * 0.6 });
    for (let i = 0; i < 16; i++) bushes.push({ x: -29 + r() * 34, y: 0, z: r() < 0.5 ? -19.3 + r() : 18.6 + r() * 0.8, s: 0.7 + r() * 0.5 });
    cards(mushroomSprite(31), 2.4, 2.4, shrooms, 'props/mushrooms.png');
    cards(blightShroomSprite(), 2.4, 2.4, rot, 'props/blight-mushrooms.png');
    cards(bushSprite(), 2.4, 1.8, bushes, 'props/flower-bush.png');
    // Six ruin pillars ring the shrine; the gem (Amulith) stands at its heart and glows.
    const pillars: Spot[] = [];
    for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2 + Math.PI / 6; pillars.push({ x: Math.cos(a) * 5.4, y: 0, z: Math.sin(a) * 4.6, s: 1 }); }
    cards(pillarSprite(), 1.4, 2.1, pillars, 'props/ruin-pillar.png');
    const gem = cards(gemSprite(), 1.8, 2.7, [{ x: 0, y: 0, z: -0.2, s: 1 }], 'props/amulith-gem.png');
    gem.emissiveMap = gem.map; gem.emissive.setRGB(0.9, 0.7, 1.2);

    // The shrine circle at the center of Petal Glade.
    const discTex = shrineDisc(); upgradeFromArt(discTex, 'props/shrine-circle.png');
    const discGeo = new THREE.CircleGeometry(4.2, 48);
    const disc = new THREE.Mesh(discGeo, new THREE.MeshLambertMaterial({ map: discTex, alphaTest: 0.5, polygonOffset: true, polygonOffsetFactor: -2 }));
    disc.rotation.x = -Math.PI / 2; disc.position.y = 0.03;
    this.group.add(disc);
    this.disposables.push(discTex, discGeo, disc.material as THREE.Material);
  }

  update(time: number): void { this.water.offset.set(time * 0.02, Math.sin(time * 0.4) * 0.03); }

  dispose(): void { this.disposables.forEach(d => d.dispose()); }
}
