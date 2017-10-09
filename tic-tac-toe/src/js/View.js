const updateWinner = (message) => {
  const el = document.getElementById('result-text');
  el.textContent = message;
};

export const showWin = (winCombo, winnerSymbol, humanSymbol) => {
  let message = '';

  if (winnerSymbol === humanSymbol) {
    message = 'you won';
  } else if (winnerSymbol && winnerSymbol !== humanSymbol) {
    message = 'you lost';
  } else {
    message = 'tie';
  }

  updateWinner(message);

  winCombo.forEach((val) => {
    document.getElementById(val).classList.add(
      winnerSymbol === humanSymbol ? 'board__cell--green' : 'board__cell--red',
    );
  });
};

export const resetView = (boardCells) => {
  boardCells.forEach((cell) => {
    cell.textContent = '';
    cell.classList.remove('board__cell--green', 'board__cell--red');
  });
};

export const updateBoardView = (cell, symbol) => {
  cell.textContent = symbol;
};
