import Game from './js/Game';
import './sass/index.scss';

const game = new Game();

const showSequence = (sequence) => {
  let timeout = 0;

  sequence.forEach(x => {
    setTimeout(() => {
      document.getElementById(x).classList.add('active');
    }, timeout);
    timeout += 500;

    setTimeout(() => {
      document.getElementById(x).classList.remove('active');
    }, timeout);
    timeout += 500;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.querySelector('#start-btn');
  const resetBtn = document.querySelector('#reset-btn');
  const buttons = document.querySelector('.buttons');
  const stepCount = document.querySelector('#step-count');

  buttons.addEventListener('click', (e) => {
    if (e.target !== buttons) {
      e.target.classList.add('active');
      setTimeout(() => {
        e.target.classList.remove('active');
      }, 300);

      game.addToUserSequence(e.target.id);
      if (game.compareInput()) {
        game.compareSequences();
        if (game.nextTurn) {
          game.playTurn();
          setTimeout(() => {
            stepCount.textContent = game.sequence.length;
            showSequence(game.sequence);
          }, 1000);
        }
      } else {
        alert('wrong color');
      }
    }
  });

  startBtn.addEventListener('click', () => {
    game.playTurn();
    stepCount.textContent = game.sequence.length;
    showSequence(game.sequence);
    startBtn.disabled = true;
    resetBtn.disabled = false;
  });

  resetBtn.addEventListener('click', () => {
    game.reset();
    stepCount.textContent = game.sequence.length;
    startBtn.disabled = false
    resetBtn.disabled = true;
  })
});
