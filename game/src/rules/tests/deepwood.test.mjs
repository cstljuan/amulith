import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { DEEPWOOD } from '../../levels/deepwood.ts';
import { LEVEL_LORE } from '../../lore/levels.ts';
import { LevelManager } from '../../levels/manager.ts';
import { obstacleGrid, collideWith, ACTOR_RADIUS } from '../../world/obstacles.ts';
import { astar } from '../../pathfinding/astar.ts';
import { EventBus } from '../../core/events.ts';
import { Enemies } from '../../enemies/enemies.ts';
import { Land } from '../land.ts';
import { GameSession } from '../session.ts';

const cell = point => ({ x: Math.floor(point.x + 30), y: Math.floor(point.z + 20) });
const clear = point => {
  const bounds = DEEPWOOD.bounds;
  assert(point.x >= bounds.minX + ACTOR_RADIUS && point.x <= bounds.maxX - ACTOR_RADIUS);
  assert(point.z >= bounds.minZ + ACTOR_RADIUS && point.z <= bounds.maxZ - ACTOR_RADIUS);
  assert(DEEPWOOD.obstacles.every(prop => Math.hypot(point.x - prop.x, point.z - prop.z) >= prop.r + ACTOR_RADIUS));
};

test('Rootdeep uses its lore, two final shard candidates and existing art in a compact map', () => {
  assert.equal(LEVEL_LORE[DEEPWOOD.id].name, 'Rootdeep');
  assert.deepEqual(DEEPWOOD.shards.map(({ id, zone }) => ({ id, zone })), [
    { id: 's5', zone: 'rootdeep' }, { id: 's6', zone: 'rootdeep' },
  ]);
  assert.equal(DEEPWOOD.shardCount, 1);
  assert.equal(DEEPWOOD.exit.next, null);
  assert.equal(DEEPWOOD.targetSeconds, 60);
  assert(DEEPWOOD.bounds.minX >= -30 && DEEPWOOD.bounds.maxX <= 30);
  assert(DEEPWOOD.bounds.minZ >= -20 && DEEPWOOD.bounds.maxZ <= 20);
  assert(DEEPWOOD.bounds.maxX - DEEPWOOD.bounds.minX < 44);
  assert(DEEPWOOD.bounds.maxZ - DEEPWOOD.bounds.minZ < 28);
  assert(DEEPWOOD.tuning.chaseSpeed > 3 && DEEPWOOD.tuning.damage > 0.12);
  for (const sign of DEEPWOOD.signs) assert(LEVEL_LORE.deepwood.signs.some(lore => lore.id === sign.id));
  for (const prop of DEEPWOOD.props) assert(existsSync(new URL(`../../../public/art/${prop.asset}`, import.meta.url)));
  for (const obstacle of DEEPWOOD.obstacles) assert(DEEPWOOD.props.some(prop => prop.x === obstacle.x && prop.z === obstacle.z));
});

test('both shard pockets, signs and the final exit remain reachable through root banks', () => {
  const grid = obstacleGrid(DEEPWOOD.obstacles, DEEPWOOD.bounds);
  for (const target of [...DEEPWOOD.shards, ...DEEPWOOD.signs, DEEPWOOD.exit]) {
    const path = astar(grid, cell(DEEPWOOD.start), cell(target));
    assert(path.length > 0, `reachable target at ${target.x},${target.z}`);
    for (const step of path) {
      const position = { x: step.x - 29.5, z: step.y - 19.5 }, before = { ...position };
      collideWith(position, DEEPWOOD.obstacles, DEEPWOOD.bounds);
      assert.deepEqual(position, before, 'grid path clears actual player collision');
      clear(position);
    }
  }
  for (const shard of DEEPWOOD.shards) assert(astar(grid, cell(shard), cell(DEEPWOOD.exit)).length > 0);
});

test('initial, timed and director enemies all spawn safely for both factions', () => {
  for (const kind of ['chomper', 'petalborn']) for (const value of [0, 0.5, 0.999999]) {
    const enemies = new Enemies(new EventBus(), new Land(), () => value);
    enemies.configure(DEEPWOOD, DEEPWOOD.obstacles);
    for (const spawn of DEEPWOOD.enemies) enemies.spawn(kind, spawn.count, spawn.zone, spawn);
    assert.equal(enemies.enemies.length, 3);
    for (const enemy of enemies.enemies) assert(Math.hypot(enemy.x - DEEPWOOD.start.x, enemy.z - DEEPWOOD.start.z) > 8, 'opening is safe');
    for (const wave of DEEPWOOD.waves) enemies.spawn(kind, wave.count, wave.zone);
    for (const zone of ['hollow', 'glade', 'rootdeep']) enemies.spawn(kind, 4, zone);
    for (const enemy of enemies.enemies) { clear(enemy); assert.equal(enemy.kind, kind); }
  }
});

test('Rootdeep waves wait until 22 and 42 seconds, fire once, and freeze while paused', () => {
  const manager = new LevelManager('deepwood'), waves = [];
  const spawn = (zone, count) => waves.push({ zone, count });
  manager.update(21, true, () => {}, spawn);
  manager.update(100, false, () => {}, spawn);
  assert.equal(waves.length, 0);
  manager.update(1, true, () => {}, spawn);
  assert.deepEqual(waves, [{ zone: 'rootdeep', count: 1 }]);
  manager.update(19, true, () => {}, spawn);
  assert.equal(waves.length, 1);
  manager.update(1, true, () => {}, spawn);
  manager.update(100, true, () => {}, spawn);
  assert.deepEqual(waves, [{ zone: 'rootdeep', count: 1 }, { zone: 'rootdeep', count: 1 }]);
});

test('direct Rootdeep starts carry two shards, flip opponents and require final exit for either ending', t => {
  for (const shrine of ['sleepy', 'angry']) {
    const position = { x: 0, z: 0 }, session = new GameSession('localhost:8765', new EventBus(), position, 'deepwood');
    t.after(() => session.dispose());
    session.select(shrine);
    assert.equal(session.run.shards, 2);
    assert.equal(session.state().zone, 'rootdeep');
    assert.deepEqual(position, DEEPWOOD.start);
    assert.equal(session.enemies.enemies.length, 3);
    session.select(shrine === 'sleepy' ? 'angry' : 'sleepy');
    assert(session.enemies.enemies.every(enemy => enemy.kind === (session.faction === 'bloom' ? 'chomper' : 'petalborn')));
    session.enemies.reset();
    const active = session.shards.sites.filter(site => site.active && !site.resolved);
    assert.equal(active.length, 1);
    assert(['s5', 's6'].includes(active[0].id));
    Object.assign(position, DEEPWOOD.exit);
    session.update(1 / 60);
    assert.equal(session.run.result, null, 'exit requires the final shard');
    Object.assign(position, { x: active[0].x, z: active[0].z });
    session.shards.update(1.5, position, 12, true, session.faction);
    assert.equal(session.run.shards, 3);
    assert.equal(session.run.result, null, 'the resolved shard requires returning to the exit');
    Object.assign(position, DEEPWOOD.exit);
    session.update(1 / 60);
    assert.equal(session.run.result, 'win');
  }
});
