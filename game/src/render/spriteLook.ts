import * as THREE from 'three';

// Shared finish for every pixel card (cast, enemies, props, shards): a rim of the key light on
// the silhouette edge that faces it (gold sun by day, violet moon by night), and a soft tint of
// the ground color at the feet so cards sit in the world instead of floating on it.
// One set of uniforms for all cards; Lighting updates it every frame.
export const spriteLook = {
  uRim: { value: new THREE.Color(0xffdf9e) },
  uRimStrength: { value: 0.42 },
  uFeet: { value: new THREE.Color(0x4a5a3a) },
  uLift: { value: 0.35 },
};

export function lookSprite<T extends THREE.MeshLambertMaterial>(mat: T): T {
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (shader, renderer) => {
    prev.call(mat, shader, renderer);
    Object.assign(shader.uniforms, spriteLook);
    shader.vertexShader = 'varying vec2 vCardUv;\n' + shader.vertexShader.replace('#include <uv_vertex>', '#include <uv_vertex>\n  vCardUv = uv;');
    shader.fragmentShader = 'uniform vec3 uRim;\nuniform float uRimStrength;\nuniform vec3 uFeet;\nuniform float uLift;\nvarying vec2 vCardUv;\n' + shader.fragmentShader
      .replace('#include <map_fragment>', `#include <map_fragment>
  diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * uFeet * 1.6, (1.0 - smoothstep(0.0, 0.12, vCardUv.y)) * 0.2);`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
  {
    // Mirrored cards (scale.x = -1) render back faces, so the light side flips with them.
    vec2 tx = 1.0 / vec2(textureSize(map, 0));
    vec2 toLight = vec2(gl_FrontFacing ? -2.0 : 2.0, 2.0) * tx;
    float rim = 1.0 - texture2D(map, vMapUv + toLight).a;
    totalEmissiveRadiance += uRim * rim * uRimStrength * diffuseColor.rgb * 1.4;
    // Sprites stay readable against the ground, as in HD-2D games: a little of their own color is self-lit.
    totalEmissiveRadiance += diffuseColor.rgb * uLift;
  }`);
  };
  mat.customProgramCacheKey = () => 'spriteLook';
  return mat;
}

// Hard pixels when a card is drawn larger than its art, smooth mips when it is smaller.
export function crisp(texture: THREE.Texture): void {
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.needsUpdate = true;
}

export function updateSpriteLook(night: number): void {
  spriteLook.uRim.value.setHex(0xffdf9e).lerp(new THREE.Color(0xb59cff), night);
  spriteLook.uRimStrength.value = THREE.MathUtils.lerp(0.42, 0.6, night);
  spriteLook.uFeet.value.setHex(0x4a5a3a).lerp(new THREE.Color(0x2a1a40), night);
  spriteLook.uLift.value = THREE.MathUtils.lerp(0.35, 0.22, night);
}
