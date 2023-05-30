import { appendContent } from './initial';

export const nav = function () {
  const btns = document.createElement('ul');
  btns.classList = 'btns';
  const home = document.createElement('li');
  home.classList = 'btn';
  home.innerHTML = 'Home';
  const menu = document.createElement('li');
  menu.classList = 'btn';
  menu.innerHTML = 'Menu';
  const contact = document.createElement('li');
  contact.classList = 'btn';
  contact.innerHTML = 'Contact Us';

  btns.appendChild(home);
  btns.appendChild(menu);
  btns.appendChild(contact);

  appendContent(btns, 'nav');
};
