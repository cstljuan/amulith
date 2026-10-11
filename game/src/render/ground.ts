import * as THREE from 'three';
import type { LandCell } from '../rules/land';
import { flowerSprite, grassTile, rng, soilTile, thornSprite, upgradeFromArt, veinTile } from './pixelArt';

const W = 60, D = 40, MIN_X = -30, MIN_Z = -20;
const FLOWER_TINTS = [0xeba3b8, 0xfbf6ea, 0xe0ae3a, 0xc9a7e8, 0xeba3b8];

// The playfield: one textured plane whose Bloom/Blight blend comes from a 60 x 40 mask texture,
// plus instanced flowers (Bloom) and thorns (Blight) that grow and wither per cell. Three draw calls.
export class Ground {
  readonly group = new THREE.Group();
  private mask = new Uint8Array(W * D * 4);
  private maskTexture = new THREE.DataTexture(this.mask, W, D, THREE.RGBAFormat);
  private value = new Float32Array(W * D);
  private target = new Float32Array(W * D);
  private active = new Set<number>();
  private uniforms = { uMask: { value: this.maskTexture }, uSoil: { value: soilTile() }, uVein: { value: veinTile() }, uTime: { value: 0 }, uNight: { value: 0.5 }, uTile: { value: 2 } };
  private material: THREE.MeshLambertMaterial;
  private geometry = new THREE.PlaneGeometry(W, D);
  private flowers: THREE.InstancedMesh;
  private thorns: THREE.InstancedMesh;
  private sprigGeometry = new THREE.PlaneGeometry(0.42, 0.52).translate(0, 0.26, 0);
  private offsets: { x: number; z: number; s: number }[] = [];
  private matrix = new THREE.Matrix4();
  private quaternion = new THREE.Quaternion();
  private scratchPosition = new THREE.Vector3();
  private scratchScale = new THREE.Vector3();
  private disposables: { dispose(): void }[] = [];
  reducedMotion = false;

  constructor(cameraPitch: number) {
    this.maskTexture.magFilter = THREE.LinearFilter; this.maskTexture.minFilter = THREE.LinearFilter;
    const grass = grassTile(); upgradeFromArt(grass, 'ground/grass.png', () => { this.uniforms.uTile.value = 9; });
    upgradeFromArt(this.uniforms.uSoil.value, 'ground/blight-soil.png');
    this.material = new THREE.MeshLambertMaterial({ map: grass });
    this.material.onBeforeCompile = shader => {
      Object.assign(shader.uniforms, this.uniforms);
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec2 vGround;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvGround = (modelMatrix * vec4(position, 1.0)).xz;');
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>
varying vec2 vGround;
uniform sampler2D uMask, uSoil, uVein;
uniform float uTime, uNight, uTile;
float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float blightAt(vec2 g) {
  vec2 q = floor(g * 8.0) / 8.0; // snap to the 16 px per tile grid so edges stay pixel crisp
  float m = texture2D(uMask, (q - vec2(${MIN_X}.0, ${MIN_Z}.0)) / vec2(${W}.0, ${D}.0)).r;
  return smoothstep(0.42, 0.58, m + (hash2(floor(g * 2.0)) - 0.5) * 0.35);
}`)
        .replace('#include <map_fragment>', `
vec2 tuv = vGround / uTile;
vec3 grassC = texture2D(map, tuv).rgb;
vec3 soilC = texture2D(uSoil, tuv).rgb;
float b = blightAt(vGround);
diffuseColor.rgb *= mix(grassC, soilC, b);`)
        .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
vec2 va = texture2D(uVein, vGround / 12.0).rg;
vec2 vb = texture2D(uVein, mat2(0.8, -0.6, 0.6, 0.8) * vGround / 17.0 + 0.37).rg;
vec2 vein = va.r > 0.0 ? va : vb * step(0.5, fract(vGround.x / 34.0 + vGround.y / 21.0));
float raw = texture2D(uMask, (floor(vGround * 8.0) / 8.0 - vec2(${MIN_X}.0, ${MIN_Z}.0)) / vec2(${W}.0, ${D}.0)).r;
float grow = clamp(raw * 1.3 - 0.15, 0.0, 1.0);
float veinOn = smoothstep(0.3, 0.8, vein.r) * step(vein.g, grow) * b;
float pulse = 0.75 + 0.25 * sin(uTime * 2.2 - vein.g * 9.0);
totalEmissiveRadiance += vec3(0.78, 0.86, 0.27) * veinOn * pulse * (0.12 + 0.75 * uNight);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.1, 0.12, 0.03), veinOn * 0.5);`);
    };
    const plane = new THREE.Mesh(this.geometry, this.material);
    plane.rotation.x = -Math.PI / 2;
    this.group.add(plane);

    const sprigMaterial = (map: THREE.Texture) => new THREE.MeshLambertMaterial({ map, alphaTest: 0.5, side: THREE.DoubleSide });
    const flowerMat = sprigMaterial(flowerSprite()), thornMat = sprigMaterial(thornSprite());
    this.flowers = new THREE.InstancedMesh(this.sprigGeometry, flowerMat, W * D);
    this.thorns = new THREE.InstancedMesh(this.sprigGeometry, thornMat, W * D);
    // The camera never rotates, so every sprig faces it with one shared tilt.
    this.quaternion.setFromEuler(new THREE.Euler(-(Math.PI / 2 - cameraPitch) * 0.6, 0, 0));
    const r = rng(42), color = new THREE.Color();
    for (let i = 0; i < W * D; i++) {
      this.offsets.push({ x: MIN_X + (i % W) + 0.15 + r() * 0.7, z: MIN_Z + Math.floor(i / W) + 0.15 + r() * 0.7, s: 0.75 + r() * 0.6 });
      this.flowers.setColorAt(i, color.setHex(FLOWER_TINTS[Math.floor(r() * FLOWER_TINTS.length)]));
      this.writeSprig(i, 0);
    }
    this.flowers.instanceColor!.needsUpdate = true;
    this.group.add(this.flowers, this.thorns);
    this.disposables.push(this.geometry, this.material, this.maskTexture, grass, this.uniforms.uSoil.value, this.uniforms.uVein.value, this.sprigGeometry, flowerMat, thornMat, flowerMat.map!, thornMat.map!);
  }

  // Applies a batch from the `land` event. Initial reset snaps; later changes animate.
  apply(changes: LandCell[], snap = false): void {
    for (const c of changes) {
      const i = c.row * W + c.column;
      this.target[i] = c.faction === 'blight' ? 1 : c.faction === 'bloom' ? 0 : 0.5;
      if (snap || this.reducedMotion) { this.value[i] = this.target[i]; this.writeCell(i); } else this.active.add(i);
    }
    this.maskTexture.needsUpdate = true;
    this.flowers.instanceMatrix.needsUpdate = this.thorns.instanceMatrix.needsUpdate = true;
  }

  setNight(night: number): void { this.uniforms.uNight.value = night; }

  update(dt: number, time: number): void {
    this.uniforms.uTime.value = time;
    if (!this.active.size) return;
    const step = dt * 1.6;
    for (const i of this.active) {
      const d = this.target[i] - this.value[i];
      this.value[i] = Math.abs(d) <= step ? this.target[i] : this.value[i] + Math.sign(d) * step;
      if (this.value[i] === this.target[i]) this.active.delete(i);
      this.writeCell(i);
    }
    this.maskTexture.needsUpdate = true;
    this.flowers.instanceMatrix.needsUpdate = this.thorns.instanceMatrix.needsUpdate = true;
  }

  private writeCell(i: number): void {
    this.mask[i * 4] = Math.round(this.value[i] * 255);
    this.writeSprig(i, this.value[i]);
  }

  // Flowers unfold as a cell leaves Blight; thorns push up as it enters. Overshoot gives a small pop.
  private writeSprig(i: number, blight: number): void {
    const o = this.offsets[i];
    const pop = (t: number) => t <= 0 ? 0 : t >= 1 ? 1 : 1 + 0.25 * Math.sin(t * Math.PI) - (1 - t) * (1 - t) * 0.6;
    const bloomGrow = i % 2 ? 0 : pop(1 - blight * 2), blightGrow = i % 3 ? 0 : pop(blight * 2 - 1);
    this.flowers.setMatrixAt(i, this.matrix.compose(this.scratchPosition.set(o.x, 0, o.z), this.quaternion, this.scratchScale.setScalar(o.s * Math.max(0.0001, bloomGrow))));
    this.thorns.setMatrixAt(i, this.matrix.compose(this.scratchPosition.set(o.x, 0, o.z), this.quaternion, this.scratchScale.setScalar(o.s * 1.1 * Math.max(0.0001, blightGrow))));
  }

  dispose(): void { this.disposables.forEach(d => d.dispose()); this.flowers.dispose(); this.thorns.dispose(); }
}
