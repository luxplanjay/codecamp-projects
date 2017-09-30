import './sass/main.scss';
import Calculator from './js/Calculator';

document.addEventListener('DOMContentLoaded', () => {
  const controlsBox = document.querySelector('.controls-box');
  const outputField = document.querySelector('.output-field');
  const calc = new Calculator();

  const updateHTML = (val) => {
    outputField.textContent = val;
  };

  const handleClick = (event) => {
    const target = event.target;
    const value = target.value;

    if (target !== this) {
      if (calc.operands.includes(value)) {
        calc.handleOperandInput(value);
      } else if (calc.operators.includes(value)) {
        calc.handleOperatorInput(value);
      } else if (calc.operations.includes(value)) {
        switch (value) {
          case '=':
            calc.handleEquals();
            break;
          case 'ac':
            calc.reset();
            break;
          case 'ce':
            calc.clearLastInput();
            break;
        }
      }
    }
    updateHTML(calc.value);
  };

  controlsBox.addEventListener('click', handleClick);
});
