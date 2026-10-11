import * as THREE from 'three';
import { MAP } from '../world/world';

export const WALK_SPEED = 6;
export class Wanderer {
  readonly position = new THREE.Vector3();
  private previous = new THREE.Vector3();
  readonly visual = new THREE.Group();
  private texture: THREE.CanvasTexture;
  private geometry = new THREE.PlaneGeometry(1.8, 2.7);
  private material: THREE.MeshBasicMaterial;
  readonly cutout: THREE.Mesh;

  constructor() {
    const canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 192;
    const ctx = canvas.getContext('2d')!;
    ctx.strokeStyle = '#202d2a'; ctx.lineWidth = 7; ctx.lineJoin = 'round';
    ctx.fillStyle = '#ddbd77';
    ctx.beginPath(); ctx.moveTo(45, 84); ctx.lineTo(88, 84); ctx.lineTo(109, 162); ctx.lineTo(20, 162); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#f1dfb6'; ctx.beginPath(); ctx.ellipse(65, 59, 31, 37, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#334b45'; ctx.beginPath(); ctx.moveTo(25, 50); ctx.lineTo(54, 9); ctx.lineTo(95, 51); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#202d2a'; ctx.fillRect(77, 58, 7, 9); ctx.fillRect(35, 164, 18, 22); ctx.fillRect(77, 164, 18, 22);
    this.texture = new THREE.CanvasTexture(canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.material = new THREE.MeshBasicMaterial({ map: this.texture, alphaTest: 0.5, side: THREE.DoubleSide });
    this.cutout = new THREE.Mesh(this.geometry, this.material);
    this.cutout.position.y = 1.35;
    this.visual.add(this.cutout);
  }

  update(dt: number, move: { x: number; y: number }): void {
    this.previous.copy(this.position);
    this.position.x = THREE.MathUtils.clamp(this.position.x + move.x * WALK_SPEED * dt, MAP.minX + 0.9, MAP.maxX - 0.9);
    this.position.z = THREE.MathUtils.clamp(this.position.z + move.y * WALK_SPEED * dt, MAP.minZ + 0.9, MAP.maxZ - 0.9);
    if (Math.abs(move.x) > 0.01) this.cutout.scale.x = move.x < 0 ? -1 : 1;
  }

  render(alpha: number, camera: THREE.Camera): void {
    this.visual.position.lerpVectors(this.previous, this.position, alpha);
    this.visual.rotation.y = Math.atan2(camera.position.x - this.visual.position.x, camera.position.z - this.visual.position.z);
  }

  dispose(): void { this.texture.dispose(); this.geometry.dispose(); this.material.dispose(); }
}
