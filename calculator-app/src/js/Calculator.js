/**
 * Created by Zerk on 20-May-17.
 */

import {createNode} from './create-node';

export const Calculator = (function () {
  'use strict';

  let currentExpr = '0';

  const layoutBtnsArr = ['ac', 'ce', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='],
        elements = {
          inputField: {},
          operations: ['ac', 'ce', '='],
          operators: ['+', '-', '/', '*'],
          operands: ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        };

  const methods = {
    handleEquals: function () {
      if( (elements.operators.indexOf(currentExpr[currentExpr.length - 1]) === -1) && (currentExpr[currentExpr.length - 1] !== '.') ) {
        currentExpr = math.eval(currentExpr);

        if (currentExpr % 1 !== 0) {
          currentExpr = currentExpr.toFixed(2);
          updateHTML();
        } else {
          updateHTML();
        }
      }
    },
    handleReset: function () {
      currentExpr = '0';
      updateHTML();
    },
    clearLastInput: function () {
      if(this.isResultNumerical()) {
        if (currentExpr.length !== 1 && currentExpr !== '0') {
          currentExpr = currentExpr.toString().slice(0, -1);
          updateHTML();
        } else {
          this.handleReset();
        }
      } else {
        this.handleReset();
      }
    },
    handleOperatorInput: function (val) {
      // preventing multiple operators is succession
      if (elements.operators.indexOf(currentExpr[currentExpr.length - 1]) === -1) {
        currentExpr = math.eval(currentExpr);

        if(methods.isResultNumerical()) {
          if (currentExpr % 1 !== 0) {
            currentExpr = currentExpr.toFixed(2);
            currentExpr += val;
            updateHTML();
          } else {
            currentExpr += val;
            updateHTML();
          }
        } else {
          updateHTML();
        }
      }
    },
    handleOperandInput: function (val) {
      if(methods.isResultNumerical()) {
        if (val === '.') {
          if (currentExpr.indexOf(val) === -1) {
            if (elements.operators.indexOf(currentExpr[currentExpr.length - 1]) === -1) {
              currentExpr += val;
              updateHTML();
            } else {
              currentExpr += '0' + val;
              updateHTML();
            }
          }
        } else {
          // when currentExpr is 1 char long and parses to 0
          if (parseInt(currentExpr) === 0 && currentExpr.toString().length === 1) {
            currentExpr = val;
            updateHTML();
          } else {
            currentExpr += val;
            updateHTML();
          }
        }
      } else {
        methods.handleReset();
      }
    },
    isResultNumerical: function () {
      return !isNaN(parseInt(currentExpr)) && isFinite(parseInt(currentExpr));
    }
  };

  function createLayout () {
    const appContainer = createNode('div', 'app-container', null, null);

    // output box
    const outputBox = createNode('div', 'output-box', null, null);
    elements.inputField = createNode('p', 'input-field', null, currentExpr);
    outputBox.append(elements.inputField);

    // controls box
    const controlsBox = createNode('div', 'controls-box', null, null);
    controlsBox.addEventListener('click', handleClick);

    for (let i = 0, length = layoutBtnsArr.length; i < length; i++) {
      let button;

      switch (layoutBtnsArr[i]) {
        case 'ac':
          button = createNode('button', null, {class: 'btn btn--medium', value: layoutBtnsArr[i]}, layoutBtnsArr[i]);
          controlsBox.appendChild(button);
          break;
        case 'ce':
          button = createNode('button', null, {class: 'btn btn--medium', value: layoutBtnsArr[i]}, layoutBtnsArr[i]);
          controlsBox.appendChild(button);
          break;
        case '0':
          button = createNode('button', null, {class: 'btn btn--big', value: layoutBtnsArr[i]}, layoutBtnsArr[i]);
          controlsBox.appendChild(button);
          break;
        default:
          button = createNode('button', 'btn', {value: layoutBtnsArr[i]}, layoutBtnsArr[i]);
          controlsBox.appendChild(button);
          break;
      }
    }

    appContainer.append(outputBox, controlsBox);

    return appContainer;
  }

  function handleClick (event) {
    const target = event.target,
          value = target.value;

    if ( target !== this ) {
      if ( elements.operands.indexOf(value) !== -1 ) {
        methods.handleOperandInput(value);
      } else if ( elements.operators.indexOf(value) !== -1 ) {
        methods.handleOperatorInput(value);
      } else if ( elements.operations.indexOf(value) !== -1 ){
        switch (value) {
          case '=':
            methods.handleEquals();
            break;
          case 'ac':
            methods.handleReset();
            break;
          case 'ce':
            methods.clearLastInput();
            break;
        }
      }
    }
  }

  function updateHTML () {
    elements.inputField.innerHTML = currentExpr;
  }

  function init (parent) {
    const wrapper = createNode('div', 'wrapper', null, null);
    wrapper.append(createLayout());
    parent.appendChild(wrapper);
  }

  return {
    init: init
  };
})();
