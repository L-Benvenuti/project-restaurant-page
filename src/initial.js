export const initialPage = function () {
  const content = document.getElementById('content');

  const nav = document.createElement('nav');
  nav.setAttribute('id', 'nav');
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footer');

  content.appendChild(nav);
  content.appendChild(main);
  content.appendChild(footer);
};

export const appendContent = function (element, where) {
  const place = document.getElementById(`${where}`);
  place.appendChild(element);
};

export const updateContent = function () {
  const main = document.getElementById('main');
  main.innerHTML = '';
};
