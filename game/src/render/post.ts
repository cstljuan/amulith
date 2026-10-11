import * as THREE from 'three';

// One fullscreen pass: tilt-shift blur outside a horizontal focus band, glow taken from the
// target's own mipmaps (no extra blur passes), vignette and a day/night grade.
// HD-2D: the world renders into a low-resolution target (pixelHeight rows, about 32 px per world
// unit, so sprite texels land 1:1) and is scaled up with hard pixels; the depth of field, glow and
// grade run at full resolution on top. pixelHeight 0 renders at full resolution.
export class Post {
  private target: THREE.WebGLRenderTarget;
  private scene = new THREE.Scene();
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private quad: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  readonly uniforms = {
    tColor: { value: null as THREE.Texture | null },
    uTexel: { value: new THREE.Vector2() },
    uFocus: { value: 0.46 },
    uBand: { value: 0.16 },
    uBlur: { value: 1 },
    uNight: { value: 0.5 },
    uGlow: { value: 0.55 },
    uLodShift: { value: 0 },
  };
  pixelHeight = 448;
  enabled = true;

  constructor(private renderer: THREE.WebGLRenderer) {
    const hdr = renderer.extensions.has('EXT_color_buffer_half_float') || renderer.extensions.has('EXT_color_buffer_float');
    this.target = new THREE.WebGLRenderTarget(1, 1, {
      type: hdr ? THREE.HalfFloatType : THREE.UnsignedByteType,
      generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter, magFilter: THREE.NearestFilter, depthBuffer: true,
    });
    this.uniforms.tColor.value = this.target.texture;
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
      uniforms: this.uniforms, depthTest: false, depthWrite: false,
      vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
      fragmentShader: `
varying vec2 vUv;
uniform sampler2D tColor;
uniform vec2 uTexel;
uniform float uFocus, uBand, uBlur, uNight, uGlow, uLodShift;
const float GOLDEN = 2.39996;
void main() {
  vec3 base = texture2D(tColor, vUv).rgb;
  float amount = smoothstep(uBand, uBand + 0.32, abs(vUv.y - uFocus)) * uBlur;
  vec3 color = base;
  if (amount > 0.02) {
    vec3 sum = base; float r = 7.0 * amount; // px at 1080p
    for (int i = 1; i < 12; i++) {
      float fi = float(i);
      float a = fi * GOLDEN, d = sqrt(fi / 11.0) * r;
      sum += texture2D(tColor, vUv + vec2(cos(a), sin(a)) * d * uTexel).rgb;
    }
    color = sum / 12.0;
  }
  vec3 glow = textureLod(tColor, vUv, max(0.0, 3.0 - uLodShift)).rgb * 0.5 + textureLod(tColor, vUv, max(0.0, 5.0 - uLodShift)).rgb * 0.5;
  color += max(glow - vec3(0.72), 0.0) * uGlow * 1.6;
  vec3 dayGrade = vec3(1.02, 1.0, 0.97), nightGrade = vec3(0.86, 0.9, 1.12);
  color *= mix(dayGrade, nightGrade, uNight);
  vec2 v = vUv - 0.5;
  color *= 1.0 - dot(v, v) * mix(0.55, 0.95, uNight);
  gl_FragColor = vec4(color, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,
    }));
    this.scene.add(this.quad);
  }

  setSize(width: number, height: number): void {
    const s = this.pixelHeight > 0 && height > this.pixelHeight ? this.pixelHeight / height : 1;
    this.target.setSize(Math.max(1, Math.round(width * s)), Math.max(1, Math.round(height * s)));
    this.uniforms.uLodShift.value = Math.log2(1 / s);
    this.uniforms.uTexel.value.set(1 / width, 1 / height).multiplyScalar(height / 1080);
  }

  render(scene: THREE.Scene, camera: THREE.Camera): void {
    if (!this.enabled) { this.renderer.setRenderTarget(null); this.renderer.render(scene, camera); return; }
    this.renderer.setRenderTarget(this.target);
    this.renderer.render(scene, camera);
    this.renderer.setRenderTarget(null);
    this.renderer.render(this.scene, this.camera);
  }

  dispose(): void { this.target.dispose(); this.quad.geometry.dispose(); this.quad.material.dispose(); }
}
