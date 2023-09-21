import { menuItem } from './menu-items';
import Grass from '../imgs/food-items/boring/grass.png';
import WaterPlants from '../imgs/food-items/boring/water-plants.png';
import Grains from '../imgs/food-items/boring/grains.png';
import Melon from '../imgs/food-items/boring/melon.png';
import Reeds from '../imgs/food-items/boring/reeds.png';
import Squash from '../imgs/food-items/boring/squash.png';

export const boring = () => {
  const bMenu = document.createElement('div');
  bMenu.classList = 'menuContainer';

  const textContent = document.createElement('div');
  textContent.classList = 'text-content';

  const title = document.createElement('h1');
  title.classList = 'menuTitle';
  title.innerText = 'Boring Menu';

  const subtext = document.createElement('p');
  subtext.classList = 'menuSubt';
  subtext.innerText = 'I guess if you enjoy super boring food, these are for you'
    + '\nConsider these our low carbs (whatever that means...)';

  textContent.append(
    title,
    subtext,
  );

  const itemCont = document.createElement('div');
  itemCont.classList = 'itemContainer';

  const grass = new menuItem('Grass', 'The best grass you\'ve ever eaten', Grass);
  const grains = new menuItem('Grains', 'If you feel constipated, I\'ve heard this helps', Grains);
  const melon = new menuItem('Melon', 'Best fruit on the entire planet - better than the one your mom gets you', Melon);
  const reeds = new menuItem('Reeds', 'Not even sure what this is, but yeah... delicious', Reeds);
  const squash = new menuItem('Squash', 'Pretty good pumpkin wannabe', Squash);
  const waterPlant = new menuItem('Water Plants', 'Another delicious green thing', WaterPlants);

  itemCont.append(
    grass.createItem(),
    grains.createItem(),
    melon.createItem(),
    reeds.createItem(),
    squash.createItem(),
    waterPlant.createItem(),
  );

  bMenu.append(
    textContent,
    itemCont,
  );

  return bMenu;
};
