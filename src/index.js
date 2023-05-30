import { initialPage, updateContent } from './initial';
import { nav } from './nav';
import { footer } from './footer';
import { home } from './home';
import { contact } from './contact';
import { menu } from './menu';
import './style.css';

console.log("It's working brotha!");

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
