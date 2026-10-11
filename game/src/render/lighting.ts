import * as THREE from 'three';

// Faction is time of day: Bloom is golden late afternoon, Blight is violet night, no choice yet is dusk.
// Four lights total, no shadow maps (the LLM shares the GPU).
interface Mood { sky: number; ground: number; hemi: number; sun: number; sunColor: number; fog: number; fogDensity: number; lantern: number }
const DAY: Mood = { sky: 0xfff1d6, ground: 0x5a7a52, hemi: 1.15, sun: 2.4, sunColor: 0xffe6c2, fog: 0xc9d4b8, fogDensity: 0.01, lantern: 1.2 };
const NIGHT: Mood = { sky: 0x5a5fa8, ground: 0x1e1230, hemi: 0.32, sun: 0.3, sunColor: 0x8c7cff, fog: 0x15102a, fogDensity: 0.022, lantern: 9 };

export class Lighting {
  readonly hemi = new THREE.HemisphereLight();
  readonly sun = new THREE.DirectionalLight();
  readonly lantern = new THREE.PointLight(0xffc56b, 3, 12, 1.6);
  readonly fog = new THREE.FogExp2(0, 0.01);
  readonly clear = new THREE.Color();
  night = 0.5;
  private target = 0.5;
  lanternRadius = 7.5;
  private b = new THREE.Color();

  constructor(private scene: THREE.Scene) {
    // Replace the scaffold's placeholder lights with these.
    scene.children.filter(o => (o as THREE.Light).isLight).forEach(o => { (o as THREE.Light).intensity = 0; });
    this.sun.position.set(-14, 22, 10);
    this.lantern.position.set(0, 2.2, 0);
    scene.add(this.hemi, this.sun, this.sun.target, this.lantern);
    scene.fog = this.fog;
    this.apply();
  }

  setFaction(faction: 'bloom' | 'blight' | null): void { this.target = faction === 'bloom' ? 0 : faction === 'blight' ? 1 : 0.5; }
  setLanternRadius(radius: number): void { this.lanternRadius = radius; }

  update(dt: number, player: THREE.Vector3, time: number, reducedMotion: boolean): void {
    const d = this.target - this.night;
    this.night = reducedMotion ? this.target : this.night + d * (1 - Math.exp(-dt * 1.4));
    this.lantern.position.set(player.x + 0.4, 2.2, player.z + 0.3);
    this.lantern.distance = this.lanternRadius * 1.7;
    const flicker = reducedMotion ? 1 : 1 + Math.sin(time * 11) * 0.03 + Math.sin(time * 5.3) * 0.04;
    this.lantern.intensity = THREE.MathUtils.lerp(DAY.lantern, NIGHT.lantern, this.night) * flicker;
    this.apply();
  }

  private mix(key: keyof Mood, out: THREE.Color) { return out.setHex(DAY[key]).lerp(this.b.setHex(NIGHT[key]), this.night); }

  private apply(): void {
    const t = this.night, lerp = THREE.MathUtils.lerp;
    this.mix('sky', this.hemi.color); this.mix('ground', this.hemi.groundColor);
    this.hemi.intensity = lerp(DAY.hemi, NIGHT.hemi, t);
    this.mix('sunColor', this.sun.color); this.sun.intensity = lerp(DAY.sun, NIGHT.sun, t);
    this.mix('fog', this.fog.color); this.fog.density = lerp(DAY.fogDensity, NIGHT.fogDensity, t);
    this.clear.copy(this.fog.color);
  }

  dispose(): void { this.scene.remove(this.hemi, this.sun, this.sun.target, this.lantern); this.lantern.dispose(); this.sun.dispose(); this.hemi.dispose(); }
}
