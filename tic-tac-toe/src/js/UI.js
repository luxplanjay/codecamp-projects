const showWinner = (winner) => {
  const el = document.getElementById('result');
  el.textContent = `winner is: ${winner}`;
};

export const showWin = (winCombo, winnerSymbol) => {
  showWinner(winnerSymbol);
  winCombo.forEach((val) => {
    document.getElementById(val).style.backgroundColor =
      winnerSymbol === 'x' ? 'green' : 'red';
  });
};

export const resetView = (boardCells) => {
  const resultField = document.getElementById('result');

  boardCells.forEach((cell) => {
    cell.textContent = '';
  });

  resultField.textContent = '';
};

export const updateBoardView = (el, symbol) => {
  el.textContent = symbol;
};
