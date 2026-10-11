import test from 'node:test';
import assert from 'node:assert/strict';
import {Enemies} from '../enemies.ts';
import {EventBus} from '../../core/events.ts';
import {Land} from '../../rules/land.ts';

test('opposite enemies attack with one-second cooldown and two pulses defeat them',()=>{
 const manager=new Enemies(new EventBus(),new Land(),()=>0.5);manager.spawn('chomper',1,'glade');let damage=0;
 manager.update(0.1,{x:0,z:0},'bloom',9,n=>damage+=n);assert.equal(damage,0.1);manager.update(0.5,{x:0,z:0},'bloom',9,n=>damage+=n);assert.equal(damage,0.1);
 manager.update(0.51,{x:0,z:0},'bloom',9,n=>damage+=n);assert.equal(damage,0.2);manager.pulse(0,0);assert.notEqual(manager.enemies[0].state,'defeated');manager.pulse(0,0);assert.equal(manager.enemies[0].state,'defeated');
 manager.update(1,{x:0,z:0},'bloom',9,n=>damage+=n);assert.equal(damage,0.2);
});
test('land conversion, faction flip and spawn limit stay bounded',()=>{
 const land=new Land(),manager=new Enemies(new EventBus(),land,()=>0.5);manager.spawn('chomper',1,'hollow');const before=land.share().blight;
 manager.update(1,{x:25,z:15},'bloom',4,()=>{});assert(land.share().blight>before);manager.flip('blight');assert.equal(manager.enemies[0].kind,'petalborn');
 for(let i=0;i<10;i++)manager.spawn('petalborn',4,'glade');assert.equal(manager.enemies.length,24);
});
test('chase target refresh waits for the path cadence',()=>{
 const manager=new Enemies(new EventBus(),new Land(),()=>0.5);manager.spawn('chomper',1,'glade');
 manager.update(0.1,{x:7,z:0},'bloom',14,()=>{});const first={...manager.enemies[0].target};manager.update(0.1,{x:9,z:0},'bloom',14,()=>{});assert.deepEqual(manager.enemies[0].target,first);
 manager.update(0.5,{x:9,z:0},'bloom',14,()=>{});assert.notDeepEqual(manager.enemies[0].target,first);
});
