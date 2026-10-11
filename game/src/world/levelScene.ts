import * as THREE from 'three';
import type { GameSession } from '../rules/session.ts';
import { LEVEL_LORE } from '../lore/levels.ts';
import { patchTree } from '../render/lanternLight.ts';

// Reuse existing art cards while the art lane supplies level-specific sheets.
export function installLevelScene(scene: THREE.Scene, session: GameSession, staticGroups: THREE.Object3D[], pitch: number, position: {x:number;z:number}) {
  const group=new THREE.Group();group.name='level-layout'; scene.add(group);
  let resources: {dispose():void}[]=[];
  const loader=new THREE.TextureLoader();
  let shown='';
  const overlay=document.createElement('aside');
  overlay.setAttribute('aria-live','polite');overlay.dataset.levelOverlay='';
  overlay.style.cssText='position:fixed;left:18px;top:72px;max-width:360px;padding:10px;background:#1b2029db;color:#f1dfb6;font:14px Georgia;pointer-events:none;z-index:25;white-space:pre-line';
  document.body.append(overlay);
  const curtain=document.createElement('div');
  curtain.style.cssText='position:fixed;inset:0;background:#c9b58c;background-image:linear-gradient(90deg,#b39b75 0%,#d6c39e 25%,#c9b58c 50%,#d6c39e 75%,#b39b75 100%);color:#302d29;display:none;align-items:center;justify-content:center;font:28px Georgia;z-index:100;pointer-events:none';
  curtain.setAttribute('aria-live','polite');curtain.dataset.levelCurtain='';document.body.append(curtain);
  const rebuild=()=>{
    resources.forEach(r=>r.dispose());resources=[];group.clear();
    const level=session.levels.current;shown=level.id;
    staticGroups.forEach((object,index)=>{object.visible=index===0||level.id==='grove';});
    // Keep the existing live land mask and faction sprigs on every level.
    staticGroups[0]?.traverse(object=>{if(object instanceof THREE.Mesh&&! (object instanceof THREE.InstancedMesh)){ const materials=Array.isArray(object.material)?object.material:[object.material];for(const material of materials)if(material instanceof THREE.MeshLambertMaterial)material.color.setHex(level.id==='grove'?0xffffff:level.terrain.groundTint); }});
    if(level.id!=='grove') {
      const boundary: typeof level.props = [];
      for(let x=level.bounds.minX;x<=level.bounds.maxX;x+=3)for(const z of [level.bounds.minZ-0.8,level.bounds.maxZ+0.8])boundary.push({x,z,asset:level.id==='hollow'?'props/mushrooms.png':'props/blight-tree.png',width:3,height:level.id==='hollow'?3:5});
      for(let z=level.bounds.minZ+3;z<level.bounds.maxZ;z+=3)for(const x of [level.bounds.minX-0.8,level.bounds.maxX+0.8])boundary.push({x,z,asset:level.id==='hollow'?'props/mushrooms.png':'props/blight-tree.png',width:3,height:level.id==='hollow'?3:5});
      const batches=new Map<string,typeof level.props>();
      for(const prop of [...level.props,...boundary]){
        const key=[prop.asset,prop.width,prop.height,prop.tint??level.terrain.propTint].join('|');
        const batch=batches.get(key)??[];batch.push(prop);batches.set(key,batch);
      }
      for(const props of batches.values()){
        const prop=props[0];
        const map=loader.load(import.meta.env.BASE_URL+'art/'+prop.asset);map.colorSpace=THREE.SRGBColorSpace;map.magFilter=THREE.NearestFilter;
        const geo=new THREE.PlaneGeometry(prop.width,prop.height).translate(0,prop.height/2,0);
        const mat=new THREE.MeshLambertMaterial({map,color:prop.tint??level.terrain.propTint,alphaTest:0.5,side:THREE.DoubleSide});
        const cards=new THREE.InstancedMesh(geo,mat,props.length);
        const tilt=new THREE.Quaternion().setFromEuler(new THREE.Euler(-(Math.PI/2-pitch)*0.85,0,0));
        const matrix=new THREE.Matrix4(),point=new THREE.Vector3(),scale=new THREE.Vector3(1,1,1);
        props.forEach((site,index)=>cards.setMatrixAt(index,matrix.compose(point.set(site.x,0,site.z),tilt,scale)));
        group.add(cards);resources.push(map,geo,mat,cards);
      }
    }
    patchTree(group);
    const ringGeo=new THREE.RingGeometry(level.exit.radius*0.75,level.exit.radius,32);
    const ringMat=new THREE.MeshBasicMaterial({color:0xf5d989,side:THREE.DoubleSide,transparent:true,opacity:0.65});
    const ring=new THREE.Mesh(ringGeo,ringMat);ring.rotation.x=-Math.PI/2;ring.position.set(level.exit.x,0.08,level.exit.z);group.add(ring);resources.push(ringGeo,ringMat);
  };
  rebuild();
  return {
    frame(){
      if(shown!==session.levels.current.id)rebuild();
      const level=session.levels.current,lore=LEVEL_LORE[level.id];
      const ready=level.shards.filter(candidate=>session.shards.sites.find(site=>site.id===candidate.id)?.resolved).length>=level.shardCount;
      const sign=level.signs.find(site=>Math.hypot(site.x-position.x,site.z-position.z)<3);
      const signText=sign?lore.signs.find(s=>s.id===sign.id)?.text:'';
      const text=lore.name+'\n'+lore.subtitle+'\n'+(session.levels.elapsed<8?lore.introLines[0]+'\n':'')+(signText?signText+'\n':'')+(ready?'Follow the gold ring to '+(level.exit.next?LEVEL_LORE[level.exit.next].name:'finish the run')+'.':'Find the shard, then follow the gold ring.');
      if(overlay.textContent!==text)overlay.textContent=text;
      curtain.style.display=session.levels.transitioning?'flex':'none';
      const departing=session.levels.departing?LEVEL_LORE[session.levels.departing]:lore;
      const outro=session.faction==='bloom'?departing.outroBloom:departing.outroBlight;
      const curtainText=session.levels.departing===level.id?outro[0]:lore.name;
      if(curtain.textContent!==curtainText)curtain.textContent=curtainText;
    },
    dispose(){resources.forEach(r=>r.dispose());scene.remove(group);overlay.remove();curtain.remove();}
  };
}
