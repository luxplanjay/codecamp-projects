import * as sound from './Sound';

export const makeClickable = () => {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach((btn) => {
    btn.classList.remove('unclickable');
  });

  buttons.forEach((btn) => {
    btn.classList.add('clickable');
  });
};

export const makeNotClickable = () => {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach((btn) => {
    btn.classList.remove('clickable');
  });

  buttons.forEach((btn) => {
    btn.classList.add('unclickable');
  });
};

export const showSequence = (sequence) => {
  let timeout = 0;
  let timerId;
  const idList = [];

  makeNotClickable();

  sequence.forEach((x) => {
    timerId = setTimeout(() => {
      document.getElementById(x).classList.add('active');
      sound.playGoodTone(x);
    }, timeout);
    timeout += 500;
    idList.push(timerId);

    timerId = setTimeout(() => {
      document.getElementById(x).classList.remove('active');
      sound.stopGoodTones();
    }, timeout);
    timeout += 500;
    idList.push(timerId);
  });

  timerId = setTimeout(() => {
    makeClickable();
  }, timeout);

  idList.push(timerId);

  return idList;
};

export const updateStepCount = (el, val) => {
  el.textContent = val.length > 1 ? val : `0${val}`;
};

export const highlightClickTarget = (el) => {
  el.classList.add('active');
  setTimeout(() => {
    el.classList.remove('active');
  }, 500);
};


export const clearIntervals = (intervals) => {
  intervals.forEach((id) => {
    clearInterval(id);
  });
};

export const resetButtons = (buttons) => {
  buttons.forEach((button) => {
    button.classList.remove('active');
  });
};

export const playOnValidInput = (val) => {
  makeNotClickable();
  sound.playGoodTone(val);
  setTimeout(() => {
    sound.stopGoodTones();
  }, 500);
};

export const playOnErrInput = () => {
  makeNotClickable();
  sound.playErrTone();
  setTimeout(() => {
    sound.stopErrTone();
  }, 500);
};

export const showMessage = (el, msg, delay) => {
  el.textContent = msg;
  setTimeout(() => {
    el.textContent = '';
  }, delay);
};
