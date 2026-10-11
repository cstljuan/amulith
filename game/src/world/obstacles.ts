import type { Point } from '../pathfinding/astar.ts';

export interface CircleObstacle { x: number; z: number; r: number }
export const ACTOR_RADIUS = 0.4;

// Inflate by the cell half-diagonal so paths between centers clear the entire prop.
export function obstacleGrid(circles: readonly CircleObstacle[], bounds = { minX: -30, maxX: 30, minZ: -20, maxZ: 20 }): boolean[][] {
  return Array.from({ length: 40 }, (_, row) => Array.from({ length: 60 }, (_, column) =>
    column - 29.5 > bounds.minX + 0.9 && column - 29.5 < bounds.maxX - 0.9 &&
    row - 19.5 > bounds.minZ + 0.9 && row - 19.5 < bounds.maxZ - 0.9 &&
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

export function collideWith(position: {x:number;z:number}, circles: readonly CircleObstacle[], bounds: {minX:number;maxX:number;minZ:number;maxZ:number}): void {
  for (let pass=0;pass<3;pass++) for (const circle of circles) {
    const dx=position.x-circle.x,dz=position.z-circle.z,distance=Math.hypot(dx,dz),minimum=circle.r+ACTOR_RADIUS;
    if(distance<minimum){ position.x += distance>0.0001?dx/distance*(minimum-distance):minimum; position.z += distance>0.0001?dz/distance*(minimum-distance):0; }
  }
  position.x=Math.max(bounds.minX+0.9,Math.min(bounds.maxX-0.9,position.x));
  position.z=Math.max(bounds.minZ+0.9,Math.min(bounds.maxZ-0.9,position.z));
}
