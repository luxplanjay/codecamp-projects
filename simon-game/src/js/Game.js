export default class Game {
  constructor() {
    this.sequence = [];
    this.userSequence = [];
    this.isStrict = false;
  }

  addStepToSequence() {
    this.sequence.push(Math.round(Math.random() * 3));
  }

  addToUserSequence(val) {
    this.userSequence.push(val);
  }

  resetUserSequence() {
    this.userSequence = [];
  }

  playTurn() {
    this.resetUserSequence();
    this.addStepToSequence();
  }

  replayTurn() {
    this.resetUserSequence();
  }

  isValidInput(val) {
    return this.sequence[this.userSequence.length] === val;
  }

  isNextTurn() {
    let isNext = true;

    this.sequence.forEach((x, idx) => {
      if (this.userSequence[idx] !== x) {
        isNext = false;
      }
    });

    return isNext;
  }

  isVictory() {
    return this.sequence.length === 20;
  }

  setStrictMode(state) {
    this.isStrict = state;
  }

  reset() {
    this.resetUserSequence();
    this.sequence = [];
  }
}
