import '../sass/main.scss';

import Timer from './Timer';
import Knob from 'knob';

const sessionKnob = Knob({
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

const timer = new Timer({
  onTick: onTick,
  onEnd: onEnd,
  onStart: onStart,
  onReset: onReset
});

// $View
const output = document.getElementById('clock-text'),
      startBtn = document.querySelector('#start'),
      resetBtn = document.querySelector('#reset');

startBtn.addEventListener('click', () => {
  if(!timer.isActive) {
    timer.start(70);
    startBtn.textContent = 'pause';
    console.log('START');
  } else {
    startBtn.textContent = 'start';
    timer.stop();
    console.log('STOP!');
  }
});

resetBtn.addEventListener('click', () => {
  timer.reset();
});

function onStart() {}

function onTick() {
  let time = new Date(timer.get()),
      hours = padNumbers(time.getUTCHours()),
      minutes = padNumbers(time.getMinutes()),
      seconds = padNumbers(time.getSeconds());

  output.textContent = `${hours}:${minutes}:${seconds}`;
}

function onEnd() {
  console.log('END');
}

function onReset() {
  console.log('RESET');
  startBtn.textContent = 'start';
  output.textContent = '00:00:00';
}

function padNumbers (val) {
  if(val.toString().length <= 1) {
    return `0${val}`;
  }
  return val;
}


