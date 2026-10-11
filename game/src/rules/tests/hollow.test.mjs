import test from 'node:test';
import assert from 'node:assert/strict';
import { HOLLOW } from '../../levels/hollow.ts';
import { LEVEL_LORE } from '../../lore/levels.ts';
import { astar } from '../../pathfinding/astar.ts';
import { ACTOR_RADIUS, obstacleGrid } from '../../world/obstacles.ts';
import { Enemies } from '../../enemies/enemies.ts';
import { EventBus } from '../../core/events.ts';
import { Land } from '../land.ts';

const cell = ({ x, z }) => ({ x: Math.floor(x + 30), y: Math.floor(z + 20) });
const inside = (point, margin = ACTOR_RADIUS) => point.x >= HOLLOW.bounds.minX + margin
  && point.x <= HOLLOW.bounds.maxX - margin && point.z >= HOLLOW.bounds.minZ + margin
  && point.z <= HOLLOW.bounds.maxZ - margin;
const grid = obstacleGrid(HOLLOW.obstacles, HOLLOW.bounds);

test('Hollow connects both shard alternatives, guards and exit with actor clearance', () => {
  const objectives = [...HOLLOW.shards, HOLLOW.exit, ...HOLLOW.enemies];
  for (const point of [HOLLOW.start, ...objectives]) {
    assert(inside(point), `objective outside actor bounds: ${JSON.stringify(point)}`);
    const location = cell(point);
    assert(grid[location.y][location.x], `objective blocked: ${JSON.stringify(point)}`);
    for (const cap of HOLLOW.obstacles) {
      assert(Math.hypot(point.x - cap.x, point.z - cap.z) > cap.r + ACTOR_RADIUS);
    }
    const path = astar(grid, cell(HOLLOW.start), location);
    assert(path.length > 0, `unreachable objective: ${JSON.stringify(point)}`);
    assert(path.every(p => grid[p.y][p.x]));
  }
  for (const shard of HOLLOW.shards) {
    assert(astar(grid, cell(shard), cell(HOLLOW.exit)).length > 0);
  }
});

test('Hollow keeps protocol shard identities and lore signs without an early final ending', () => {
  assert.deepEqual(HOLLOW.shards.map(s => s.id), ['s1', 's2']);
  assert(HOLLOW.shards.every(s => s.zone === 'hollow'));
  assert.equal(HOLLOW.shardCount, 1);
  assert.equal(HOLLOW.exit.next, 'deepwood');
  const signs = new Set(LEVEL_LORE.hollow.signs.map(s => s.id));
  assert(HOLLOW.signs.every(s => signs.has(s.id) && inside(s)));
});

test('Hollow pressure increases during its compact level without exceeding the enemy budget', () => {
  assert(HOLLOW.targetSeconds < 100);
  assert((HOLLOW.bounds.maxX - HOLLOW.bounds.minX) * (HOLLOW.bounds.maxZ - HOLLOW.bounds.minZ) < 60 * 40);
  assert(HOLLOW.tuning.chaseSpeed > 2.5);
  assert(HOLLOW.tuning.damage > 0.1);
  assert(HOLLOW.tuning.attackCooldown < 1);
  assert(HOLLOW.waves.every((wave, i) => wave.after > 0 && wave.after < HOLLOW.targetSeconds
    && (i === 0 || wave.after > HOLLOW.waves[i - 1].after)));
  const total = [...HOLLOW.enemies, ...HOLLOW.waves].reduce((sum, spawn) => sum + spawn.count, 0);
  assert(total <= 24);
  assert(HOLLOW.props.every(prop => HOLLOW.obstacles.some(cap => cap.x === prop.x && cap.z === prop.z)));
});

test('Hollow initial guards and wave spawns remain inside bounds and clear caps for both factions', () => {
  for (const faction of ['bloom', 'blight']) for (const random of [0, 0.02, 0.25, 0.5, 0.75, 0.98, 0.999]) {
    const enemies = new Enemies(new EventBus(), new Land(), () => random);
    enemies.configure(HOLLOW, HOLLOW.obstacles);
    const kind = faction === 'bloom' ? 'chomper' : 'petalborn';
    for (const spawn of HOLLOW.enemies) enemies.spawn(kind, spawn.count, spawn.zone, spawn);
    for (const wave of HOLLOW.waves) enemies.spawn(kind, wave.count, wave.zone);
    const check = () => {
      assert.equal(enemies.enemies.length, 8);
      for (const enemy of enemies.enemies) {
        assert.equal(enemy.kind, kind);
        assert(inside(enemy), `enemy escaped bounds: ${JSON.stringify(enemy)}`);
        for (const cap of HOLLOW.obstacles) {
          assert(Math.hypot(enemy.x - cap.x, enemy.z - cap.z) > cap.r + ACTOR_RADIUS - 1e-8,
            `enemy entered solid cap: ${JSON.stringify(enemy)}`);
        }
      }
    };
    check();
    for (const objective of [HOLLOW.start, ...HOLLOW.shards, HOLLOW.exit]) {
      for (let step = 0; step < 60; step++) {
        enemies.update(1 / 30, objective, faction, 20, () => {});
        check();
      }
    }
  }
});
