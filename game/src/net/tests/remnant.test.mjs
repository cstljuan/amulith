import test from 'node:test';
import assert from 'node:assert/strict';
import {parseRemnant} from '../messages.ts';
import {RemnantClient} from '../remnant.ts';
import {EventBus} from '../../core/events.ts';

test('message boundary rejects malformed or incomplete data and preserves nullable telemetry',()=>{
 for(const raw of ['no json','null','[]','{}','{"type":"unknown"}','{"type":"shrine","state":"sleepy","confidence":2}','{"type":"thinking","active":1}','{"type":"relic","knob":0.5}'])assert.equal(parseRemnant(raw),null);
 const telemetry={type:'telemetry',gpu_pct:null,cpu_pct:0,ram_used_mb:null,ram_total_mb:null,power_mw:null,temp_c:48,tok_s:null};assert.deepEqual(parseRemnant(JSON.stringify(telemetry)),telemetry);
 const director={type:'director',id:'d',line:'Hi',mood:'calm',spread:null,spawn:null,hint:null,source:'scripted',latency_ms:0};assert.deepEqual(parseRemnant(JSON.stringify(director)),director);
 assert.equal(parseRemnant(JSON.stringify({...director,spawn:{kind:'chomper',count:99,zone:'glade'}})),null);
 assert.equal(parseRemnant(JSON.stringify({...director,spread:{zone:'glade',amount:-1}})),null);
});
test('client routes valid messages, ignores stale socket, retries and stops cleanly',async()=>{
 const sockets=[];const bus=new EventBus();const messages=[];bus.on('shrine',m=>messages.push(m));
 const factory=url=>{assert.equal(url,'ws://test:8765/ws');const s={readyState:0,sent:[],send(v){this.sent.push(JSON.parse(v))},close(){this.readyState=3;this.onclose?.()}};sockets.push(s);return s};
 const client=new RemnantClient('test:8765',bus,{socketFactory:factory,retryMs:5});client.start();const first=sockets[0];first.readyState=1;first.onopen();
 assert(client.connected);first.onmessage({data:'bad'});first.onmessage({data:JSON.stringify({type:'shrine',state:'sleepy',confidence:0.9})});assert.equal(messages.length,1);
 assert(client.send({type:'ask'}));assert.deepEqual(first.sent,[{type:'ask'}]);const stale=first.onmessage;first.close();assert(!client.connected);await new Promise(r=>setTimeout(r,20));assert.equal(sockets.length,2);
 stale({data:JSON.stringify({type:'shrine',state:'angry',confidence:0.9})});assert.equal(messages.length,1);client.dispose();await new Promise(r=>setTimeout(r,20));assert.equal(sockets.length,2);
});
