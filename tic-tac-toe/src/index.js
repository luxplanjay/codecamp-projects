import Game from './js/Game';
import Board from './js/Board';
import Player from './js/Player';
import ui from './js/ui';
import './sass/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  ui.createLayout();

  const x = new Player('x');
  const o = new Player('o');
  const board = new Board('.board__item');
  const game = new Game();
  const uiBoard = document.querySelector('.board');
  const uiChoiceBox = document.querySelector('.symbol-choice');

  uiBoard.addEventListener('click', (e) => {
    if (board.enabled) {
      console.log('board enabled');
      if (e.target !== uiBoard) {
        e.target.style.backgroundImage = 'url("../img/cross.svg")';
      }
    } else {
      console.log('board disabled');
    }
  });

  uiChoiceBox.addEventListener('click', (e) => {
    if (e.target.id === 'cross') {
      console.log('x');
    } else if (e.target.id === 'circle') {
      console.log('o');
    }
  });
});

function handleClick(e) {
  const boardItems = document.querySelectorAll('.board__item');

  // if (!game.gameEnded) {
  //   if (e.target.textContent === '') {
  //     e.target.textContent = 'x';
  //
  //     forEach(boardItems, (item, index) => {
  //       if (item === e.target) {
  //         game.setBoardState(index, 'x');
  //       }
  //     });
  //
  //     if (!game.gameEnded) {
  //       const val = game.computerTurn();
  //       if (val !== null) boardItems[val].textContent = 'o';
  //     }
  //
  //     const test = Array.from(boardItems);
  //
  //     if (test.every(x => x.textContent !== '')) {
  //       ui.showWinner('draw');
  //       setTimeout(() => {
  //         ui.resetUI();
  //         game.resetGame();
  //       }, 2000);
  //     }
  //   }
  // }
  //
  // if (game.gameEnded) {
  //   ui.showWinner(game.winner);
  //   setTimeout(() => {
  //     ui.resetUI();
  //     game.resetGame();
  //   }, 2000);
  // }
}

