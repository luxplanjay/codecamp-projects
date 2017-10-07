export default class Game {
  constructor() {
    this.sequence = [];
    this.hasEnded = false;
    this.nextTurn = false;
    this.userSequence = [];
  }

  addStepToSequence() {
    this.sequence.push(Math.round(Math.random() * 3));
  }

  addToUserSequence(val) {
    this.userSequence.push(+val);
  }

  resetUserSequence() {
    this.userSequence = [];
  }

  playTurn() {
    this.resetUserSequence();
    this.addStepToSequence();
  }

  compareInput() {
    const userLast = this.userSequence[this.userSequence.length - 1];
    if (this.sequence[this.userSequence.length - 1] === userLast) {
      return true;
    }
    return false;
  }

  compareSequences() {
    let isEqual = true;
    this.sequence.forEach((x, idx) => {
      if (this.userSequence[idx] !== x) {
        isEqual = false;
      }
    });

    this.nextTurn = isEqual;
  }

  reset() {
    this.resetUserSequence();
    this.sequence = [];
  }
}
