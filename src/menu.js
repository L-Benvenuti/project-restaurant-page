import { appendContent } from './initial';
import Grass from './imgs/grass.jpg';
import { menuItem } from './menu-items';

export const menu = function () {
  const title = document.createElement('h1');
  title.innerText = 'Food Options';

  const subtext = document.createElement('h2');
  subtext.innerText = 'This is the greatest menu in all history';

  const menuContainer = document.createElement('div');
  menuContainer.classList = 'menuContainer';

  const grass = new menuItem('Grass', 'The best grass you\'ve ever eaten', Grass);

  console.log(grass);

  menuContainer.appendChild(grass.createItem());

  appendContent(title, 'main');
  appendContent(subtext, 'main');
  appendContent(menuContainer, 'main');
};
