let counterClicks = 0;
let counterFoundPairs = 0;

export const handleClickCard = (card) => {
  card.addEventListener('click', () => {
    if (countCardsOpen() >= 2) {
      closeOpenCards();
    }

    card.classList.add('card--open');
    counterClicks++;
    updateMoves();

    if (countCardsOpen() === 2) {
      checkMatchPairs();
    }
  });
};

// проверить пары карт на совпадение
const checkMatchPairs = () => {
  const openCards = [...document.querySelectorAll('.card--open')];

  if (openCards[0].dataset.value === openCards[1].dataset.value) {
    counterFoundPairs++;
    updateFoundPairs();
    return;
  }

  timeout();
};

// обновляет ходы на экране
const updateMoves = () => {
  document.querySelector('.moves').innerText = `Moves: ${counterClicks}`;
};

// обновляет количество найденых пар, на экране
const updateFoundPairs = () => {
  document.querySelector('.found-pairs').innerText = `Found pairs: ${counterFoundPairs}`;
};

// счетчик открытых карточек
const countCardsOpen = () => {
  return document.querySelectorAll('.card--open').length;
};

const closeOpenCards = () => {
  document.querySelectorAll('.card--open').forEach((item) => {
    item.classList.remove('card--open');
  });
};

// таймер
const timeout = () => {
  if (countCardsOpen() === 2) {
    setTimeout(() => {
      closeOpenCards();
    }, 700);
  }
};