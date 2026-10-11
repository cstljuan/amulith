const root = document.documentElement;
const controls = document.querySelector('.theme-switch');
const buttons = controls.querySelectorAll('button');
const status = document.querySelector('#theme-status');
const themeColor = document.querySelector('meta[name="theme-color"]');

function setFaction(faction, announce = false) {
  if (faction !== 'bloom' && faction !== 'blight') return;
  root.dataset.theme = faction;
  buttons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.faction === faction));
  });
  themeColor.content = faction === 'bloom' ? '#fff1d6' : '#15102a';
  if (announce) {
    status.textContent = faction === 'bloom'
      ? 'Bloom palette selected: golden day, flowers reclaim the ground.'
      : 'Blight palette selected: violet night, thorns and veins take root.';
  }
  try {
    localStorage.setItem('amulith-faction', faction);
  } catch {
    // The palette still works when browser storage is unavailable.
  }
}

try {
  const saved = localStorage.getItem('amulith-faction');
  if (saved) setFaction(saved);
} catch {
  // Bloom is the default when storage is unavailable.
}

buttons.forEach(button => {
  button.addEventListener('click', () => setFaction(button.dataset.faction, true));
});
controls.hidden = false;
