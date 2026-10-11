import * as THREE from 'three';
import type { EnemyKind } from '@protocol/messages';
import type { Enemies } from './enemies.ts';

/** Original procedural placeholders until the visuals lane supplies authored art. */
export class EnemyView {
  readonly group = new THREE.Group();
  private geometry = new THREE.PlaneGeometry(1.8,2);
  private textures: THREE.CanvasTexture[] = [];
  private materials: Record<EnemyKind,THREE.MeshBasicMaterial>;
  private meshes = new Map<number,THREE.Mesh>();
  constructor(private enemies: Enemies) {
    const make = (kind: EnemyKind) => {
      const canvas = document.createElement('canvas');canvas.width=128;canvas.height=128;const ctx=canvas.getContext('2d')!;
      ctx.fillStyle=kind==='chomper'?'#aa79c1':'#e0bc74';ctx.strokeStyle='#202d2a';ctx.lineWidth=7;ctx.beginPath();
      if(kind==='chomper'){ctx.moveTo(18,108);ctx.lineTo(30,35);ctx.lineTo(48,65);ctx.lineTo(64,15);ctx.lineTo(84,65);ctx.lineTo(104,35);ctx.lineTo(110,108);ctx.closePath();}
      else{for(let i=0;i<8;i++){const a=i*Math.PI/4;ctx.lineTo(64+Math.cos(a)*(i%2?26:50),64+Math.sin(a)*(i%2?26:50));}ctx.closePath();}
      ctx.fill();ctx.stroke();ctx.fillStyle='#202d2a';ctx.fillRect(43,64,9,12);ctx.fillRect(76,64,9,12);
      const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;this.textures.push(texture);
      return new THREE.MeshBasicMaterial({map:texture,alphaTest:0.5,side:THREE.DoubleSide});
    };
    this.materials={chomper:make('chomper'),petalborn:make('petalborn')};
  }
  render(camera: THREE.Camera): void {
    const active=new Set<number>();
    for(const enemy of this.enemies.enemies){
      if(enemy.state==='defeated')continue;active.add(enemy.id);
      let mesh=this.meshes.get(enemy.id);if(!mesh){mesh=new THREE.Mesh(this.geometry,this.materials[enemy.kind]);this.meshes.set(enemy.id,mesh);this.group.add(mesh);}
      mesh.material=this.materials[enemy.kind];mesh.position.set(enemy.x,1,enemy.z);mesh.rotation.y=Math.atan2(camera.position.x-enemy.x,camera.position.z-enemy.z);
    }
    for(const [id,mesh]of this.meshes)if(!active.has(id)){this.group.remove(mesh);this.meshes.delete(id);}
  }
  dispose(): void {this.geometry.dispose();this.textures.forEach(t=>t.dispose());Object.values(this.materials).forEach(m=>m.dispose());this.meshes.clear();this.group.clear();}
}
