import * as THREE from 'three';

// The lantern's reach, visible: everything lit by Lambert materials darkens outside the radius,
// gently by day and deeply at night, with a stepped (pixel) edge. Radius follows the knob.
export const lanternUniforms = {
  uLantern: { value: new THREE.Vector3(0, 0, 7.5) }, // x, z, radius in world units
  uLanternDark: { value: 0.4 },
};

const patched = new WeakSet<THREE.Material>();

export function patchLantern(material: THREE.Material): void {
  if (patched.has(material) || !(material as THREE.MeshLambertMaterial).isMeshLambertMaterial) return;
  patched.add(material);
  const previous = material.onBeforeCompile.bind(material);
  const previousKey = material.customProgramCacheKey.bind(material);
  material.onBeforeCompile = (shader, renderer) => {
    previous(shader, renderer);
    Object.assign(shader.uniforms, lanternUniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vLanternXZ;')
      .replace('#include <project_vertex>', `#include <project_vertex>
vec4 lanternW = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
lanternW = instanceMatrix * lanternW;
#endif
vLanternXZ = (modelMatrix * lanternW).xz;`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vLanternXZ;\nuniform vec3 uLantern;\nuniform float uLanternDark;')
      .replace('#include <dithering_fragment>', `#include <dithering_fragment>
float lanternD = floor(distance(vLanternXZ, uLantern.xy) * 3.0) / 3.0;
float lanternLit = 1.0 - smoothstep(uLantern.z * 0.72, uLantern.z, lanternD);
gl_FragColor.rgb *= mix(1.0 - uLanternDark, 1.0, lanternLit);
gl_FragColor.rgb *= mix(vec3(1.0), vec3(1.07, 1.02, 0.9), lanternLit * uLanternDark);`);
  };
  material.customProgramCacheKey = () => `${previousKey()}|lantern`;
  material.needsUpdate = true;
}

export function patchTree(root: THREE.Object3D): void {
  root.traverse(o => {
    const m = (o as THREE.Mesh).material;
    if (Array.isArray(m)) m.forEach(patchLantern); else if (m) patchLantern(m);
  });
}
