import * as THREE from 'three';
import type { Faction } from '@protocol/messages';
import type { EventBus, GameEvents } from '../core/events';
import type { Land, LandCell } from '../rules/land';
import { Motes } from '../fx/particles';
import { PulseRings, randomShape } from '../fx/pulses';
import { EnemySprites, ShardSprites } from './actors';
import { Diorama } from './diorama';
export { resolveCollisions } from './diorama';
import { Ground } from './ground';
import { Lighting } from './lighting';
import { Post } from './post';
import { SpriteActor, wandererStandIn } from './sprite';
import { onSettings, settings } from '../ui/settings';

export interface VisualsHost {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  events: EventBus<GameEvents>;
  player: { position: THREE.Vector3; visual: THREE.Group; cutout: THREE.Object3D };
  session: { land: Land; faction: Faction | null };
  world?: { group: THREE.Object3D };
  // Placeholder views this layer replaces (the rules lanes' EnemyView and ShardView groups).
  replaces?: THREE.Object3D[];
}

// The HD-2D layer. main.ts calls installVisuals once, visuals.render(dt) in place of
// renderer.render, and visuals.resize() after sizing the renderer. ?post=0 turns off the post pass.
export function installVisuals(host: VisualsHost) {
  const { renderer, scene, camera, events, player, session } = host;
  const params = new URLSearchParams(window.location.search);
  let reducedMotion = settings.reducedMotion;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.05;
  if (host.world) host.world.group.visible = false;
  host.replaces?.forEach(o => { o.visible = false; });
  const pitch = Math.atan2(camera.position.y, camera.position.z);

  const lighting = new Lighting(scene);
  const ground = new Ground(pitch);
  const diorama = new Diorama(pitch);
  const motes = new Motes();
  const rings = new PulseRings();
  const post = new Post(renderer);
  const enemies = new EnemySprites();
  const shards = new ShardSprites(pitch);
  post.enabled = params.get('post') !== '0';
  ground.reducedMotion = rings.reducedMotion = reducedMotion;
  scene.add(ground.group, diorama.group, motes.points, rings.group, enemies.group, shards.group);

  const stand = wandererStandIn();
  const actor = new SpriteActor(stand.texture, stand.meta, 3.0, 'wanderer/sheet');
  actor.reducedMotion = reducedMotion;
  player.cutout.visible = false;
  player.visual.add(actor.root);

  // Initial land snapshot, then animated batches.
  const snapshot: LandCell[] = session.land.cells.map((faction, i) => ({ column: i % session.land.width, row: Math.floor(i / session.land.width), faction }));
  ground.apply(snapshot, true);
  lighting.setFaction(session.faction);
  const offs = [
    onSettings(s => { reducedMotion = ground.reducedMotion = rings.reducedMotion = actor.reducedMotion = enemies.reducedMotion = shards.reducedMotion = s.reducedMotion; }),
    events.on('enemies', list => enemies.set(list)),
    events.on('shards', list => shards.set(list)),
    events.on('shard-resolved', e => {
      const p = shards.position(e.id);
      if (p) for (let i = 0; i < 2; i++) rings.spawn(p.x, p.z, e.faction, randomShape(1.2 + i * 1.6));
    }),
    events.on('land', e => ground.apply(e.changes)),
    events.on('faction', e => lighting.setFaction(e.faction)),
    events.on('pulse-applied', e => {
      // The rules convert a radius-3 circle; the shape's spikes convert extra lobes so no two pulses match.
      const shape = randomShape();
      for (const s of shape.spikes) for (const t of [0.55, 0.9]) {
        const d = 3 + s.length * t;
        session.land.convert(e.x + Math.cos(s.angle) * d, e.z + Math.sin(s.angle) * d, 0.6 + s.length * (1 - t) * 0.6, e.faction);
      }
      rings.spawn(e.x, e.z, e.faction, shape); actor.act('pulse', 0.35);
    }),
    events.on('ask', () => actor.act('ask', 0.9)),
    events.on('dash', () => actor.act('dash', 0.18)),
    events.on('game-event', e => { if (e.kind === 'player_hurt') actor.hurt(); }),
    // `lantern` arrives with the game-rules lantern (PR #15); radius is in world units.
    events.on('lantern', e => lighting.setLanternRadius(e.radius)),
    events.on('thinking', e => { llmBusy = e.active; }),
  ];

  const last = new THREE.Vector3().copy(player.position);
  const size = new THREE.Vector2();
  let time = 0;
  // The LLM shares this GPU and runs about twice as fast when the game is not drawing. While Amulith
  // is generating (`thinking`), draw every third frame; ?llmThrottle=1 forces it on for measuring.
  const forceThrottle = params.get('llmThrottle') === '1';
  let llmBusy = false, skip = 0;
  const resize = () => { renderer.getDrawingBufferSize(size); post.setSize(size.x, size.y); };
  resize();

  return {
    render(dt: number) {
      time += dt;
      actor.update(dt, player.visual.position.x - last.x, player.visual.position.z - last.z);
      last.copy(player.visual.position);
      lighting.update(dt, player.visual.position, time, reducedMotion);
      ground.setNight(lighting.night);
      ground.update(dt, time);
      diorama.update(time);
      rings.update(dt);
      enemies.update(dt);
      shards.update(dt);
      motes.update(time, lighting.night, size.y, reducedMotion);
      post.uniforms.uNight.value = lighting.night;
      renderer.setClearColor(lighting.clear);
      if ((llmBusy || forceThrottle) && skip++ % 3 !== 0) return;
      post.render(scene, camera);
    },
    resize,
    dispose() {
      offs.forEach(off => off());
      scene.remove(ground.group, diorama.group, motes.points, rings.group, enemies.group, shards.group);
      player.visual.remove(actor.root);
      [lighting, ground, diorama, motes, rings, post, actor, enemies, shards].forEach(d => d.dispose());
    },
  };
}
