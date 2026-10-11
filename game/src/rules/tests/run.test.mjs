import test from 'node:test';
import assert from 'node:assert/strict';
import {Run} from '../run.ts';
import {Lantern} from '../lantern.ts';
import {Shards} from '../shards.ts';
import {Land} from '../land.ts';
import {EventBus} from '../../core/events.ts';
import {GameSession} from '../session.ts';

const setup=()=>{const bus=new EventBus(),run=new Run(bus),messages=[];bus.on('pause',m=>run.pause(m.paused));bus.on('game-event',m=>messages.push(m));return {bus,run,messages}};
test('relic button charges once per edge without sending a duplicate network ask',()=>{
 const bus=new EventBus(),session=new GameSession('localhost:8765',bus,{x:0,z:0});session.select('sleepy');let sends=0;session.client.send=()=>{sends++;return true};
 bus.emit('relic',{type:'relic',knob:0.5,button:'down'});bus.emit('relic',{type:'relic',knob:0.6,button:'down'});assert.equal(session.asksUsed,1);assert.equal(sends,0);
 bus.emit('relic',{type:'relic',knob:0.6,button:'up'});bus.emit('relic',{type:'relic',knob:0.6,button:'down'});assert.equal(session.asksUsed,2);assert.equal(sends,0);session.dispose();
});
test('run shrine pause cannot be bypassed and flips preserve progress',()=>{
 const {run,messages}=setup();run.select('sleepy');run.update(10);run.resolve('s1','hollow');run.select('empty');run.pause(false);assert.equal(run.phase,'paused');run.update(10);assert.equal(run.elapsed,10);
 run.select('hand');assert.equal(run.phase,'paused');run.select('angry');assert.equal(run.phase,'playing');assert.equal(run.shards,1);assert.equal(run.faction,'blight');assert(messages.some(m=>m.kind==='faction_flip'));
});
test('three unique shards win, payload is final, and ending resets after 20 seconds',()=>{
 const {run,messages}=setup();run.select('sleepy');run.update(12);run.ask();run.resolve('s1','hollow');run.resolve('s1','hollow');assert.equal(run.shards,1);run.resolve('s3','glade');run.resolve('s5','rootdeep');assert.equal(run.phase,'ending');
 assert.deepEqual(messages.find(m=>m.kind==='run_end').data,{faction:'bloom',result:'win',shards:3,asks_used:1,elapsed_s:12});run.select('angry');assert.equal(run.faction,'bloom');run.update(19);assert.equal(run.phase,'ending');run.update(1);assert.equal(run.phase,'attract');assert.equal(run.faction,null);
});
test('zero HP loses once and ignores actions in ending',()=>{
 const {run,messages}=setup();run.select('angry');for(let i=0;i<12;i++)run.hurt(0.1);assert.equal(run.hp,0);assert.equal(run.result,'lose');assert.equal(messages.filter(m=>m.kind==='run_end').length,1);assert.equal(run.ask(),false);
});
test('lantern clamps input, uses specified radii, and relic takes priority without duplicate asks',()=>{
 const bus=new EventBus(),lantern=new Lantern(bus);lantern.update(10,1);assert.equal(lantern.value,1);assert.equal(lantern.radius,12);assert.equal(lantern.detectionRange,14);
 bus.emit('relic',{type:'relic',knob:0.2,button:'down'});lantern.update(10,1);assert.equal(lantern.value,0.2);assert.equal(lantern.radius,4.8);lantern.dispose();
});
test('shards choose three sites, reveal once, reset interrupted hold and resolve at 1.5 seconds',()=>{
 const bus=new EventBus(),shards=new Shards(bus,()=>0),events=[];bus.on('game-event',m=>events.push(m));let resolved=0;bus.on('shard-resolved',()=>resolved++);shards.reset(true);assert.equal(shards.sites.filter(s=>s.active).length,3);
 const site=shards.sites.find(s=>s.active);const position={x:site.x,z:site.z};shards.update(0.8,position,3,true,'bloom');shards.update(0.1,position,3,false,'bloom');assert.equal(site.progress,0);shards.update(1.5,position,3,true,'bloom');assert(site.resolved);assert.equal(resolved,1);assert.equal(events.filter(m=>m.kind==='shard_found').length,1);
 const inactive=shards.sites.find(s=>!s.active);shards.hint({shard:inactive.id,riddle:'wrong',truthful:false});assert(inactive.hinted);assert.equal(inactive.visible,false);assert.notEqual(shards.nearest(position).id,site.id);
});
test('ask converts three percent of owned land and reset clears all session state',()=>{
 const land=new Land(()=>0);assert.equal(land.tax('bloom').length,36);assert.equal(land.share().bloom,1164/2400);
 const bus=new EventBus(),session=new GameSession('localhost:8765',bus,{x:0,z:0});session.select('sleepy');const before=session.land.share().bloom;
 const input={pressed:a=>a==='ask',held:()=>false,actions:{lanternDelta:0}};session.frame(input);assert.equal(session.asksUsed,1);assert(session.land.share().bloom<before);assert.equal(session.state().nearest_shard?.length,2);
 session.run.hurt(1);session.update(20);assert.equal(session.run.phase,'attract');assert.equal(session.enemies.enemies.length,0);assert.equal(session.shards.sites.filter(s=>s.active).length,0);session.dispose();
});
