import { appendContent } from '../initial';
import { form } from './contact-form';

export const contact = function () {
  const title = document.createElement('h1');
  title.classList = 'contTitle';
  title.innerText = 'We are possibly looking forward to hearing from you';

  const p1 = document.createElement('p');
  p1.classList = 'contText';
  p1.innerText = 'Hopefully you enjoyed your food...';

  appendContent(title, 'main');
  appendContent(p1, 'main');
  appendContent(form(), 'main');
};
