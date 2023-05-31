import { appendContent } from './initial';
import { boring } from './boring-dropdown';

export const menu = function () {
  const title = document.createElement('h1');
  title.innerText = 'Food Options';

  const subtext = document.createElement('h2');
  subtext.innerText = 'This is the greatest menu in all history';

  // need to create the dropdown selection
  // then if condition for each selection to have different outcomes
  // if (selection === 'boring') {boring();}

  appendContent(title, 'main');
  appendContent(subtext, 'main');

  boring();
};
