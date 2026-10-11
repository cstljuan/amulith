import test from 'node:test';
import assert from 'node:assert/strict';
import {Land} from '../land.ts';
import {FallbackDirector} from '../fallbackDirector.ts';
import {EventBus} from '../../core/events.ts';
import {GameSession} from '../session.ts';

test('land reset, radial conversion, no-op conversion and change batches',()=>{
 const land=new Land(()=>0);assert.deepEqual(land.share(),{bloom:0.5,blight:0.5});assert.deepEqual(land.zoneShare('rootdeep'),{bloom:0,blight:1});
 let notifications=0;const off=land.onChange(changes=>{assert(changes.length);notifications++});
 const changes=land.convert(5,0,3,'bloom');assert(changes.length>0);assert(changes.every(c=>{const p=land.center(c.column,c.row);return Math.hypot(p.x-5,p.z)<=3}));
 assert.equal(land.convert(5,0,3,'bloom').length,0);assert.equal(notifications,1);off();land.reset();assert.equal(notifications,1);
});
test('spread converts exact zone share without affecting other zones',()=>{
 const land=new Land(()=>0);const hollow=land.zoneShare('hollow');assert.equal(land.spread('glade',0.15).length,120);assert.deepEqual(land.zoneShare('hollow'),hollow);assert.equal(land.zoneShare('glade').blight,0.65);
 land.spread('glade',1);assert.equal(land.zoneShare('glade').blight,1);assert.equal(land.spread('glade',1).length,0);
 assert.equal(land.spread('hollow',0.1).length,80);
});
test('offline director waits 25 active seconds and resets on connection/pause',()=>{
 const director=new FallbackDirector();assert.equal(director.update(24,false,true,'bloom'),null);const msg=director.update(1,false,true,'bloom');assert.equal(msg.source,'scripted');assert.equal(msg.type,'director');
 director.update(24,false,true,'bloom');director.update(1,true,true,'bloom');assert.equal(director.update(1,false,true,'bloom'),null);
 director.update(24,false,false,'bloom');assert.equal(director.update(1,false,true,'bloom'),null);
});
test('session shrine, pulse cooldown, game event forwarding and pause state',()=>{
 const bus=new EventBus(),position={x:0,z:0};const session=new GameSession('localhost:8765',bus,position);const emitted=[];bus.on('game-event',m=>emitted.push(m.kind));
 session.select('sleepy');assert.equal(session.faction,'bloom');assert.equal(session.paused,false);assert.deepEqual(emitted,['run_start']);
 // Keep this pulse/pause fixture outside either possible Grove shard's lantern range.
 Object.assign(position,{x:0,z:0});
 let pulses=0;bus.on('pulse-applied',()=>pulses++);bus.emit('pulse',{x:0,z:0});bus.emit('pulse',{x:5,z:0});assert.equal(pulses,1);
 session.update(0.6);bus.emit('pulse',{x:5,z:0});assert.equal(pulses,2);session.select('hand');assert.equal(session.paused,false);
 session.select('empty');assert.equal(session.paused,true);session.select('angry');assert.equal(session.faction,'blight');assert.deepEqual(emitted,['run_start','faction_flip']);
 session.dispose();
});
