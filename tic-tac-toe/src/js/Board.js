/**
 * Created by Zerk on 06-Jul-17.
 */

export default class Board {
  constructor(boardCellSelector) {
    this.enabled = false;
    this.boardSpaces = document.querySelectorAll(boardCellSelector);
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }
}
