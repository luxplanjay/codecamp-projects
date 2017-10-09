import sounds from '../sounds';

export const playSound = (id) => {
  sounds[id].play();
};

const makeClickable = () => {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach((btn) => {
    btn.classList.remove('unclickable');
  });

  buttons.forEach((btn) => {
    btn.classList.add('clickable');
  });
};

const makeNotClickable = () => {
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

  makeNotClickable();

  sequence.forEach((x) => {
    setTimeout(() => {
      document.getElementById(x).classList.add('active');
      playSound(x);
    }, timeout);
    timeout += 500;

    setTimeout(() => {
      document.getElementById(x).classList.remove('active');
    }, timeout);
    timeout += 500;
  });

  setTimeout(() => {
    makeClickable();
  }, timeout);
};

export const updateStepCount = (el, val) => {
  el.textContent = val.length > 1 ? val : `0${val}`;
};

export const highlightClickTarget = (el) => {
  el.classList.add('active');
  setTimeout(() => {
    el.classList.remove('active');
  }, 200);
};
