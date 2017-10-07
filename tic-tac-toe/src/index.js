import Player from './js/Player';
import Board from './js/Board';
import Game from './js/Game';
import * as View from './js/View';
import './sass/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const human = new Player('x');
  const computer = new Player('o');
  const board = new Board({
    boardSelector: '.board',
    cellSelector: '.board__cell',
  });
  const game = new Game({
    board,
    huSymbol: human.symbol,
    aiSymbol: computer.symbol,
  });

  board.self.addEventListener('click', (e) => {
    const target = e.target;
    const targetId = e.target.id;

    if (target !== board.self && board.isEnabled && game.isEmptyCell(targetId)) {
      // human turn
      game.playTurn(targetId, human.symbol);
      View.updateBoardView(target, human.symbol);

      // if win then update UI and finish game
      if (game.hasEnded) {
        View.showWin(
          game.winCombo,
          game.winner,
          game.winner === human.symbol ? 'You won' : 'You lost',
        );
        game.finish();
      //  if not win then check for tie
      } else if (!game.isTie) {
        // if not tie then make computer turn
        const cellId = game.computerCellChoice(game.boardState, computer.symbol);
        game.playTurn(cellId, computer.symbol);

        View.updateBoardView(document.getElementById(cellId), computer.symbol);

        // if win then update UI and finish game
        if (game.hasEnded) {
          View.showWin(
            game.winCombo,
            game.winner,
            game.winner === human.symbol ? 'You won' : 'You lost',
          );
          game.finish();
        }
      } else if (game.isTie) {
        View.showWin([], game.winner, 'Tie');
        game.finish();
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

