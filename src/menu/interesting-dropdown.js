import { menuItem } from './menu-items';
import Tacos from '../imgs/food-items/interesting/tacos.png';
import Pizza from '../imgs/food-items/interesting/pizza.png';
import Wings from '../imgs/food-items/interesting/wings.png';
import Pasta from '../imgs/food-items/interesting/pasta.png';
import Cknfries from '../imgs/food-items/interesting/nuggies-fries.png';
import Burger from '../imgs/food-items/interesting/burger.png';

export const interesting = () => {
  const iMenu = document.createElement('div');
  iMenu.classList = 'menuContainer';

  const textContent = document.createElement('div');
  textContent.classList = 'text-content';

  const title = document.createElement('h1');
  title.classList = 'menuTitle';
  title.innerText = 'Interesting Menu';

  const subtext = document.createElement('p');
  subtext.classList = 'menuSubt';
  subtext.innerText = 'Now we\'re talking! Nothing like some human food!'
      + '\nEnjoy every last bite!';

  textContent.append(
    title,
    subtext,
  );

  const itemCont = document.createElement('div');
  itemCont.classList = 'itemContainer';

  const tacos = new menuItem('Tacos', 'A must try in this place! Choose any meat options and salivate your way out', Tacos);
  const pizza = new menuItem('Pizza', 'The cheese pull in this one... gotta say, mouth watering', Pizza);
  const wings = new menuItem('Wings', 'So many sauce options it makes it hard to choose just one - that\'s why you can have up to 5', Wings);
  const pasta = new menuItem('Spaghetti Meatballs', 'If you wanna bring a date and feel like the Lady and the Tramp, this is the perfect meal for you ', Pasta);
  const cknfries = new menuItem('Nuggies & Fries', 'Simple and delicious, what else can you ask for?!', Cknfries);
  const burger = new menuItem('Juicy Burger', 'FYI this is cow meat, no worries we are not cannibals', Burger);

  itemCont.append(
    tacos.createItem(),
    pizza.createItem(),
    wings.createItem(),
    pasta.createItem(),
    cknfries.createItem(),
    burger.createItem(),
  );

  iMenu.append(
    textContent,
    itemCont,
  );

  return iMenu;
};
