/**
 * Created by Zerk on 05-Jun-17.
 */

export default class Model {
  constructor({
                sessionTime = 0,
                breakTime = 0,
                onEnd = null,
                onTick = null,
                onReset = null,
  }) {
    this.sessionTime = sessionTime * 1000 * 60;
    this.breakTime = breakTime * 1000 * 60;

    this.targetTime = null;
    this.deltaTime = null;
    this.pauseTime = null;

    this.timerID = null;
    this.isActive = false;
    this.isSession = true;

    this.onEnd = onEnd;
    this.onTick = onTick;
    this.onReset = onReset;
  }

  // $start
  start = () => {
    if (!this.isActive) {
      if (this.isSession) {
        this.pauseTime = this.deltaTime || this.sessionTime;
        this.targetTime = Date.now() + this.pauseTime;
      } else {
        this.pauseTime = this.deltaTime || this.breakTime;
        this.targetTime = Date.now() + this.pauseTime;
      }

      this.timerID = setInterval(this.update, 100);
      this.isActive = true;
    }
  };

  // $update
  update = () => {
    this.deltaTime = this.targetTime - Date.now();

    if (this.deltaTime < 0) {
      this.stop();

      if (this.onEnd) {
        this.onEnd();
      }

      this.deltaTime = null;
      this.isSession = !this.isSession;

      this.start();
    } else if (this.onTick) {
      this.onTick(this.time);
    }
  };

  // $stop
  stop = () => {
    clearInterval(this.timerID);
    this.isActive = false;
  };

  // $reset
  reset = () => {
    if (this.onReset) {
      this.onReset();
    }

    this.stop();
    this.startTime = null;
    this.deltaTime = null;
    this.pauseTime = null;
  };

  // $get
  get time() {
    return this.deltaTime;
  }
}
