import * as THREE from 'three';
import type { Shards } from './shards.ts';
export class ShardView {
  readonly group=new THREE.Group();
  private geometry=new THREE.PlaneGeometry(0.9,1.3);
  private material=new THREE.MeshBasicMaterial({color:0xf4deb2,side:THREE.DoubleSide});
  private hintMaterial=new THREE.MeshBasicMaterial({color:0xe5a061,side:THREE.DoubleSide,wireframe:true});
  private meshes:THREE.Mesh[]=[];
  private hints:THREE.Mesh[]=[];
  constructor(private shards:Shards){
    for(const site of shards.sites){const mesh=new THREE.Mesh(this.geometry,this.material);mesh.position.set(site.x,0.8,site.z);this.meshes.push(mesh);this.group.add(mesh);
      const hint=new THREE.Mesh(this.geometry,this.hintMaterial);hint.scale.setScalar(1.5);hint.position.set(site.x,1.8,site.z);this.hints.push(hint);this.group.add(hint);}
  }
  render(camera:THREE.Camera):void{
    this.shards.sites.forEach((site,i)=>{
      const mesh=this.meshes[i],hint=this.hints[i];mesh.visible=site.visible;hint.visible=site.hinted&&!site.resolved;
      mesh.rotation.y=hint.rotation.y=Math.atan2(camera.position.x-site.x,camera.position.z-site.z);mesh.scale.y=1+site.progress/1.5*0.3;
    });
  }
  dispose():void{this.geometry.dispose();this.material.dispose();this.hintMaterial.dispose();this.group.clear();}
}
