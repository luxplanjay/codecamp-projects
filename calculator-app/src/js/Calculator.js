/**
 * Created by Zerk on 20-May-17.
 */
import math from 'mathjs';

export default class Calculator {
  constructor() {
    this.operands = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    this.operations = ['ac', 'ce', '='];
    this.operators = ['+', '-', '/', '*'];
    this.currentExpr = '0';
  }

  isResultNumerical = () =>
    !isNaN(parseInt(this.currentExpr)) && isFinite(parseInt(this.currentExpr));

  reset() {
    this.currentExpr = '0';
  }

  get value() {
    return this.currentExpr;
  }

  handleEquals = () => {
    const lastChar = this.currentExpr[this.currentExpr.length - 1];

    if (!this.operators.includes(lastChar) && lastChar !== '.') {
      this.currentExpr = math.eval(this.currentExpr);

      if (this.currentExpr % 1 !== 0) {
        this.currentExpr = this.currentExpr.toFixed(3);
      }
    }
  };

  clearLastInput = () => {
    if (this.isResultNumerical()) {
      if (this.currentExpr.length !== 1 && this.currentExpr !== '0') {
        this.currentExpr = this.currentExpr.toString().slice(0, -1);
      } else {
        this.reset();
      }
    } else {
      this.reset();
    }
  };

  handleOperatorInput = (val) => {
    const lastChar = this.currentExpr[this.currentExpr.length - 1];

    // preventing multiple operators is succession
    if (!this.operators.includes(lastChar)) {
      this.currentExpr = math.eval(this.currentExpr);

      if (this.isResultNumerical()) {
        if (this.currentExpr % 1 !== 0) {
          this.currentExpr = this.currentExpr.toFixed(2);
          this.currentExpr += val;
        } else {
          this.currentExpr += val;
        }
      }
    }
  };

  handleOperandInput = (val) => {
    const lastChar = this.currentExpr[this.currentExpr.length - 1];

    if (this.isResultNumerical()) {
      if (val === '.') {
        if (!this.currentExpr.includes(val)) {
          if (!this.operators.includes(lastChar)) {
            this.currentExpr += val;
          } else {
            this.currentExpr += `0${val}`;
          }
        } else {
          const position = this.currentExpr.search(/[-/*+]/);

          if (position !== -1) {
            const tmp = this.currentExpr.slice(position + 1);

            if (tmp.search(/[.]/) === -1) {
              if (!this.operators.includes(lastChar)) {
                this.currentExpr += val;
              } else {
                this.currentExpr += `0${val}`;
              }
            }
          }
        }
      } else {
        // when currentExpr is 1 char long and parses to 0
        if (parseInt(this.currentExpr) === 0 && this.currentExpr.toString().length === 1) {
          this.currentExpr = val;
        } else {
          this.currentExpr += val;
        }
      }
    } else {
      this.reset();
    }
  };
}
