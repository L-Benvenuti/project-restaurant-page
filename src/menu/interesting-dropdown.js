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

  const title = document.createElement('h1');
  title.classList = 'menuTitle';
  title.innerText = 'Interesting Menu';

  const subtext = document.createElement('p');
  subtext.classList = 'menuSubt';
  subtext.innerText = 'Now we\'re talking! Nothing like some human food!'
      + '\nEnjoy every last bite!';

  const itemCont = document.createElement('div');
  itemCont.classList = 'itemContainer';

  const tacos = new menuItem('Tacos', 'The best grass you\'ve ever eaten', Tacos);
  const pizza = new menuItem('Pizza', 'If you feel constipated, I\'ve heard this helps', Pizza);
  const wings = new menuItem('Wings', 'Best fruit on the entire planet - better than the one your mom gets you', Wings);
  const pasta = new menuItem('Spaghetti Meatballs', 'Not even sure what this is, but yeah... delicious', Pasta);
  const cknfries = new menuItem('Nuggies & Fries', 'Pretty good pumpkin wannabe', Cknfries);
  const burger = new menuItem('Juicy Burger', 'Another delicious green thing', Burger);

  itemCont.append(
    tacos.createItem(),
    pizza.createItem(),
    wings.createItem(),
    pasta.createItem(),
    cknfries.createItem(),
    burger.createItem(),
  );

  iMenu.append(
    title,
    subtext,
    itemCont,
  );

  return iMenu;
};
