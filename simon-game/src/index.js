import Game from './js/Game';
import * as ui from './js/UI';
import * as sound from './js/Sound';
import './sass/index.scss';


document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.querySelector('#start-btn');
  const resetBtn = document.querySelector('#reset-btn');
  const buttonsBox = document.querySelector('.buttons');
  const buttons = document.querySelectorAll('.btn');
  const stepCount = document.querySelector('#step-count');
  const check = document.querySelector('#check');
  const output = document.querySelector('#output');
  const game = new Game();
  let intervals = [];

  buttonsBox.addEventListener('click', (evt) => {
    const target = evt.target;
    const val = parseInt(evt.target.id);

    if (target !== buttonsBox) {
      ui.highlightClickTarget(target);

      // check if input is valid, if no then replay turn depending on Strict mode state
      if (game.isValidInput(val)) {
        ui.playOnValidInput(val);
        game.addToUserSequence(val);

        // if not next turn then unlock buttons to be clickable
        if (!game.isNextTurn()) {
          setTimeout(() => {
            ui.makeClickable();
          }, 500);
        }

        if (game.isNextTurn()) {
          if (game.isVictory()) {
            ui.showMessage(output, 'Congrats, u won!', 2000);
            game.reset();
            setTimeout(() => {
              ui.resetButtons(buttons);
              ui.updateStepCount(stepCount, game.sequence.length);
              game.setStrictMode(false);
              check.checked = false;
              check.disabled = false;
              startBtn.disabled = false;
              resetBtn.disabled = true;
            }, 1000);
          } else {
            ui.makeNotClickable();
            game.playTurn();
            setTimeout(() => {
              ui.updateStepCount(stepCount, game.sequence.length);
              intervals = ui.showSequence(game.sequence);
            }, 2000);
          }
        }
      } else if (game.isStrict) {
        ui.showMessage(output, 'wrong input, restarting game!', 1500);
        ui.playOnErrInput();
        game.reset();
        game.playTurn();
        ui.updateStepCount(stepCount, game.sequence.length);
        setTimeout(() => {
          intervals = ui.showSequence(game.sequence);
        }, 1500);
      } else {
        ui.showMessage(output, 'wrong input, replaying turn!', 1500);
        ui.playOnErrInput();
        game.replayTurn();
        setTimeout(() => {
          intervals = ui.showSequence(game.sequence);
        }, 1500);
      }
    }
  });

  startBtn.addEventListener('click', () => {
    check.disabled = true;
    game.setStrictMode(check.checked);
    game.playTurn();
    ui.updateStepCount(stepCount, game.sequence.length);
    intervals = ui.showSequence(game.sequence);
    startBtn.disabled = true;
    resetBtn.disabled = false;
  });

  resetBtn.addEventListener('click', () => {
    game.reset();
    ui.clearIntervals(intervals);
    sound.stopGoodTones();
    ui.resetButtons(buttons);
    ui.updateStepCount(stepCount, game.sequence.length);
    game.setStrictMode(false);
    check.checked = false;
    check.disabled = false;
    startBtn.disabled = false;
    resetBtn.disabled = true;
  });
});
