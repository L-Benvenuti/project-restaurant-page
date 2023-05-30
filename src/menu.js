import { appendContent } from './initial';

export const menu = function () {
  const title = document.createElement('h1');
  title.innerText = 'Food Options';

  const subtext = document.createElement('h2');
  subtext.innerText = 'This is the greatest menu in all history';

  const p1 = document.createElement('p');
  p1.innerText = 'Testing the logic for this';

  const callToAction = document.createElement('h3');
  callToAction.innerText = 'Eat with us please';

  appendContent(title, 'main');
  appendContent(subtext, 'main');
  appendContent(p1, 'main');
  appendContent(callToAction, 'main');
};
