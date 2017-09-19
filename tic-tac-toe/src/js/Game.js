import { forEach, random } from 'lodash';

export default class Game {
  constructor() {
    this.winner = '';
    this.enabled = false;
    this.gameEnded = false;
    this.boardState = {
      0: '',
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
    };
    this.winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];
  }

  computerTurn() {
    let endTurn = false;
    let num = null;

    forEach(this.boardState, (state) => {
      if (state === '') {
        while (!endTurn) {
          const rand = random(8);

          if (this.boardState[rand] === '') {
            this.setBoardState(rand, 'o');
            endTurn = true;
            num = rand;
          }
        }
      }
    });

    return num;
  }

  checkWinCondition(symbol) {
    return this.winConditions.some((condition) => {
      let isVictory = true;

      forEach(condition, (x) => {
        if (this.boardState[x] !== symbol) isVictory = false;
      });

      return isVictory;
    });
  }

  setBoardState(index, symbol) {
    this.boardState[index] = symbol;
    this.gameEnded = this.checkWinCondition(symbol);
    if (this.gameEnded) this.winner = symbol;
  }

  resetGame() {
    this.winner = '';
    this.gameEnded = false;
    this.boardState = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '' };
  }
}

