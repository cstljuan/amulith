import type { Director, Faction } from '@protocol/messages';
export class FallbackDirector {
  private elapsed = 0;
  private sequence = 0;
  update(dt: number, connected: boolean, active: boolean, faction: Faction | null): Director | null {
    if (connected || !active) { this.elapsed = 0; return null; }
    this.elapsed += dt;
    if (this.elapsed < 25) return null;
    this.elapsed %= 25;
    this.sequence++;
    return {
      type:'director', id:`offline-${this.sequence}`, source:'scripted', latency_ms:0,
      line:faction === 'blight' ? 'Bring the pieces home. The roots remember you.' : 'The roots remember what you would take from me.',
      mood:'calm',spread:{zone:['hollow','glade','rootdeep'][this.sequence%3] as 'hollow'|'glade'|'rootdeep',amount:0.05},
      spawn:{kind:faction==='blight'?'petalborn':'chomper',count:1,zone:'glade'},hint:null,
    };
  }
  reset(): void { this.elapsed = 0; }
}
