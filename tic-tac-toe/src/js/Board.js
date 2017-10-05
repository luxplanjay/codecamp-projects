/**
 * Created by Zerk on 06-Jul-17.
 */

export default class Board {
  constructor({ boardSelector, cellSelector }) {
    this.isEnabled = false;
    this.cells = document.querySelectorAll(cellSelector);
    this.self = document.querySelector(boardSelector);
  }

  enable() {
    this.isEnabled = true;
  }

  disable() {
    this.isEnabled = false;
  }
}
