import { appendContent } from './initial';
import Icon from './imgs/capy.icon.jpg';

export const footer = function () {
  const text = document.createElement('p');
  text.innerHTML = 'All meals are harvested and prepared by C. Bara.';

  const capyIcon = new Image();
  capyIcon.src = Icon;

  appendContent(capyIcon, 'footer');
  appendContent(text, 'footer');
};
