import { appendContent } from '../initial';
import { menuChange } from './menu-selection';

export const menu = function () {
  const title = document.createElement('h1');
  title.classList = 'menuTitle';
  title.innerText = 'Food Options';

  const subtext = document.createElement('h2');
  subtext.classList = 'menuSubt';
  subtext.innerText = 'These are the greatest menus in all history';

  const text = document.createElement('p');
  text.classList = 'menuText';
  text.innerText = 'or at least one is...';

  const menuContainer = document.createElement('div');
  menuContainer.id = 'menuContainer';

  // dropdown selection
  const menuSelection = document.createElement('select');
  menuSelection.id = 'menuOptions';

  const placeholder = document.createElement('option');
  placeholder.innerText = 'Select your favorite menu:';
  placeholder.disabled = true;
  placeholder.selected = true;
  const boringMenu = document.createElement('option');
  boringMenu.innerText = 'Boring Menu';
  boringMenu.value = 'boring';
  const interestingMenu = document.createElement('option');
  interestingMenu.innerText = 'Interesting Menu';
  interestingMenu.value = 'interesting';
  const deathWishMenu = document.createElement('option');
  deathWishMenu.innerText = 'Death Wish Menu';
  deathWishMenu.value = 'death';

  menuSelection.append(
    placeholder,
    boringMenu,
    interestingMenu,
    deathWishMenu,
  );

  menuSelection.addEventListener('change', () => { menuChange(); });

  appendContent(title, 'main');
  appendContent(subtext, 'main');
  appendContent(menuSelection, 'main');
  appendContent(menuContainer, 'main');
};
