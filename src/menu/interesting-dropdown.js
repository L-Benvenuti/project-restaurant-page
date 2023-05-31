import { menuItem } from './menu-items';

export const interesting = () => {
  const iMenu = document.createElement('div');
  iMenu.classList = 'menuContainer';

  const title = document.createElement('h1');
  title.classList = 'menuTitle';
  title.innerText = 'Boring Menu';

  const subtext = document.createElement('p');
  subtext.classList = 'menuSubt';
  subtext.innerText = 'I guess if you enjoy super boring food, these are for you'
      + '\nConsider these our low carbs (whatever that means...)';

  const grass = new menuItem('Grass', 'The best grass you\'ve ever eaten', Grass);
  const grains = new menuItem('Grains', 'If you feel constipated, I\'ve heard this helps', Grains);
  const melon = new menuItem('Melon', 'Best fruit on the entire planet - better than the one your mom gets you', Melon);
  const reeds = new menuItem('Reeds', 'Not even sure what this is, but yeah... delicious', Reeds);
  const squash = new menuItem('Squash', 'Pretty good pumpkin wannabe', Squash);
  const waterPlant = new menuItem('Water Plants', 'Another delicious green thing', WaterPlants);

  iMenu.append(
    title,
    subtext,
    grass.createItem(),
    grains.createItem(),
    melon.createItem(),
    reeds.createItem(),
    squash.createItem(),
    waterPlant.createItem(),
  );

  return iMenuMenu;
};
