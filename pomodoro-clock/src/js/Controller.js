/**
 * Created by Zerk on 06-Jun-17.
 */

import Model from './Model';
import * as View from './View';

export default function () {
  let timer = null;
  let sessionTime;
  let breakTime;
  const startBtn = document.querySelector('#start-btn');
  const resetBtn = document.querySelector('#reset-btn');

  startBtn.addEventListener('click', () => {
    sessionTime = View.sessionKnob.children[1].value;
    breakTime = View.breakKnob.children[1].value;

    if (timer) {
      if (!timer.isActive) {
        timer.start();
        View.toggleBtnState('pause');
      } else {
        timer.stop();
        View.toggleBtnState('start');
      }
    } else {
      timer = new Model({
        sessionTime,
        breakTime,
        onTick: View.onTick,
        onEnd: View.onEnd,
        onReset: View.onReset,
      });

      timer.start();
      View.toggleBtnState('pause');
    }
  });

  resetBtn.addEventListener('click', () => {
    if (timer) {
      timer.reset();
      timer = null;
      View.toggleBtnState('start');
    }
  });
}
