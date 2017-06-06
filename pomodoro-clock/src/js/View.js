/**
 * Created by Zerk on 06-Jun-17.
 */

import Knob from 'knob';

export const sessionKnob = Knob({
        label: 'minutes',
        value: 25,
        angleOffset: 0,
        angleArc: 360,
        min: 0,
        max: 120,
        width: 120,
        thickness: 0.35,
        bgColor: '#2C363F',
        fgColor: '#5EEB5B',
        labelColor: '#ccc',
        className: 'knob'
      }),
      breakKnob = Knob({
        label: 'minutes',
        value: 5,
        angleOffset: 0,
        angleArc: 360,
        min: 0,
        max: 30,
        width: 120,
        bgColor: '#2C363F',
        fgColor: '#FF0022',
        labelColor: '#ccc',
        className: 'knob'
      });

document.getElementById('session-knob-cont').append(sessionKnob);
document.getElementById('break-knob-cont').append(breakKnob);

const output = document.getElementById('clock-text'),
      startBtn = document.querySelector('#start');

export function onTick() {
  let time = new Date(this.get()),
      hours = padDigits(time.getUTCHours()),
      minutes = padDigits(time.getMinutes()),
      seconds = padDigits(time.getSeconds());

  output.textContent = `${hours}:${minutes}:${seconds}`;
}

export function onEnd() {
  const audio = new Audio(require('../audio/pomodoro-sound.mp3'));
  audio.play();
}

export function onReset() {
  startBtn.textContent = 'start';
  output.textContent = '00:00:00';
}

function padDigits (val) {
  if(val.toString().length <= 1) {
    return `0${val}`;
  }
  return val;
}

function toggleBtnState(val) {
  if(val === 'pause') {
    startBtn.textContent = 'pause';
    startBtn.classList.remove('btn--green');
    startBtn.classList.add('btn--yellow');
  } else if (val === 'start'){
    startBtn.textContent = 'start';
    startBtn.classList.remove('btn--yellow');
    startBtn.classList.add('btn--green');
  }
}

export const View = {
  sessionKnob: sessionKnob,
  breakKnob: breakKnob,
  onTick: onTick,
  onEnd: onEnd,
  onReset: onReset,
  toggleBtnState: toggleBtnState
};
