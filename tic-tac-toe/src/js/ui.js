import choiceBoxTpl from '../templates/choice-box.hbs';
import resultBoxTpl from '../templates/resultBox.hbs';
import boardTpl from '../templates/board.hbs';


const createLayout = () => {
  const parent = document.getElementById('app-root');

  const board = boardTpl();
  const resultBox = resultBoxTpl();
  const choiceBox = choiceBoxTpl();

  parent.innerHTML += board + resultBox + choiceBox;
};

const showWinner = (str) => {
  const el = document.getElementById('result');
  el.textContent = `winner is: ${str}`;
};

const resetUI = () => {
  const boardItems = document.querySelectorAll('.board__item');
  const result = document.getElementById('result');

  boardItems.forEach((item) => {
    item.textContent = '';
  });

  result.textContent = '';
};

export default {
  createLayout,
  showWinner,
  resetUI,
};
