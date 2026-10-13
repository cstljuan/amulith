export function installPortable() {
  if (import.meta.env.DEV || !('serviceWorker' in navigator)) return;
  const status = document.createElement('div'); status.className = 'offline-status'; status.textContent = 'Preparing offline play...';
  const button = document.createElement('button'); button.className = 'portable-button install-app'; button.textContent = 'Install Amulith'; button.hidden = true;
  document.body.append(status, button);
  let prompt: Event & { prompt(): Promise<void> } | null = null;
  window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); prompt = event as typeof prompt; button.hidden = false; });
  button.onclick = async () => { if (prompt) { await prompt.prompt(); prompt = null; button.hidden = true; } };
  navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).then(() => navigator.serviceWorker.ready)
    .then(() => { status.textContent = 'Offline play ready'; })
    .catch(() => { status.textContent = 'Play online, or use the desktop download for offline play.'; });
}
