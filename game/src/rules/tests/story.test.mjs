import test from 'node:test';
import assert from 'node:assert/strict';
import { FallbackDirector } from '../fallbackDirector.ts';
import { GameSession } from '../session.ts';
import { EventBus } from '../../core/events.ts';
import { AMBIENT, REACTIONS } from '../../story/lines.ts';
import { SCENES, CLOSINGS } from '../../story/scenes.ts';
import { NPC_LORE } from '../../lore/npcs.ts';
import { RemnantClient } from '../../net/remnant.ts';

const state = faction => ({ type:'state',faction,zone:'glade',shards_found:0,shards_total:3,land:{bloom:0.5,blight:0.5},hp:1,lantern:0.5,enemies_near:0,elapsed_s:25,asks_used:0 });
test('portable startup never creates a WebSocket', () => {
  let sockets=0;const client=new RemnantClient('',new EventBus(),{socketFactory:()=>{sockets++;throw Error('unexpected')}});
  client.start();client.start();assert.equal(sockets,0);assert.equal(client.connected,false);client.dispose();
});
test('authored beats cover every NPC route and ending without duplicate writing or overlong Amulith speech', () => {
  const banks=[...Object.values(AMBIENT).flatMap(v=>Object.values(v).flat()),...Object.values(REACTIONS).flatMap(v=>Object.values(v).flat())];
  const beats=[...SCENES.flatMap(s=>[...s.beats,...s.choices.flatMap(c=>c.beats)]),...Object.values(CLOSINGS).flatMap(v=>Object.values(v).flat())];
  const all=[...banks,...beats.map(b=>b.text)];assert(all.length>=650);assert.equal(new Set(all).size,all.length);
  for(const npc of NPC_LORE)for(const faction of ['bloom','blight'])assert(SCENES.some(s=>s.id===`${npc.id}-${faction}`&&s.level===npc.level));
  for(const line of [...banks,...beats.filter(b=>b.speaker==='Amulith').map(b=>b.text)])assert(line.split(/\s+/).length<=22,line);
  assert(beats.every(b=>!['T.K.','Lenny'].includes(b.speaker)));
});
test('ambient selection varies by level and does not repeat before its bank is exhausted', () => {
  for(const faction of ['bloom','blight'])for(const level of ['grove','hollow','deepwood']){
    const d=new FallbackDirector(),heard=[];
    for(let i=0;i<AMBIENT[level][faction].length;i++)heard.push(d.update(25,false,true,faction,state(faction),level).line);
    assert.equal(new Set(heard).size,heard.length);assert(heard.every(line=>AMBIENT[level][faction].includes(line)));
    d.reset();assert.equal(d.update(25,false,true,faction,state(faction),level).line,heard[0]);
  }
});
test('injury events stay bounded and queued shard reactions reset between runs', () => {
  const d=new FallbackDirector();for(let i=0;i<100;i++)d.event({type:'event',kind:'player_hurt',data:{}},state('bloom'));
  assert.equal(d.update(8,false,true,'bloom',state('bloom'),'grove').line,REACTIONS.hurt.bloom[0]);
  assert.equal(d.update(8,false,true,'bloom',state('bloom'),'grove'),null);
  d.event({type:'event',kind:'shard_resolved',data:{}},state('bloom'));d.reset();assert.equal(d.update(8,false,true,'bloom',state('bloom'),'grove'),null);
});
test('offline asks answer immediately, charge once, and target the actual unresolved site in the current level', () => {
  for(const faction of ['bloom','blight'])for(const level of ['grove','hollow','deepwood']){
    const bus=new EventBus(),position={x:0,z:0},s=new GameSession('',bus,position,level),answers=[];bus.on('director',m=>answers.push(m));s.select(faction==='bloom'?'sleepy':'angry');
    const nearest=s.shards.nearest(position);s.frame({pressed:a=>a==='ask',held:()=>false,actions:{lanternDelta:0}});
    assert.equal(s.asksUsed,1);assert.equal(answers.length,1);assert.equal(answers[0].hint.shard,nearest.id);assert.equal(answers[0].hint.truthful,true);assert.equal(answers[0].source,'scripted');
    nearest.resolved=true;s.frame({pressed:a=>a==='ask',held:()=>false,actions:{lanternDelta:0}});assert.equal(answers.at(-1).hint,null);s.dispose();
  }
});
