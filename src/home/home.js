import { appendContent } from '../initial';
import RestaurantImage from '../imgs/location.png';

export const home = function () {
  const welcome = document.createElement('h1');
  welcome.classList = 'welcome-title';
  welcome.innerText = 'Welcome to CapyBuffet!';

  const subtext = document.createElement('h2');
  subtext.classList = 'subtext';
  subtext.innerText = 'The best capyfood in the whole riverside';

  const block = document.createElement('div');
  block.classList = 'block';

  const bLeft = document.createElement('div');
  bLeft.classList = 'bLeft';

  const restimg = new Image();
  restimg.src = RestaurantImage;

  bLeft.appendChild(restimg);

  const bRight = document.createElement('div');
  bRight.classList = 'bRight';

  const p1 = document.createElement('p');
  p1.classList = 'text';
  p1.innerText = 'If you are looking for your next meal, search no more!'
  + '\nWe have a variety of top tier food perfect for all kinds of tastes.'
  + '\nDo not even worry about that diet your spouse put you on, we got'
  + '\nthem low carb options as well to make every capy a happy capy!';

  const callToAction = document.createElement('h3');
  callToAction.classList = 'action-call';
  callToAction.innerText = 'Find your next meal at CappyBuffet!';

  const p2 = document.createElement('p2');
  p2.classList = 'restinfo';
  p2.innerText = 'River Side, 2279 Capy St.'
  + '\nCapybraska, CB - 22372'
  + '\n(329) 272-2272';

  bRight.appendChild(p1);
  bRight.appendChild(callToAction);
  bRight.appendChild(p2);

  block.appendChild(bLeft);
  block.appendChild(bRight);

  appendContent(welcome, 'main');
  appendContent(subtext, 'main');
  appendContent(block, 'main');
};
