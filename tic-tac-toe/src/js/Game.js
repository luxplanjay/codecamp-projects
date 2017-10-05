export default class Game {
  constructor(board) {
    this.winner = null;
    this.hasEnded = false;
    this.isTie = false;
    this.board = board;
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
    this.winCombo = null;
  }

  start() {
    this.board.enable();
  }

  finish() {
    this.board.disable();
    this.reset();
  }

  reset() {
    this.winner = '';
    this.hasEnded = false;
    this.boardState = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '' };
  }

  computerCellChoice(board, curPlayer) {
    const huSymbol = 'x';
    const aiSymbol = 'o';

    const emptyCells = [];
    Object.entries(board).forEach((entry) => {
      if (entry[1] !== 'x' && entry[1] !== 'o') emptyCells.push(entry[0]);
    });

    if (this.checkForWin(huSymbol)) {
      return { score: -10 };
    } else if (this.checkForWin(aiSymbol)) {
      return { score: 10 };
    } else if (emptyCells.length === 0) {
      return { score: 0 };
    }

    const moves = [];
    emptyCells.forEach((cell) => {
      const move = {};
      move.index = cell;
      board[cell] = curPlayer;

      if (curPlayer === aiSymbol) {
        move.score = this.computerCellChoice(board, huSymbol).score;
      } else {
        move.score = this.computerCellChoice(board, aiSymbol).score;
      }

      board[cell] = move.index;
      moves.push(move);
    });

    let bestMove;
    if (curPlayer === aiSymbol) {
      let bestScore = -10000;

      moves.forEach((move, idx) => {
        if (move.score > bestScore) {
          bestScore = move.score;
          bestMove = idx;
        }
      });
    } else {
      let bestScore = 10000;

      moves.forEach((move, idx) => {
        if (move.score < bestScore) {
          bestScore = move.score;
          bestMove = idx;
        }
      });
    }

    return moves[bestMove];
  }

  checkForWin(symbol) {
    return this.winConditions.some((condition) => {
      let isVictory = true;
      this.winCombo = condition;

      condition.forEach((x) => {
        if (this.boardState[x] !== symbol) isVictory = false;
      });

      return isVictory;
    });
  }

  checkForTie() {
    this.isTie = Object.values(this.boardState)
      .filter(value => value !== 'x' && value !== 'o').length === 0;
  }

  isEmptyCell(cellId) {
    return this.boardState[cellId] !== 'x' && this.boardState[cellId] !== 'o';
  }

  setBoardState(idx, symbol) {
    this.boardState[idx] = symbol;
  }

  playTurn(cellId, symbol) {
    this.setBoardState(cellId, symbol);
    this.hasEnded = this.checkForWin(symbol);
    if (this.hasEnded) {
      this.winner = symbol;
    } else {
      this.checkForTie();
    }
  }
}
