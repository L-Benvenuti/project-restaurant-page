import { menuItem } from './menu-items';
import Anemone from '../imgs/food-items/deathWish/anemone.png';
import Azalea from '../imgs/food-items/deathWish/azalea.png';
import Chinaberry from '../imgs/food-items/deathWish/chinaberries.png';
import Lily from '../imgs/food-items/deathWish/lily.png';
import Olander from '../imgs/food-items/deathWish/olander.png';
import SagoPalm from '../imgs/food-items/deathWish/sago-palm.png';

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

  const anemone = new menuItem('Anemone', 'Blisters, hemorrhagic gastritis, shock, convulsions, and of course death...', Anemone);
  const azalea = new menuItem('Azalea Leaves', 'Some seizures, maybe a little indigestion, diarrhoea, and yeah... that too', Azalea);
  const chinaberry = new menuItem('Chinaberries', 'Drooling, diarrhoea, depression... and another D word...', Chinaberry);
  const lily = new menuItem('Lilies', 'Kidney failure within 36-72 hours which you know what means...', Lily);
  const olander = new menuItem('Olander Plant', 'Well, if this can kill a horse in minutes... imagine you, a tiny little chubby capy', Olander);
  const sagoPalm = new menuItem('Sago Palm', 'Since all parts are poisonous, there\'s no margin of error over here. Besides increased thirst and lethargy, you die', SagoPalm);

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
