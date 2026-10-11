import type { EventBus, GameEvents } from '../core/events.ts';
export class Lantern {
  value = 0.5;
  private relicSeen = false;
  private off: () => void;
  constructor(private bus: EventBus<GameEvents>) {
    this.off = bus.on('relic',msg=>{this.relicSeen=true;this.value=msg.knob;this.changed();});
  }
  get radius(): number { return 3+9*this.value; }
  get detectionRange(): number { return 4+10*this.value; }
  update(dt: number, delta: number): void {
    if (this.relicSeen || !delta) return;
    this.value = Math.max(0,Math.min(1,this.value+delta*dt*0.3)); this.changed();
  }
  private changed(): void { this.bus.emit('lantern',{value:this.value,radius:this.radius,detectionRange:this.detectionRange,source:this.relicSeen?'relic':'input'}); }
  dispose(): void { this.off(); }
}
