import * as THREE from 'three';

// In-world fireflies by day (gold) that become drifting spores at night (chartreuse). Kept few.
export class Motes {
  readonly points: THREE.Points;
  private material: THREE.ShaderMaterial;
  private geometry = new THREE.BufferGeometry();

  constructor(count = 70) {
    const seed = new Float32Array(count * 4);
    for (let i = 0; i < count; i++) seed.set([(Math.random() - 0.5) * 70, 0.4 + Math.random() * 3.5, (Math.random() - 0.5) * 48, Math.random() * 100], i * 4);
    this.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    this.geometry.setAttribute('seed', new THREE.BufferAttribute(seed, 4));
    this.material = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uNight: { value: 0.5 }, uScale: { value: 1 }, uMotion: { value: 1 } },
      vertexShader: `
attribute vec4 seed;
uniform float uTime, uScale, uMotion;
varying float vFade;
void main() {
  float t = uTime * uMotion + seed.w;
  vec3 p = seed.xyz + vec3(sin(t * 0.31) * 1.6, sin(t * 0.83) * 0.35, cos(t * 0.27) * 1.6);
  vFade = 0.5 + 0.5 * sin(t * 1.7);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = uScale * 5.0 / -mv.z * 10.0;
  gl_Position = projectionMatrix * mv;
}`,
      fragmentShader: `
uniform float uNight;
varying float vFade;
void main() {
  vec2 q = abs(gl_PointCoord - 0.5);
  if (max(q.x, q.y) > 0.5) discard;
  float core = step(max(q.x, q.y), 0.2);
  vec3 c = mix(vec3(1.0, 0.82, 0.4), vec3(0.78, 0.86, 0.27), uNight);
  gl_FragColor = vec4(c * (0.6 + core * 1.4) * vFade, 1.0);
}`,
    });
    this.points = new THREE.Points(this.geometry, this.material);
    this.points.frustumCulled = false;
  }

  update(time: number, night: number, pixelHeight: number, reducedMotion: boolean): void {
    this.material.uniforms.uTime.value = time;
    this.material.uniforms.uNight.value = night;
    this.material.uniforms.uScale.value = pixelHeight / 1080;
    this.material.uniforms.uMotion.value = reducedMotion ? 0.15 : 1;
  }

  dispose(): void { this.geometry.dispose(); this.material.dispose(); }
}
