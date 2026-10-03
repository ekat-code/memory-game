import { createElement } from './create-element.js';

export const renderHeader = () => {
  const header = createElement('header', 'header');
  const buttonNewGame = createElement('button', 'button__new-game', 'New game');
  const buttonLeaderboard = createElement('button', 'button__leaderboard', 'Leaderboard');

  header.append(buttonNewGame);
  header.append(buttonLeaderboard);

  return header;
};