import * as THREE from 'three';

// Rolling heightfield around the playfield. The walkable 60 x 40 rectangle always sits inside a
// rounded, wavy basin (no straight edges anywhere); hills rise behind and beside it, and the near
// side banks down into the stream. The same boundary function exists in TS and GLSL.

export const TERRAIN_GLSL = `
float sdRoundRect(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }
float basinWave(vec2 p) { float a = atan(p.y / 20.0, p.x / 30.0); return max(1.0, 1.5 + 0.8 * sin(a * 5.0 + 1.3) + 0.6 * sin(a * 9.0 + 0.4) + 0.4 * sin(a * 14.0 + 2.1)); }
float basinD(vec2 p) { return sdRoundRect(p, vec2(30.5, 20.5), 4.0) - basinWave(p); }
`;

function sdRoundRect(x: number, z: number, bx: number, bz: number, r: number) {
  const qx = Math.abs(x) - bx + r, qz = Math.abs(z) - bz + r;
  return Math.hypot(Math.max(qx, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, qz), 0) - r;
}
function basinWave(x: number, z: number) {
  const a = Math.atan2(z / 20, x / 30);
  return Math.max(1, 1.5 + 0.8 * Math.sin(a * 5 + 1.3) + 0.6 * Math.sin(a * 9 + 0.4) + 0.4 * Math.sin(a * 14 + 2.1));
}
export const basinD = (x: number, z: number) => sdRoundRect(x, z, 30.5, 20.5, 4) - basinWave(x, z);
const smooth = (a: number, b: number, t: number) => { const k = Math.min(1, Math.max(0, (t - a) / (b - a))); return k * k * (3 - 2 * k); };
const roll = (x: number, z: number) => 0.5 + 0.25 * Math.sin(x * 0.21 + 1.7) + 0.2 * Math.sin(z * 0.27 - x * 0.09) + 0.15 * Math.sin((x + z) * 0.43);

export const WATER_Y = -1.25;

export function heightAt(x: number, z: number): number {
  const d = basinD(x, z);
  if (d <= 0) return -0.04;
  const hill = (1 - Math.exp(-d / 1.8)) * (2.4 + 3.4 * roll(x, z)) + Math.min(d, 14) * 0.18 + 0.22 * Math.exp(-((d - 0.7) ** 2) * 3);
  const bank = -1.45 * smooth(0, 1.8, d);
  const near = smooth(17, 21.5, z) * (1 - smooth(33, 40, Math.abs(x)));
  return hill * (1 - near) + bank * near;
}

export function createTerrain(grass: THREE.Texture, soil: THREE.Texture, cliff: THREE.Texture) {
  const W = 120, D = 86, cx = 0, cz = -4;
  const geometry = new THREE.PlaneGeometry(W, D, 240, 172);
  geometry.rotateX(-Math.PI / 2);
  const pos = geometry.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i) + cx, z = pos.getZ(i) + cz;
    pos.setXYZ(i, x, heightAt(x, z), z);
  }
  geometry.computeVertexNormals();
  const uniforms = { uSoil: { value: soil }, uCliff: { value: cliff }, uTile: { value: 2 } };
  const material = new THREE.MeshLambertMaterial({ map: grass });
  material.onBeforeCompile = shader => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWorldP;\nvarying vec3 vWorldN;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWorldP = (modelMatrix * vec4(position, 1.0)).xyz;\nvWorldN = normal;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWorldP;\nvarying vec3 vWorldN;\nuniform sampler2D uSoil, uCliff;\nuniform float uTile;')
      .replace('#include <map_fragment>', `
vec2 tuv = vWorldP.xz / uTile;
float dn = 0.5 + 0.5 * sin(vWorldP.x * 0.13 + 1.0) * sin(vWorldP.z * 0.17);
vec2 tuv2 = mat2(0.8, -0.6, 0.6, 0.8) * tuv * 0.63 + 0.37;
vec3 gr = mix(texture2D(map, tuv).rgb, texture2D(map, tuv2).rgb, dn);
vec3 so = mix(texture2D(uSoil, tuv).rgb, texture2D(uSoil, tuv2).rgb, dn);
vec3 g = mix(gr, so, smoothstep(6.0, 18.0, vWorldP.x));
float steep = smoothstep(0.82, 0.55, normalize(vWorldN).y);
vec2 cuv = vec2((vWorldP.x + vWorldP.z) / 4.0, vWorldP.y / 4.0);
vec3 c = texture2D(uCliff, cuv).rgb;
diffuseColor.rgb *= mix(g, c, steep);`);
  };
  const mesh = new THREE.Mesh(geometry, material);
  return {
    mesh, uniforms,
    dispose: () => { geometry.dispose(); material.dispose(); },
  };
}
