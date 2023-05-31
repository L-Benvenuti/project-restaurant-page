export class menuItem {
  constructor(name, text, imgSrc) {
    this.name = name;
    this.text = text;
    this.imgSrc = imgSrc;
  }

  createItem() {
    const item = document.createElement('div');
    item.classList = 'menuItem';

    const imgCont = document.createElement('div');
    const img = new Image();
    img.src = `${this.imgSrc}`;
    img.classList = 'itemImg';
    imgCont.appendChild(img);

    const content = document.createElement('div');
    content.classList = 'menuContent';

    const title = document.createElement('h1');
    title.classList = 'item-Title';
    title.innerText = `${this.name}`;

    const description = document.createElement('p');
    description.classList = 'item-desc';
    description.innerText = `${this.text}`;

    content.append(
      title,
      description,
    );

    item.append(
      imgCont,
      content,
    );

    return item;
  }
}
