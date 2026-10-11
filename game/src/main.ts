import * as THREE from 'three';
import { config } from './core/config';
import { events } from './core/events';
import { startLoop } from './core/loop';
import { Input } from './input/Input';
import { Wanderer } from './player/Wanderer';
import { judgeLevel } from './levels/manager';
import { LEVEL_LORE } from './lore/levels';
import { installLevelScene } from './world/levelScene';
import { createWorld } from './world/world';
import { GameSession } from './rules/session';
import { installVisuals } from './render';
import { COLLIDERS } from './render/diorama';
import { sizeRenderer } from './render/resolution';
import { installUI } from './ui';
import { EnemyView } from './enemies/EnemyView';
import { ShardView } from './rules/ShardView';
import './style.css';

const canvas = document.querySelector<HTMLCanvasElement>('#game')!;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setClearColor(0x192724);
const scene = new THREE.Scene();
scene.add(new THREE.AmbientLight(0xffffff, 1.7));
const sun = new THREE.DirectionalLight(0xffedcf, 2);
sun.position.set(-10, 25, 15);
scene.add(sun);
const world = createWorld();
scene.add(world.group);
const player = new Wanderer();
scene.add(player.visual);
const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 150);
const offset = new THREE.Vector3(0, 17, 17 / Math.tan(THREE.MathUtils.degToRad(47)));
const target = new THREE.Vector3();
const desired = new THREE.Vector3();
camera.position.copy(offset);
camera.lookAt(target);
const input = new Input();
const session = new GameSession(config.remnant, events, player.position, judgeLevel(window.location.search));
const enemyView = new EnemyView(session.enemies);
const shardView = new ShardView(session.shards);
scene.add(enemyView.group, shardView.group);
const status = document.querySelector<HTMLElement>('#status')!;
const zoneLabel = document.querySelector<HTMLElement>('#zone')!;
const unsubscribe = events.on('pause', event => {
  status.textContent = session.paused ? 'Paused / Esc or Start to resume' : 'Explore the three regions';
});
session.start();
const beforeVisuals=new Set(scene.children);
const visuals = installVisuals({ renderer, scene, camera, events, player, session, world, replaces: [enemyView.group, shardView.group] });
session.setGroveObstacles(COLLIDERS);
// The first two newly added visual groups are the existing land and hero diorama.
const staticGroups=scene.children.filter(object=>!beforeVisuals.has(object)).filter(object=>object instanceof THREE.Group).slice(0,2);
const levelScene=installLevelScene(scene,session,staticGroups,Math.atan2(camera.position.y,camera.position.z),player.position);
const ui = installUI({ events, input, session, player, renderer });
const resize = () => {
  sizeRenderer(renderer, window.innerWidth, window.innerHeight);
  visuals.resize();
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};
resize();
window.addEventListener('resize', resize);
const stop = startLoop({
  frame() {
    input.poll();
    session.frame(input);
    if (input.pressed('pause')) events.emit('pause', { paused: !session.paused });
    if (!session.paused && input.pressed('pulse')) events.emit('pulse', { x: player.position.x, z: player.position.z });
    if (input.pressed('dash') && player.motion.dash(input.actions.move, session.paused)) events.emit('dash', { x: player.position.x, z: player.position.z });
    if (!session.paused && input.pressed('interact')) events.emit('interact', { x: player.position.x, z: player.position.z });
  },
  update(dt) { session.update(dt); player.update(dt, input.actions.move, session.paused, position=>session.collide(position)); session.collide(player.position); },
  render(alpha, dt) {
    target.lerp(player.position, 1 - Math.exp(-6 * dt));
    desired.copy(target).add(offset);
    camera.position.copy(desired);
    camera.lookAt(target);
    player.render(alpha, camera);
    enemyView.render(camera);shardView.render(camera);
    zoneLabel.textContent = LEVEL_LORE[session.levels.current.id].name;
    levelScene.frame();
    const share = session.land.share();
    status.textContent = `${session.faction ?? 'Choose: 1 Bloom / 2 Blight'} | ${session.run.phase}${session.run.result ? ' / '+session.run.result : ''} | ${session.client.mode} | HP ${Math.round(session.run.hp*100)}% | Shards ${session.run.shards}/3 | Bloom ${Math.round(share.bloom*100)}% / Blight ${Math.round(share.blight*100)}%`;
    visuals.render(dt);
    ui.frame(dt);
    const hudZone=document.querySelector<HTMLElement>('[data-zone]');
    if(hudZone)hudZone.textContent=LEVEL_LORE[session.levels.current.id].name;
  },
});

// Export the integration surface for lane modules and browser verification.
export { config, events, input, player, session };
if (import.meta.hot) import.meta.hot.dispose(() => {
  stop(); levelScene.dispose(); ui.dispose(); visuals.dispose(); session.dispose(); enemyView.dispose(); shardView.dispose(); input.dispose(); unsubscribe(); player.dispose(); world.dispose(); renderer.dispose();
  window.removeEventListener('resize', resize);
});
