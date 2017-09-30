/**
 * Created by Zerk on 06-Jun-17.
 */

import Knob from 'knob';
import sound from '../audio/pomodoro-sound.mp3';

export const sessionKnob = Knob({
  label: 'minutes',
  value: 25,
  angleOffset: 0,
  angleArc: 360,
  min: 0,
  max: 120,
  width: 120,
  thickness: 0.35,
  bgColor: '#424242',
  fgColor: '#64FFDA',
  labelColor: '#ccc',
  className: 'knob',
});

export const breakKnob = Knob({
  label: 'minutes',
  value: 5,
  angleOffset: 0,
  angleArc: 360,
  min: 0,
  max: 30,
  width: 120,
  bgColor: '#424242',
  fgColor: '#64FFDA',
  labelColor: '#ccc',
  className: 'knob',
});

document.querySelector('#session-knob').append(sessionKnob);
document.querySelector('#break-knob').append(breakKnob);

const output = document.querySelector('#timer-text');
const startBtn = document.querySelector('#start-btn');

const padDigits = val => val.toString().length <= 1 ? `0${val}` : val;

export const onTick = (ms) => {
  const time = new Date(ms);
  const hours = padDigits(time.getUTCHours());
  const minutes = padDigits(time.getMinutes());
  const seconds = padDigits(time.getSeconds());

  output.textContent = `${hours}:${minutes}:${seconds}`;
};

export const onEnd = () => {
  const audio = new Audio(sound);
  audio.play();
};

export const onReset = () => {
  startBtn.textContent = 'start';
  output.textContent = '00:00:00';
};

export const toggleBtnState = (val) => {
  if (val === 'pause') {
    startBtn.textContent = 'pause';
    startBtn.classList.remove('controls__btn--green');
    startBtn.classList.add('controls__btn--yellow');
  } else if (val === 'start') {
    startBtn.textContent = 'start';
    startBtn.classList.remove('controls__btn--yellow');
    startBtn.classList.add('controls__btn--green');
  }
};
