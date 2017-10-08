export const showSequence = (sequence) => {
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

export const updateStepCount = (el, val) => {
  el.textContent = val;
};

export const highlightClickTarget = (el) => {
  el.classList.add('active');
  setTimeout(() => {
    el.classList.remove('active');
  }, 200);
}
