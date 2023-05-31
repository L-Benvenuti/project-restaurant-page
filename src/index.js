import { initialPage, updateContent } from './initial';
import { nav } from './nav';
import { footer } from './footer';
import { home } from './home/home';
import { contact } from './contact/contact';
import { menu } from './menu/menu';
import './style/initial.css';
import './style/home.css';
import './style/contact.css';
import './style/menu.css';

initialPage();
nav();
home();
footer();

const changePage = (function () {
  const btnOptions = document.querySelectorAll('.btn');
  btnOptions.forEach((item) => {
    item.addEventListener('click', () => {
      const btnSelected = item.innerText;
      const selection = btnSelected.toLowerCase();
      updateContent();

      if (selection === 'contact us') {
        contact();
      } else if (selection === 'menu') {
        menu();
      } else if (selection === 'home') {
        home();
      }
    });
  });
}());
