import * as THREE from 'three';
import type { GameSession } from '../rules/session.ts';
import type { EventBus, GameEvents } from '../core/events.ts';
import { spiritPlaces } from './places.ts';
export function installStoryMarkers(scene: THREE.Scene, session: GameSession, events: EventBus<GameEvents>) {
  const group = new THREE.Group(); group.name = 'Forest spirits'; scene.add(group);
  const clear = () => { for (const child of [...group.children]) {
    if (child instanceof THREE.Sprite) { child.material.map?.dispose(); child.material.dispose(); }
    group.remove(child);
  } };
  const rebuild = () => {
    clear();
    for (const npc of spiritPlaces(session.levels.current)) {
      const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 256;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#120d1a'; ctx.beginPath(); ctx.roundRect(14, 6, 484, 92, 16); ctx.fill();
      ctx.fillStyle = '#f3ead2'; ctx.font = 'bold 30px sans-serif'; ctx.textAlign = 'center'; ctx.fillText(npc.name, 256, 43);
      ctx.fillStyle = '#e8bd5a'; ctx.font = '22px sans-serif'; ctx.fillText('F / X to talk', 256, 76);
      ctx.fillStyle = '#e8bd5a'; ctx.beginPath(); ctx.moveTo(256, 116); ctx.quadraticCurveTo(190, 179, 256, 238); ctx.quadraticCurveTo(322, 179, 256, 116); ctx.fill();
      ctx.fillStyle = '#120d1a'; ctx.fillRect(240, 178, 8, 18); ctx.fillRect(264, 178, 8, 18);
      const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }));
      sprite.position.set(npc.x, 1.7, npc.z); sprite.scale.set(4.4, 2.2, 1); group.add(sprite);
    }
  };
  const off = events.on('level', rebuild); rebuild();
  return { dispose() { off(); clear(); scene.remove(group); } };
}
