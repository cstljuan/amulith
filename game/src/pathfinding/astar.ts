export interface Point { x: number; y: number }
interface Entry { index: number; score: number; cost: number }
class Heap {
  private data: Entry[] = [];
  get length() { return this.data.length; }
  push(entry: Entry): void {
    this.data.push(entry); let i = this.data.length - 1;
    while (i > 0) { const parent = (i - 1) >> 1; if (this.data[parent].score <= entry.score) break; this.data[i] = this.data[parent]; i = parent; }
    this.data[i] = entry;
  }
  pop(): Entry {
    const first = this.data[0]; const last = this.data.pop()!;
    if (this.data.length) {
      let i = 0;
      while (i * 2 + 1 < this.data.length) {
        let child = i * 2 + 1;
        if (child + 1 < this.data.length && this.data[child+1].score < this.data[child].score) child++;
        if (last.score <= this.data[child].score) break;
        this.data[i] = this.data[child]; i = child;
      }
      this.data[i] = last;
    }
    return first;
  }
}
export function octile(a: Point, b: Point): number {
  const x = Math.abs(a.x-b.x), y = Math.abs(a.y-b.y);
  return Math.max(x,y) + (Math.SQRT2-1) * Math.min(x,y);
}
/** True cells are walkable. Returns start-to-goal cells, or [] if unreachable. No corner cutting. */
export function astar(grid: readonly (readonly boolean[])[], start: Point, goal: Point): Point[] {
  const height = grid.length, width = grid[0]?.length ?? 0;
  if (!width || grid.some(row => row.length !== width)) return [];
  const valid = (p: Point) => Number.isInteger(p.x) && Number.isInteger(p.y) && p.x >= 0 && p.x < width && p.y >= 0 && p.y < height && grid[p.y][p.x];
  if (!valid(start) || !valid(goal)) return [];
  const costs = new Float64Array(width*height).fill(Infinity);
  const parents = new Int32Array(width*height).fill(-1);
  const heap = new Heap(); const first = start.y*width+start.x, end = goal.y*width+goal.x;
  costs[first] = 0; heap.push({index:first,cost:0,score:octile(start,goal)});
  while (heap.length) {
    const current = heap.pop(); if (current.cost !== costs[current.index]) continue;
    const x = current.index%width, y = Math.floor(current.index/width);
    if (current.index === end) {
      const path: Point[] = []; let i = end;
      while (i !== -1) { path.push({x:i%width,y:Math.floor(i/width)}); i = parents[i]; }
      return path.reverse();
    }
    for (let dy=-1; dy<=1; dy++) for (let dx=-1; dx<=1; dx++) {
      if (!dx && !dy) continue;
      const next = {x:x+dx,y:y+dy};
      if (!valid(next) || (dx && dy && (!grid[y][x+dx] || !grid[y+dy][x]))) continue;
      const index = next.y*width+next.x, cost = current.cost + (dx && dy ? Math.SQRT2 : 1);
      if (cost >= costs[index]) continue;
      costs[index] = cost; parents[index] = current.index;
      heap.push({index,cost,score:cost+octile(next,goal)});
    }
  }
  return [];
}
