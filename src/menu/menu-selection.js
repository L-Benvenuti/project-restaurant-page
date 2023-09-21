import { boring } from './boring-dropdown';
import { death } from './death-dropdown';
import { interesting } from './interesting-dropdown';

export function menuChange() {
  const selection = document.getElementById('menuOptions');
  const container = document.getElementById('menuContainer');
  const topText = document.querySelector('div.top-text');
  const main = document.querySelector('main');

  function updateContent() {
    if (container === '') return;
    if (container != '') {
      container.innerHTML = '';
    }
  }

  if (selection.value === 'boring') {
    updateContent();
    container.appendChild(boring());
    main.removeChild(topText);
  } else if (selection.value === 'interesting') {
    updateContent();
    container.appendChild(interesting());
    main.removeChild(topText);
  } else if (selection.value === 'death') {
    updateContent();
    container.appendChild(death());
    main.removeChild(topText);
  }
}
