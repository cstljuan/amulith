import './boot.css';

import('./main').catch(error => {
  console.error('Amulith could not start:', error);
  const root = document.createElement('main'); root.className = 'compatibility';
  const icon = document.createElement('img'); icon.src = `${import.meta.env.BASE_URL}brand/symbol.svg`; icon.alt = '';
  const title = document.createElement('h1'); title.textContent = 'The forest needs a little more light.';
  const copy = document.createElement('p');
  copy.textContent = /WebGL/i.test(String(error))
    ? 'Browser graphics are unavailable here. Try a current Chrome, Edge or Firefox browser with graphics acceleration enabled. You can still read the complete story.'
    : 'The game could not finish loading. Reload to try again, or read the complete story while the forest rests.';
  const reader = document.createElement('a'); reader.href = `${import.meta.env.BASE_URL}story-reader.html`; reader.textContent = 'Read the complete story';
  const reload = document.createElement('button'); reload.textContent = 'Try again'; reload.onclick = () => window.location.reload();
  root.append(icon, title, copy, reader, reload); document.body.replaceChildren(root);
});
