import Game from './js/Game';
import * as ui from './js/UI';
import './sass/index.scss';

const game = new Game();

document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.querySelector('#start-btn');
  const resetBtn = document.querySelector('#reset-btn');
  const buttons = document.querySelector('.buttons');
  const stepCount = document.querySelector('#step-count');
  let isBoardActive = false;

  buttons.addEventListener('click', (evt) => {
    const target = evt.target;
    const val = +evt.target.id;

    if (target !== buttons && isBoardActive) {
      ui.highlightClickTarget(target);

      if (game.isValidInput(val)) {
        game.addToUserSequence(val);

        if (game.isNextTurn()) {
          isBoardActive = false;
          game.playTurn();

          setTimeout(() => {
            ui.updateStepCount(stepCount, game.sequence.length);
            ui.showSequence(game.sequence);
            isBoardActive = true;
          }, 1000);
        }
      } else {
        alert('Wrong color, replaying turn!');
        isBoardActive = false;
        game.replayTurn();
        setTimeout(() => {
          ui.showSequence(game.sequence);
          isBoardActive = true;
        }, 1000);
      }
    }
  });

  startBtn.addEventListener('click', () => {
    game.playTurn();
    ui.updateStepCount(stepCount, game.sequence.length);
    ui.showSequence(game.sequence);

    startBtn.disabled = true;
    resetBtn.disabled = false;
    isBoardActive = true;
  });

  resetBtn.addEventListener('click', () => {
    game.reset();
    ui.updateStepCount(stepCount, game.sequence.length);

    startBtn.disabled = false
    resetBtn.disabled = true;
  })
});
