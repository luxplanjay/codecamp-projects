import Player from './js/Player';
import Board from './js/Board';
import Game from './js/Game';
import * as View from './js/View';
import './sass/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const symbolModal = document.querySelector('#symbol-modal');
  const resultModal = document.querySelector('#result-modal');
  const restartBtn = document.querySelector('#restart-btn');

  // Class instances
  const board = new Board({
    boardSelector: '.board',
    cellSelector: '.board__cell',
  });
  let human;
  let computer;
  let game;

  // Symbol choice logic
  symbolModal.addEventListener('click', (evt) => {
    if (evt.target.value === 'x' || evt.target.value === 'o') {
      human = new Player(evt.target.value);
      computer = evt.target.value === 'x'
        ? new Player('o')
        : new Player('x');

      game = new Game({
        huSymbol: human.symbol,
        aiSymbol: computer.symbol,
      });

      board.enable();
      symbolModal.style.display = 'none';
    }
  });

  // Main game logic, board clicks
  board.self.addEventListener('click', (e) => {
    const target = e.target;
    const targetId = e.target.id;

    if (target !== board.self && board.isEnabled && game.isEmptyCell(targetId)) {
      // human turn
      game.playTurn(targetId, human.symbol);
      View.updateBoardView(target, human.symbol);

      // if win then update UI and finish game
      if (game.hasEnded) {
        View.showWin(game.winCombo, game.winner, human.symbol);
        game.reset();
        board.disable();
        resultModal.style.display = 'block';
        //  if not win then check for tie
      } else if (!game.isTie) {
        // if not tie then make computer turn
        const cellId = game.computerCellChoice(computer.symbol);
        game.playTurn(cellId, computer.symbol);
        View.updateBoardView(document.getElementById(cellId), computer.symbol);

        // if win then update UI and finish game
        if (game.hasEnded) {
          View.showWin(game.winCombo, game.winner, human.symbol);
          game.reset();
          board.disable();
          resultModal.style.display = 'block';
        }
      } else if (game.isTie) {
        View.showWin([], game.winner, human.symbol);
        game.reset();
        board.disable();
        resultModal.style.display = 'block';
      }
    }
  });

  // Restart click logic
  restartBtn.addEventListener('click', () => {
    resultModal.style.display = 'none';
    View.resetView(board.cells);
    board.enable();
  });
});

