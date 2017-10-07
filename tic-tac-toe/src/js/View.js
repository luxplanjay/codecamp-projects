const showWinner = (message) => {
  const el = document.getElementById('result');
  el.textContent = message;
};

export const showWin = (winCombo, winnerSymbol, message) => {
  showWinner(message);
  winCombo.forEach((val) => {
    document.getElementById(val).style.backgroundColor =
      winnerSymbol === 'x' ? 'green' : 'red';
  });
};

export const resetView = (boardCells) => {
  const resultField = document.getElementById('result');
  resultField.textContent = '';

  boardCells.forEach((cell) => {
    cell.textContent = '';
  });
};

export const updateBoardView = (el, symbol) => {
  el.textContent = symbol;
};
