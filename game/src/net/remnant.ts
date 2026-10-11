import type { GameMessage } from '@protocol/messages';
import type { EventBus, GameEvents } from '../core/events.ts';
import { parseRemnant } from './messages.ts';

export class RemnantClient {
  private socket: WebSocket | null = null;
  private retry: ReturnType<typeof setTimeout> | undefined;
  private stopped = true;
  mode: 'live' | 'mock' | 'offline' = 'offline';
  constructor(private host: string, private bus: EventBus<GameEvents>, private options: {
    socketFactory?: (url: string) => WebSocket;
    retryMs?: number;
  } = {}) {}

  get connected(): boolean { return this.socket?.readyState === 1; }
  start(): void { if (!this.stopped) return; this.stopped = false; this.connect(); }
  private connect(): void {
    if (this.stopped) return;
    try {
      const socket = (this.options.socketFactory ?? (url => new WebSocket(url)))(`ws://${this.host}/ws`);
      this.socket = socket;
      socket.onopen = () => {
        if (this.stopped || this.socket !== socket) return;
        this.bus.emit('connection', { connected: true, mode: this.mode });
      };
      socket.onmessage = event => {
        if (this.stopped || this.socket !== socket) return;
        const msg = parseRemnant(event.data);
        if (!msg) return;
        if (msg.type === 'hello') {
          this.mode = msg.mode;
          this.bus.emit('connection', { connected: true, mode: this.mode });
        }
        // The discriminated union preserves each payload's original message shape.
        switch (msg.type) {
          case 'hello': this.bus.emit('hello', msg); break;
          case 'shrine': this.bus.emit('shrine', msg); break;
          case 'relic': this.bus.emit('relic', msg); break;
          case 'director': this.bus.emit('director', msg); break;
          case 'speech': this.bus.emit('speech', msg); break;
          case 'thinking': this.bus.emit('thinking', msg); break;
          case 'telemetry': this.bus.emit('telemetry', msg); break;
        }
      };
      socket.onerror = () => { if (this.socket === socket && !this.stopped) socket.close(); };
      socket.onclose = () => {
        if (this.socket !== socket || this.stopped) return;
        this.socket = null;
        this.mode = 'offline';
        this.bus.emit('connection', { connected: false, mode: 'offline' });
        this.schedule();
      };
    } catch { this.schedule(); }
  }
  private schedule(): void {
    if (this.stopped || this.retry !== undefined) return;
    this.retry = setTimeout(() => { this.retry = undefined; this.connect(); }, this.options.retryMs ?? 2000);
  }
  send(message: GameMessage): boolean {
    if (!this.connected) return false;
    try { this.socket!.send(JSON.stringify(message)); return true; } catch { return false; }
  }
  dispose(): void {
    this.stopped = true;
    clearTimeout(this.retry); this.retry = undefined;
    const socket = this.socket; this.socket = null;
    if (socket) { socket.onopen = socket.onmessage = socket.onerror = socket.onclose = null; socket.close(); }
    this.mode = 'offline';
  }
}
