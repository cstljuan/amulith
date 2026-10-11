import type { Point } from '../pathfinding/astar.ts';

export interface CircleObstacle { x: number; z: number; r: number }
export const ACTOR_RADIUS = 0.4;

// Inflate by the cell half-diagonal so paths between centers clear the entire prop.
export function obstacleGrid(circles: readonly CircleObstacle[]): boolean[][] {
  return Array.from({ length: 40 }, (_, row) => Array.from({ length: 60 }, (_, column) =>
    circles.every(c => Math.hypot(column - 29.5 - c.x, row - 19.5 - c.z) > c.r + ACTOR_RADIUS + Math.SQRT1_2)));
}

export function nearestOpen(grid: boolean[][], point: Point): Point {
  let best = point, distance = Infinity;
  for (let y = 0; y < grid.length; y++) for (let x = 0; x < grid[y].length; x++) {
    const d = (x - point.x) ** 2 + (y - point.y) ** 2;
    if (grid[y][x] && d < distance) { best = { x, y }; distance = d; }
  }
  return best;
}
