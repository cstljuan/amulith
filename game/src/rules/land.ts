import type { Faction, Zone } from '@protocol/messages';
export type CellFaction = Faction | 'neutral';
export interface LandCell { column: number; row: number; faction: CellFaction }

export class Land {
  readonly width = 60;
  readonly depth = 40;
  readonly cells: CellFaction[] = [];
  private listeners = new Set<(changes: LandCell[]) => void>();
  constructor(private random: () => number = Math.random) { this.reset(); }
  reset(): void {
    const changes: LandCell[] = [];
    for (let row = 0; row < this.depth; row++) for (let column = 0; column < this.width; column++) {
      const faction = column < 30 ? 'bloom' : 'blight';
      this.cells[row * this.width + column] = faction;
      changes.push({ column, row, faction });
    }
    this.notify(changes);
  }
  onChange(fn: (changes: LandCell[]) => void): () => void { this.listeners.add(fn); return () => { this.listeners.delete(fn); }; }
  private notify(changes: LandCell[]): void { if (changes.length) for (const fn of this.listeners) fn(changes); }
  zone(column: number): Zone { return column < 20 ? 'hollow' : column < 40 ? 'glade' : 'rootdeep'; }
  center(column: number, row: number) { return { x: column - 29.5, z: row - 19.5 }; }
  convert(x: number, z: number, radius: number, faction: Faction): LandCell[] {
    if (![x,z,radius].every(Number.isFinite) || radius < 0) return [];
    const changes: LandCell[] = [];
    for (let row = 0; row < this.depth; row++) for (let column = 0; column < this.width; column++) {
      const point = this.center(column, row);
      const i = row * this.width + column;
      if (Math.hypot(point.x - x, point.z - z) <= radius && this.cells[i] !== faction) {
        this.cells[i] = faction; changes.push({ column, row, faction });
      }
    }
    this.notify(changes); return changes;
  }
  tax(faction: Faction, fraction = 0.03): LandCell[] {
    const owned = this.cells.map((f,i) => f === faction ? i : -1).filter(i => i >= 0);
    const count = Math.round(owned.length * Math.max(0,Math.min(1,fraction)));
    const changes: LandCell[] = [];
    for (let n=0;n<count;n++) {
      const chosen = Math.min(owned.length-1,Math.floor(this.random()*owned.length));
      const [i] = owned.splice(chosen,1);const opposite = faction === 'bloom' ? 'blight' : 'bloom';
      this.cells[i] = opposite;changes.push({column:i%this.width,row:Math.floor(i/this.width),faction:opposite});
    }
    this.notify(changes);return changes;
  }
  share(): { bloom: number; blight: number } { return this.shares(this.cells); }
  zoneShare(zone: Zone): { bloom: number; blight: number } {
    return this.shares(this.cells.filter((_,i) => this.zone(i % this.width) === zone));
  }
  private shares(cells: CellFaction[]) { return { bloom: cells.filter(f => f === 'bloom').length / cells.length, blight: cells.filter(f => f === 'blight').length / cells.length }; }
  spread(zone: Zone, amount: number): LandCell[] {
    const changes: LandCell[] = [];
    const wanted = Math.round(Math.max(0, Math.min(1, amount)) * 800);
    for (let n = 0; n < wanted; n++) {
      const candidates: number[] = [];
      for (let i = 0; i < this.cells.length; i++) {
        const column = i % this.width;
        if (this.zone(column) !== zone || this.cells[i] === 'blight') continue;
        const row = Math.floor(i / this.width);
        const near = [[column-1,row],[column+1,row],[column,row-1],[column,row+1]];
        if (near.some(([x,y]) => x >= 0 && x < this.width && y >= 0 && y < this.depth && this.cells[y*this.width+x] === 'blight')) candidates.push(i);
      }
      // A fully Bloom region has no frontier: establish one seed and then grow from it.
      if (!candidates.length) for (let i = 0; i < this.cells.length; i++) if (this.zone(i % this.width) === zone && this.cells[i] !== 'blight') candidates.push(i);
      if (!candidates.length) break;
      const i = candidates[Math.min(candidates.length-1,Math.floor(this.random()*candidates.length))];
      this.cells[i] = 'blight'; changes.push({ column:i%this.width,row:Math.floor(i/this.width),faction:'blight' });
    }
    this.notify(changes); return changes;
  }
}
