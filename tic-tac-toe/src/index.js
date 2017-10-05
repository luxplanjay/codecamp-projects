import Player from './js/Player';
import Board from './js/Board';
import Game from './js/Game';
import * as ui from './js/UI';
import './sass/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const board = new Board({
    boardSelector: '.board',
    cellSelector: '.board__cell',
  });
  const game = new Game(board);
  const human = new Player('x');
  const computer = new Player('o');

  board.self.addEventListener('click', (e) => {
    const target = e.target;
    const targetId = e.target.id;

    if (target !== board.self && board.isEnabled && game.isEmptyCell(targetId)) {
      // human turn
      game.playTurn(targetId, human.symbol);
      ui.updateBoardView(target, human.symbol);

      // if win then update UI and finish game
      if (game.hasEnded) {
        ui.showWin(game.winCombo, game.winner);
        game.finish();
      //  if not win then check for tie
      } else if (!game.isTie) {
        // if not tie then make computer turn
        const cellId = game.computerCellChoice(game.boardState, computer.symbol).index;
        game.playTurn(cellId, computer.symbol);
        ui.updateBoardView(document.getElementById(cellId), computer.symbol);

        // if win then update UI and finish game
        if (game.hasEnded) {
          ui.showWin(game.winCombo, game.winner);
          game.finish();
        }
      } else if (game.isTie) {
        alert('TIE');
      }
    }
  });

  game.start();
});


//   uiChoiceBox.addEventListener('click', (e) => {
//     if (e.target.id === 'cross') {
//       console.log('x');
//     } else if (e.target.id === 'circle') {
//       console.log('o');
//     }
//   });
// });

