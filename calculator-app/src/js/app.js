/**
 * Created by Zerk on 20-May-17.
 */

function createNode(type, cls, attributes, str) {
  'use strict';

  var el = document.createElement(type);

  if (cls && (typeof cls === 'string')) {
    el.classList.add(cls);
  }

  if (attributes && (typeof attributes === 'object')) {
    for (var key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        el.setAttribute(key, attributes[key]);
      }
    }
  }

  if (str && (typeof str === 'string')) {
    el.appendChild(document.createTextNode(str));
  }

  return el;
}

(function () {
  'use strict';

  var Calculator = function () {
    var _this = this,
      currentExp = '0',
      currentMemory = '0',
      buttons = ['ac', 'ce', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='],
      elements = {
        inputField: {},
        memoryField: {},
        operations: ['ac', 'ce', '='],
        operators: ['+', '-', '/', '*']
      };

    var handleClick = function () {
      var target = event.target;

      // case when target is not an operations button
      if (target !== this && elements.operations.indexOf(target.value) === -1) {
        // case when target is not an operations button and not an operator button
        if (elements.operators.indexOf(target.value) === -1) {
          // case when currentExp is 1 char long and parses to 0
          if (parseInt(currentExp) === 0 && currentExp.toString().length === 1) {
            currentExp = target.innerHTML;
            elements.inputField.innerHTML = currentExp;
          } else {
            currentExp += target.innerHTML;
            elements.inputField.innerHTML = currentExp;
          }
        } else {
          // case when target is an operator button, preventing multiple operators is succession
          if (elements.operators.indexOf(currentExp[currentExp.length - 1]) === -1) {
            currentExp = math.eval(currentExp);

            if (currentExp % 1 !== 0) {
              currentExp = currentExp.toFixed(2);
              currentExp += target.innerHTML;
              elements.inputField.innerHTML = currentExp;
            } else {
              currentExp += target.innerHTML;
              elements.inputField.innerHTML = currentExp;
            }
          }
        }
        // Equals button case
      } else if (target.value === '=') {
        currentExp = math.eval(currentExp);

        if (currentExp % 1 !== 0) {
          currentExp = currentExp.toFixed(2);
          elements.inputField.innerHTML = currentExp;
        } else {
          elements.inputField.innerHTML = currentExp;
        }
        // AC button case
      } else if (target.value === 'ac') {
        currentExp = '0';
        elements.inputField.innerHTML = currentExp;
        // CE button case
      } else if (target.value === 'ce') {
        if (currentExp.length !== 1 && parseInt(currentExp) !== 0) {
          currentExp = currentExp.toString().slice(0, -1);
          elements.inputField.innerHTML = currentExp;
        } else {
          currentExp = '0';
          elements.inputField.innerHTML = currentExp;
        }
      }
    };

    _this.createLayout = function () {
      var appContainer = createNode('div', 'app-container', null, null);

      // output box
      var outputBox = createNode('div', 'output-box', null, null);
      elements.inputField = createNode('p', 'input-field', null, currentExp);
      elements.memoryField = createNode('p', 'memory-field', null, currentMemory);
      outputBox.append(elements.inputField, elements.memoryField);

      // controls box
      var controlsBox = createNode('div', 'controls-box', null, null);
      controlsBox.addEventListener('click', handleClick);

      for (var i = 0, length = buttons.length; i < length; i++) {
        var button;

        switch (buttons[i]) {
          case 'ac':
            button = createNode('button', null, {class: 'btn btn--medium', value: buttons[i]}, buttons[i]);
            controlsBox.appendChild(button);
            break;
          case 'ce':
            button = createNode('button', null, {class: 'btn btn--medium', value: buttons[i]}, buttons[i]);
            controlsBox.appendChild(button);
            break;
          case '0':
            button = createNode('button', null, {class: 'btn btn--big', value: buttons[i]}, buttons[i]);
            controlsBox.appendChild(button);
            break;
          default:
            button = createNode('button', 'btn', {value: buttons[i]}, buttons[i]);
            controlsBox.appendChild(button);
            break;
        }
      }
      appContainer.append(outputBox, controlsBox);

      return appContainer;
    };

    _this.init = function () {
      var wrapper = createNode('div', 'wrapper', null, null);
      wrapper.append(_this.createLayout());
      document.querySelector('#root').appendChild(wrapper);
    };
  };

  var calc = new Calculator();
  calc.init();
})();
