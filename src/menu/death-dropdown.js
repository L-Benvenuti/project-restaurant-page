import { menuItem } from './menu-items';
import Anemone from '../imgs/food-items/deathWish/anemone.jpeg';
import Azalea from '../imgs/food-items/deathWish/azalea.jpg';
import Chinaberry from '../imgs/food-items/deathWish/chinaberries.jpg';
import Lily from '../imgs/food-items/deathWish/lily.png';
import Olander from '../imgs/food-items/deathWish/olander.png';
import SagoPalm from '../imgs/food-items/deathWish/sago-palm.jpg';

export const death = () => {
  const dMenu = document.createElement('div');
  dMenu.classList = 'menuContainer';

  const textContent = document.createElement('div');
  textContent.classList = 'text-content';

  const title = document.createElement('h1');
  title.classList = 'menuTitle';
  title.innerText = 'Death Wish Menu';

  const subtext = document.createElement('p');
  subtext.classList = 'menuSubt';
  subtext.innerText = 'Well... we all know what these are...'
      + '\nDisclaimer: We take no responsibility for the outcome of eating these items.';

  textContent.append(
    title,
    subtext,
  );

  const itemCont = document.createElement('div');
  itemCont.classList = 'itemContainer';

  const anemone = new menuItem('Anemone', 'The best grass you\'ve ever eaten', Anemone);
  const azalea = new menuItem('Azalea Leaves', 'If you feel constipated, I\'ve heard this helps', Azalea);
  const chinaberry = new menuItem('Chinaberries', 'Best fruit on the entire planet - better than the one your mom gets you', Chinaberry);
  const lily = new menuItem('Lilies', 'Not even sure what this is, but yeah... delicious', Lily);
  const olander = new menuItem('Olander Plant', 'Pretty good pumpkin wannabe', Olander);
  const sagoPalm = new menuItem('Sago Palm', 'Another delicious green thing', SagoPalm);

  itemCont.append(
    anemone.createItem(),
    azalea.createItem(),
    chinaberry.createItem(),
    lily.createItem(),
    olander.createItem(),
    sagoPalm.createItem(),
  );

  dMenu.append(
    textContent,
    itemCont,
  );

  return dMenu;
};
