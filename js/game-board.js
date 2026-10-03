import { createElement } from './create-element.js';
import { cards } from './cards.js';

// функция отрисовки игрового поля
export const renderGameBoard = () => {
  const main = createElement('main', 'main');
  const moves = createElement('span', 'moves', 'Moves: ');
  const foundPairs = createElement('span', 'found-pairs', 'Found pairs: ');
  const container = createElement('div', 'container__game-board');

  const deck = getDeck();

  main.append(moves);
  main.append(foundPairs);
  main.append(container);

  renderCards(container, deck);
  return main;
};

// функция создает колду в 16 карт и перемешивает ее
const getDeck = () => {
  const deck = [...cards, ...cards];

  // перемешать колоду
  for (let i = deck.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
  }

  return deck;
};

// функция отрисовки карточек
const renderCards = (gameBoard, deck) => {
  deck.forEach((item) => {
    const card = createElement('div', 'card');
    const image = createElement('img', 'card__image', null, { src: item.image, alt: `Карточка ${item.id}` });

    gameBoard.append(card);
    card.append(image);
  });
};