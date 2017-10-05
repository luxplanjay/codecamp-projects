export default class Game {
  constructor({ board, huSymbol = '', aiSymbol = '' }) {
    this.winner = null;
    this.hasEnded = false;
    this.isTie = false;
    this.board = board;
    this.huSymbol = huSymbol;
    this.aiSymbol = aiSymbol;
    this.boardState = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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
    this.boardState = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  }

  minmax(board, curPlayer) {
    const emptyCells = [];
    board.forEach((cell) => {
      if (cell !== 'x' && cell !== 'o') emptyCells.push(cell);
    });

    if (this.checkForWin(this.huSymbol)) {
      return { score: -10 };
    } else if (this.checkForWin(this.aiSymbol)) {
      return { score: 10 };
    } else if (emptyCells.length === 0) {
      return { score: 0 };
    }

    const moves = [];
    emptyCells.forEach((cell) => {
      const move = {};
      move.index = cell;
      board[cell] = curPlayer;

      if (curPlayer === this.aiSymbol) {
        move.score = this.minmax(board, this.huSymbol).score;
      } else {
        move.score = this.minmax(board, this.aiSymbol).score;
      }

      board[cell] = move.index;
      moves.push(move);
    });

    let bestMove;
    if (curPlayer === this.aiSymbol) {
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

  computerCellChoice(board, curPlayer) {
    return this.minmax(board, curPlayer).index;
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
    this.isTie = this.boardState.filter(value =>
      value !== 'x' && value !== 'o',
    ).length === 0;
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
