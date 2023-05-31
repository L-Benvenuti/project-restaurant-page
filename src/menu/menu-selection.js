import { boring } from './boring-dropdown';
import { death } from './death-dropdown';
import { interesting } from './interesting-dropdown';

export function menuChange() {
  const selection = document.getElementById('menuOptions');
  const container = document.getElementById('menuContainer');

  function updateContent() {
    if (container === '') return;
    if (container != '') {
      container.innerHTML = '';
    }
  }

  if (selection.value === 'boring') {
    updateContent();
    container.appendChild(boring());
  } else if (selection.value === 'interesting') {
    updateContent();
    container.appendChild(interesting());
  } else if (selection.value === 'death') {
    updateContent();
    container.appendChild(death());
  }
}
