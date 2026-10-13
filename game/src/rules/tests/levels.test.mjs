import test from 'node:test';
import assert from 'node:assert/strict';
import { GameSession } from '../session.ts';
import { EventBus } from '../../core/events.ts';
import { LEVELS, LevelManager, judgeLevel } from '../../levels/manager.ts';
import { Enemies } from '../../enemies/enemies.ts';
import { Land } from '../land.ts';
import { obstacleGrid, ACTOR_RADIUS } from '../../world/obstacles.ts';
import { astar } from '../../pathfinding/astar.ts';

const input = (action) => ({ pressed: key => key === action, held: () => false, actions: { lanternDelta: 0 } });
function setup(t, level = 'grove') {
  const bus = new EventBus(), position = { x: 0, z: 0 }, events = [];
  bus.on('game-event', event => events.push(event));
  const session = new GameSession('localhost:8765', bus, position, level);
  t.after(() => session.dispose());
  session.select('sleepy');
  return { bus, session, position, events };
}
function resolveCurrent(session, position) {
  const shard = session.shards.sites.find(site => site.active && !site.resolved);
  assert(shard, 'a fresh level has an unresolved active shard');
  Object.assign(position, { x: shard.x, z: shard.z });
  session.shards.update(1.5, position, 12, true, session.faction);
  return shard.id;
}
function leave(session, position) {
  session.enemies.reset();
  Object.assign(position, session.levels.current.exit);
  session.update(1 / 60);
  assert.equal(session.levels.transitioning, true);
  for (let step = 0; step < 80; step++) session.update(1 / 60);
  assert.equal(session.levels.transitioning, false);
}

test('judge starts seed only completed earlier levels and load one fresh shard', t => {
  for (const [level, previous, active, zone] of [
    ['grove', [], ['s3', 's4'], 'glade'], ['hollow', ['s3'], ['s1', 's2'], 'hollow'], ['deepwood', ['s3', 's1'], ['s5', 's6'], 'rootdeep'],
  ]) {
    const { session } = setup(t, level);
    assert.equal(session.levels.current.id, level);
    assert.equal(session.run.shards, previous.length);
    assert.deepEqual(session.shards.sites.filter(site => site.resolved).map(site => site.id).sort(), [...previous].sort());
    const fresh = session.shards.sites.filter(site => site.active && !site.resolved);
    assert.equal(fresh.length, 1);
    assert(active.includes(fresh[0].id));
    assert.equal(session.state().zone, zone);
    assert.equal(session.run.result, null);
    assert.equal(session.state().shards_total, 3);
  }
  assert.equal(judgeLevel('?level=hollow'), 'hollow');
  assert.equal(judgeLevel('?level=deepwood'), 'deepwood');
  assert.equal(judgeLevel('?level=unknown'), 'grove');
});

test('all three levels preserve run progress and win only at the final exit', t => {
  const { session, position, events } = setup(t);
  session.enemies.reset();
  session.run.hurt(0.2);
  session.run.update(9);
  session.frame(input('ask'));
  const hp = session.run.hp, asks = session.asksUsed, resolved = [];
  for (const level of ['grove', 'hollow', 'deepwood']) {
    assert.equal(session.levels.current.id, level);
    session.enemies.reset();
    Object.assign(position, session.levels.current.exit);
    session.update(1 / 60);
    assert.equal(session.levels.transitioning, false, 'exit stays shut until its shard resolves');
    resolved.push(resolveCurrent(session, position));
    assert.equal(session.run.phase, 'playing', 'resolving the last shard still requires the final exit');
    assert.equal(session.run.hp, hp);
    assert.equal(session.asksUsed, asks);
    if (level !== 'deepwood') {
      const land = [...session.land.cells], elapsed = session.elapsed;
      leave(session, position);
      assert.deepEqual(session.land.cells, land);
      assert(session.elapsed >= elapsed && session.elapsed - elapsed < 0.2);
    }
  }
  session.enemies.reset();
  Object.assign(position, session.levels.current.exit);
  session.update(1 / 60);
  assert.equal(session.run.result, 'win');
  assert.equal(session.run.shards, 3);
  assert.deepEqual(session.shards.sites.filter(site => site.resolved).map(site => site.id).sort(), [...resolved].sort());
  session.update(1);
  assert.equal(events.filter(event => event.kind === 'run_end').length, 1);
});

test('curtain blocks asks, pulses and director effects, and shrine removal freezes it', t => {
  const { bus, session, position } = setup(t);
  session.enemies.reset();
  const resolved = resolveCurrent(session, position);
  Object.assign(position, session.levels.current.exit);
  session.update(1 / 60);
  assert.equal(session.paused, true);
  const before = { hp: session.run.hp, elapsed: session.elapsed, asks: session.asksUsed, land: [...session.land.cells] };
  session.frame(input('ask'));
  bus.emit('relic', { type: 'relic', knob: 0.5, button: 'down' });
  bus.emit('pulse', { x: 20, z: 0 });
  bus.emit('director', { type: 'director', id: 'transition-test', line: '', mood: 'calm', spread: { zone: 'hollow', amount: 1 }, spawn: { kind: 'chomper', count: 2, zone: 'glade' }, hint: null, source: 'scripted', latency_ms: 0 });
  session.select('empty');
  bus.emit('pause', { paused: false });
  session.update(5);
  assert.equal(session.levels.current.id, 'grove');
  assert.equal(session.levels.transitioning, true);
  assert.equal(session.run.phase, 'paused');
  assert.equal(session.elapsed, before.elapsed);
  assert.equal(session.asksUsed, before.asks);
  assert.equal(session.run.hp, before.hp);
  assert.deepEqual(session.land.cells, before.land);
  assert.equal(session.enemies.enemies.length, 0);
  session.select('angry');
  assert.equal(session.faction, 'blight');
  assert.equal(session.paused, true);
  for (let step = 0; step < 80; step++) session.update(1 / 60);
  assert.equal(session.levels.current.id, 'hollow');
  assert.equal(session.paused, false);
  assert.equal(session.run.shards, 1);
  assert.equal(session.shards.sites.find(site => site.id === resolved).resolved, true);
  assert(session.enemies.enemies.every(enemy => enemy.kind === 'petalborn'));
});

test('loss ends once and a fresh judge run resets HP, asks and resolved sites', t => {
  const { session, events } = setup(t, 'deepwood');
  session.frame(input('ask'));
  resolveCurrent(session, { x: 0, z: 0 });
  session.run.hurt(1);
  session.run.hurt(1);
  assert.equal(session.run.result, 'lose');
  assert.equal(events.filter(event => event.kind === 'run_end').length, 1);
  session.update(20);
  assert.equal(session.run.phase, 'ending');
  session.run.reset();
  assert.equal(session.run.phase, 'attract');
  assert.equal(session.enemies.enemies.length, 0);
  assert.equal(session.shards.sites.filter(site => site.active).length, 0);
  session.select('angry');
  assert.equal(session.run.hp, 1);
  assert.equal(session.asksUsed, 0);
  assert.equal(session.run.shards, 2);
  assert.equal(session.shards.sites.find(site => site.id === 's5').resolved, false);
});

test('waves trigger once per level, stay frozen when paused and reset for replay', () => {
  const manager = new LevelManager('hollow'), waves = [];
  const spawn = (zone, count) => waves.push({ zone, count });
  manager.update(1000, false, () => {}, spawn);
  assert.equal(waves.length, 0);
  manager.update(1000, true, () => {}, spawn);
  assert.deepEqual(waves, manager.current.waves.map(({ zone, count }) => ({ zone, count })));
  manager.update(1000, true, () => {}, spawn);
  assert.equal(waves.length, manager.current.waves.length);
  manager.reset();
  manager.update(1000, true, () => {}, spawn);
  assert.equal(waves.length, manager.current.waves.length * 2);
});

test('level shards and exits are reachable and every enemy spawn clears bounds and obstacles', () => {
  const cell = point => ({ x: Math.floor(point.x + 30), y: Math.floor(point.z + 20) });
  for (const level of Object.values(LEVELS)) {
    const grid = obstacleGrid(level.obstacles, level.bounds), start = cell(level.start);
    assert(grid[start.y]?.[start.x], `${level.id} start is open`);
    for (const target of [...level.shards, level.exit]) {
      const goal = cell(target);
      assert(grid[goal.y]?.[goal.x], `${level.id} target is open`);
      assert(astar(grid, start, goal).length > 0, `${level.id} target is reachable`);
    }
    for (const random of [() => 0, () => 0.5, () => 0.999999]) {
      const enemies = new Enemies(new EventBus(), new Land(), random);
      enemies.configure(level, level.obstacles);
      for (const zone of ['hollow', 'glade', 'rootdeep']) enemies.spawn('chomper', 4, zone);
      for (const spawn of level.enemies) enemies.spawn('chomper', spawn.count, spawn.zone, spawn.x === undefined ? undefined : { x: spawn.x, z: spawn.z });
      for (const enemy of enemies.enemies) {
        assert(enemy.x >= level.bounds.minX + ACTOR_RADIUS && enemy.x <= level.bounds.maxX - ACTOR_RADIUS, `${level.id} enemy x clearance`);
        assert(enemy.z >= level.bounds.minZ + ACTOR_RADIUS && enemy.z <= level.bounds.maxZ - ACTOR_RADIUS, `${level.id} enemy z clearance`);
        assert(level.obstacles.every(obstacle => Math.hypot(enemy.x - obstacle.x, enemy.z - obstacle.z) >= obstacle.r + ACTOR_RADIUS), `${level.id} enemy prop clearance`);
      }
    }
  }
});
