import { createElement } from './create-element.js';
import { renderHeader } from './header.js';
import { renderGameBoard } from './game-board.js';

const initApp = () => {
  const app = createElement('div', 'app');
  document.body.append(app);
  app.append(renderHeader(), renderGameBoard());
};

initApp();