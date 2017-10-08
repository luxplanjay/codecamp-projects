export default class Game {
  constructor() {
    this.sequence = [];
    this.userSequence = [];
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

    return this.sequence[idx] === val;
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

  reset() {
    this.resetUserSequence();
    this.sequence = [];
  }
}
