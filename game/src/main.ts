import * as THREE from 'three';
import { config } from './core/config';
import { events } from './core/events';
import { startLoop } from './core/loop';
import { Input } from './input/Input';
import { Wanderer } from './player/Wanderer';
import { createWorld, zoneAt, ZONES } from './world/world';
import { GameSession } from './rules/session';
import { installVisuals, resolveCollisions } from './render';
import { sizeRenderer } from './render/resolution';
import { installUI } from './ui';
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
const session = new GameSession(config.remnant, events, player.position);
let paused = false;
const status = document.querySelector<HTMLElement>('#status')!;
const zoneLabel = document.querySelector<HTMLElement>('#zone')!;
const unsubscribe = events.on('pause', event => {
  paused = session.paused;
  status.textContent = paused ? 'Paused / Esc or Start to resume' : 'Explore the three regions';
});
session.start();
const visuals = installVisuals({ renderer, scene, camera, events, player, session, world });
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
    if (input.pressed('pause')) events.emit('pause', { paused: !paused });
    if (!paused && input.pressed('pulse')) events.emit('pulse', { x: player.position.x, z: player.position.z });
  },
  update(dt) { session.update(dt); player.update(dt, paused ? { x: 0, y: 0 } : input.actions.move); resolveCollisions(player.position); },
  render(alpha, dt) {
    target.lerp(player.position, 1 - Math.exp(-6 * dt));
    desired.copy(target).add(offset);
    camera.position.copy(desired);
    camera.lookAt(target);
    player.render(alpha, camera);
    zoneLabel.textContent = ZONES.find(zone => zone.id === zoneAt(player.position.x))!.label;
    const share = session.land.share();
    status.textContent = `${session.faction ?? 'Choose: 1 Bloom / 2 Blight'} | ${paused ? 'Paused' : 'Playing'} | ${session.client.mode} | Bloom ${Math.round(share.bloom*100)}% / Blight ${Math.round(share.blight*100)}%`;
    visuals.render(dt);
    ui.frame(dt);
  },
});

// Export the integration surface for lane modules and browser verification.
export { config, events, input, player, session };
if (import.meta.hot) import.meta.hot.dispose(() => {
  stop(); ui.dispose(); visuals.dispose(); session.dispose(); input.dispose(); unsubscribe(); player.dispose(); world.dispose(); renderer.dispose();
  window.removeEventListener('resize', resize);
});
