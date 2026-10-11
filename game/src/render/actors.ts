import * as THREE from 'three';
import type { EnemyKind } from '@protocol/messages';
import type { Shard } from '../rules/shards';
import { pixelTexture, upgradeFromArt } from './pixelArt';
import { SpriteActor, type SheetMeta } from './sprite';

interface EnemyView { id: number; kind: EnemyKind; state: 'wander' | 'chase' | 'attack' | 'defeated'; x: number; z: number }

const blank = () => ({ texture: pixelTexture(2, 3, () => undefined, 1), meta: { frameWidth: 2, frameHeight: 3, columns: 1, fps: 8, animations: { idle_side: [0] } } as SheetMeta });

// Enemy sprites driven by the `enemies` event: walk frames, attack frames, mirrored to face their
// motion, a defeated pose that fades out.
export class EnemySprites {
  readonly group = new THREE.Group();
  private actors = new Map<number, { actor: SpriteActor; kind: EnemyKind; x: number; z: number; fade: number; defeated: boolean }>();
  private latest: EnemyView[] = [];
  reducedMotion = false;

  set(enemies: EnemyView[]): void { this.latest = enemies; }

  update(dt: number): void {
    const seen = new Set<number>();
    for (const e of this.latest) {
      seen.add(e.id);
      let entry = this.actors.get(e.id);
      if (entry && entry.kind !== e.kind) { this.drop(e.id); entry = undefined; }
      if (!entry) {
        const b = blank();
        const actor = new SpriteActor(b.texture, b.meta, e.kind === 'chomper' ? 2.9 : 3.1, `${e.kind}/sheet`);
        actor.reducedMotion = this.reducedMotion;
        entry = { actor, kind: e.kind, x: e.x, z: e.z, fade: 1, defeated: false };
        actor.root.position.set(e.x, 0, e.z);
        this.actors.set(e.id, entry); this.group.add(actor.root);
      }
      const dx = e.x - entry.x, dz = e.z - entry.z;
      entry.x = e.x; entry.z = e.z;
      if (e.state === 'attack') entry.actor.act('attack', 0.3);
      if (e.state === 'defeated' && !entry.defeated) { entry.defeated = true; entry.actor.act('defeated', 99); }
      entry.actor.update(dt, entry.defeated ? 0 : dx, entry.defeated ? 0 : dz);
      entry.actor.root.position.set(e.x, 0, e.z);
      if (entry.defeated) { entry.fade -= dt / 1.4; entry.actor.setOpacity(Math.max(0, entry.fade)); }
    }
    for (const id of [...this.actors.keys()]) if (!seen.has(id) || this.actors.get(id)!.fade <= 0) this.drop(id);
  }

  private drop(id: number): void { const a = this.actors.get(id); if (!a) return; this.group.remove(a.actor.root); a.actor.dispose(); this.actors.delete(id); }
  dispose(): void { for (const id of [...this.actors.keys()]) this.drop(id); }
}

// Shards: a glowing crystal card where the lantern reveals one, trembling and brightening while it
// is held, and a beam of light where Amulith's hint points. Glow comes from emissive plus the post
// pass, not extra lights.
export class ShardSprites {
  readonly group = new THREE.Group();
  private texture = pixelTexture(8, 12, (ctx) => { ctx.fillStyle = '#4e2f66'; ctx.fillRect(2, 1, 4, 11); ctx.fillStyle = '#c9a7e8'; ctx.fillRect(3, 2, 1, 6); }, 3);
  private geometry = new THREE.PlaneGeometry(1.3, 1.95).translate(0, 0.97, 0);
  private beamGeometry = new THREE.CylinderGeometry(0.35, 0.7, 14, 16, 1, true).translate(0, 7, 0);
  private beamMaterial = new THREE.MeshBasicMaterial({ color: 0xc9a7ff, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
  private items = new Map<string, { card: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshLambertMaterial>; beam: THREE.Mesh }>();
  private time = 0;
  reducedMotion = false;

  constructor(cameraPitch: number) {
    upgradeFromArt(this.texture, 'shard/shard.png');
    this.tilt = -(Math.PI / 2 - cameraPitch) * 0.85;
  }
  private tilt: number;

  set(shards: Shard[]): void {
    for (const s of shards) {
      let item = this.items.get(s.id);
      if (!item) {
        const mat = new THREE.MeshLambertMaterial({ map: this.texture, emissiveMap: this.texture, emissive: 0xb080ff, alphaTest: 0.5, side: THREE.DoubleSide });
        const card = new THREE.Mesh(this.geometry, mat);
        card.position.set(s.x, 0, s.z); card.rotation.x = this.tilt;
        const beam = new THREE.Mesh(this.beamGeometry, this.beamMaterial); beam.position.set(s.x, 0, s.z);
        this.group.add(card, beam);
        item = { card, beam }; this.items.set(s.id, item);
      }
      item.card.visible = s.visible && !s.resolved;
      item.beam.visible = s.hinted && s.active && !s.resolved;
      item.card.userData.progress = s.progress;
    }
  }

  update(dt: number): void {
    this.time += dt;
    for (const { card, beam } of this.items.values()) {
      const p = (card.userData.progress as number) ?? 0;
      const shake = this.reducedMotion ? 0 : p * 0.06 * Math.sin(this.time * 60);
      card.position.x += shake - (card.userData.shake ?? 0); card.userData.shake = shake;
      card.material.emissive.setRGB(0.55 + p, 0.4 + p * 0.6, 0.9 + p);
      (beam.material as THREE.MeshBasicMaterial).opacity = 0.12 + 0.08 * Math.sin(this.time * 2.4);
    }
  }

  position(id: string): THREE.Vector3 | null { return this.items.get(id)?.card.position ?? null; }

  dispose(): void {
    for (const { card } of this.items.values()) card.material.dispose();
    this.texture.dispose(); this.geometry.dispose(); this.beamGeometry.dispose(); this.beamMaterial.dispose(); this.group.clear();
  }
}
