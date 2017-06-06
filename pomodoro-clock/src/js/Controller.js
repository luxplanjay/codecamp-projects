/**
 * Created by Zerk on 06-Jun-17.
 */

import {Model} from './Model';
import {View} from './View';

document.addEventListener('DOMContentLoaded', () => {
  let timer = null,
      sessionTime,
      breakTime;

  const  startBtn = document.querySelector('#start'),
        resetBtn = document.querySelector('#reset');

  startBtn.addEventListener('click', () => {
    sessionTime = View.sessionKnob.children[1].value;
    breakTime = View.breakKnob.children[1].value;

    if(timer) {
      if(!timer.isActive) {
        timer.start();
        View.toggleBtnState('pause');
      } else {
        timer.stop();
        View.toggleBtnState('start');
      }
    } else {
      timer = new Model({
        sessionTime: sessionTime,
        breakTime: breakTime,
        onTick: View.onTick,
        onEnd: View.onEnd,
        onStart: View.onStart,
        onReset: View.onReset
      });

      timer.start();
      View.toggleBtnState('pause');
    }
  });

  resetBtn.addEventListener('click', () => {
    if(timer) {
      timer.reset();
      timer = null;
      View.toggleBtnState('start');
    }
  });
});
