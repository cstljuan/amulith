import type { EventBus, GameEvents } from '../core/events.ts';
import type { GameSession } from '../rules/session.ts';
import type { Input } from '../input/Input.ts';
import { SCENES, CLOSINGS, type Beat, type StoryScene } from './scenes.ts';
import { spiritPlaces } from './places.ts';
import './story.css';

const KEY = 'amulith.chronicle.v1';
type Entry = Beat & { scene: string };
export function installStoryUI(root: HTMLElement, events: EventBus<GameEvents>, session: GameSession, input: Input, player: { position: { x: number; z: number } }) {
  const modal = document.createElement('section'); modal.className = 'story-panel'; modal.hidden = true;
  modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true'); modal.setAttribute('aria-label', 'Forest chronicle');
  modal.innerHTML = `<div class="story-card"><div class="story-top"><span data-story-title></span><button data-story-close aria-label="Close conversation">Close / Esc</button></div>
    <small data-story-progress></small><h2 data-story-speaker></h2><p data-story-text aria-live="polite"></p>
    <div data-story-options></div><div class="story-journal" data-story-journal hidden></div>
    <button data-story-next>Continue / Space / A</button><small class="story-note">The world waits while you read.</small></div>`;
  root.append(modal);
  const $ = (selector: string) => modal.querySelector<HTMLElement>(selector)!;
  let journal: Entry[] = [];
  try { const raw = JSON.parse(localStorage.getItem(KEY) ?? '[]'); if (Array.isArray(raw)) journal = raw.filter(x => typeof x?.speaker === 'string' && typeof x?.text === 'string' && typeof x?.scene === 'string').slice(-800); } catch { /* storage may be unavailable */ }
  let active = false, fresh = false, restore = false, scene: StoryScene | null = null;
  let current: Beat[] = [], index = 0, stage: 'reading' | 'choice' | 'branch' | 'journal' = 'reading', choice = 0, previousX = 0;
  let priorFocus: HTMLElement | null = null;
  const save = (beat: Beat) => {
    journal.push({ ...beat, scene: scene?.title ?? 'The ending' }); journal = journal.slice(-800);
    try { localStorage.setItem(KEY, JSON.stringify(journal)); } catch { /* game remains playable */ }
  };
  const draw = () => {
    $('[data-story-options]').replaceChildren(); $('[data-story-journal]').hidden = stage !== 'journal';
    $('[data-story-next]').hidden = stage === 'choice' || stage === 'journal';
    if (stage === 'journal') return;
    $('[data-story-title]').textContent = scene?.title ?? 'The forest after your choice';
    $('[data-story-progress]').textContent = stage === 'choice' ? 'Choose a thought to carry' : `${index + 1} / ${current.length}`;
    const beat = current[index];
    $('[data-story-speaker]').textContent = stage === 'choice' ? 'Wanderer' : beat.speaker;
    $('[data-story-text]').textContent = stage === 'choice' ? 'What would you like to ask?' : beat.text;
    if (stage === 'choice' && scene) scene.choices.forEach((item, i) => {
      const button = document.createElement('button'); button.textContent = item.label; button.classList.toggle('selected', choice === i);
      button.onclick = () => select(i); $('[data-story-options]').append(button);
    });
  };
  const select = (i: number) => {
    if (!scene || stage !== 'choice') return;
    current = scene.choices[i].beats; index = 0; stage = 'branch'; draw(); save(current[index]); $('[data-story-next]').focus();
  };
  const close = () => {
    if (!active) return;
    active = false; modal.hidden = true; root.classList.remove('reading');
    if (restore && session.run.phase !== 'ending') events.emit('pause', { paused: false });
    priorFocus?.focus();
  };
  const open = (beats: Beat[], selectedScene: StoryScene | null, shouldRestore: boolean) => {
    if (active) close();
    priorFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    restore = shouldRestore; active = true; fresh = true; scene = selectedScene; current = beats; index = 0; stage = 'reading'; choice = 0; previousX = 0;
    events.emit('pause', { paused: true }); root.classList.add('reading'); modal.hidden = false; draw(); save(current[index]); $('[data-story-next]').focus();
  };
  const next = () => {
    if (stage === 'choice') { select(choice); return; }
    if (stage === 'journal') return;
    if (index + 1 < current.length) { index++; draw(); save(current[index]); }
    else if (stage === 'reading' && scene) { stage = 'choice'; draw(); modal.querySelector<HTMLButtonElement>('[data-story-options] button')?.focus(); }
    else close();
  };
  $('[data-story-next]').onclick = next; $('[data-story-close]').onclick = close;
  const trapFocus = (e: KeyboardEvent) => {
    if (!active || e.key !== 'Tab') return;
    const buttons = [...modal.querySelectorAll<HTMLButtonElement>('button')].filter(b => !b.hidden && b.offsetParent !== null);
    const first = buttons[0], last = buttons.at(-1);
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
  };
  modal.addEventListener('keydown', trapFocus);
  const offs = [
    events.on('pause', e => { if (active && !e.paused) events.emit('pause', { paused: true }); }),
    events.on('interact', point => {
      if (active || session.paused || !session.faction) return;
      const npc = spiritPlaces(session.levels.current).find(n => Math.hypot(n.x - point.x, n.z - point.z) < 3);
      const selected = npc && SCENES.find(s => s.id === `${npc.id}-${session.faction}`);
      if (selected) open(selected.beats, selected, true);
    }),
    events.on('run', e => {
      if (e.phase === 'attract') { restore = false; close(); }
      if (e.phase === 'ending' && e.faction && e.result) open(CLOSINGS[e.faction][e.result], null, false);
    }),
    events.on('director', e => save({ speaker: 'Amulith', text: e.line })),
  ];
  return {
    get active() { return active; },
    journal() {
      if (active) return;
      priorFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      restore = !session.paused; active = true; fresh = true; stage = 'journal'; scene = null;
      events.emit('pause', { paused: true }); root.classList.add('reading'); modal.hidden = false;
      $('[data-story-title]').textContent = 'Your forest chronicle'; $('[data-story-progress]').textContent = `${journal.length} lines heard`;
      $('[data-story-speaker]').textContent = 'What the lantern remembers'; $('[data-story-text]').textContent = journal.length ? 'Your conversations stay on this browser.' : 'Speak to the small lights in the forest to begin.';
      $('[data-story-journal]').replaceChildren(...journal.map(entry => {
        const p = document.createElement('p'); const name = document.createElement('strong'); name.textContent = `${entry.speaker}: `;
        p.append(name, document.createTextNode(entry.text)); return p;
      })); draw(); $('[data-story-close]').focus();
    },
    frame() {
      if (!active) return;
      if (fresh) { fresh = false; return; }
      if (input.pressed('pause') || input.pressed('dash')) { close(); return; }
      if (stage === 'choice') {
        const x = input.actions.move.x;
        if (Math.abs(x) > 0.5 && Math.abs(previousX) <= 0.5) { choice = x < 0 ? 0 : 1; draw(); }
        previousX = x;
      }
      if (input.pressed('pulse') || input.pressed('interact')) next();
    },
    dispose() { restore = false; close(); offs.forEach(off => off()); modal.remove(); },
  };
}
