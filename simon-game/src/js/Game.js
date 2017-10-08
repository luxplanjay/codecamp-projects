export default class Game {
  constructor() {
    this.sequence = [];
    this.userSequence = [];
    this.hasEnded = false;
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
    const idx = this.userSequence.length;

    return this.sequence[idx] === val ? true : false;
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

  reset() {
    this.resetUserSequence();
    this.sequence = [];
  }
}
