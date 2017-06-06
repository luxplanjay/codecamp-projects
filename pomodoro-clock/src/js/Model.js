/**
 * Created by Zerk on 05-Jun-17.
 */

export const Model = function(config) {
  this.sessionTime = config.sessionTime * 1000 * 60;
  this.breakTime = config.breakTime * 1000 * 60;

  this.targetTime = null;
  this.deltaTime = null;
  this.pauseTime = null;

  this.timerID = null;
  this.isActive = false;
  this.isSession = true;

  this.onEnd = config.onEnd || null;
  this.onTick = config.onTick || null;
  this.onReset = config.onReset || null;

  // $start
  this.start = () => {
    if(!this.isActive) {
      if(this.isSession) {
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
  this.update = () => {
    this.deltaTime = this.targetTime - Date.now();

    if(this.deltaTime < 0) {
      this.stop();

      this.onEnd ? this.onEnd() : void 0;
      this.deltaTime = null;
      this.isSession = !this.isSession;

      this.start();
    } else {
      this.onTick ? this.onTick() : void 0;
    }
  };

  // $stop
  this.stop = () => {
    clearInterval(this.timerID);
    this.isActive = false;
  };

  // $reset
  this.reset = () => {
    this.onReset ? this.onReset() : void 0;
    this.stop();
    this.startTime = null;
    this.deltaTime = null;
    this.pauseTime = null;
  };

  // $get
  this.get = () => {
    return this.deltaTime;
  };
};
