/**
 * Created by Zerk on 05-Jun-17.
 */

// $model
const Timer = function (config) {
  this.targetTime = null;
  this.deltaTime = null;
  this.pauseTime = null;

  this.timerID = null;
  this.isActive = false;

  this.onStart = config.onStart || null;
  this.onEnd = config.onEnd || null;
  this.onTick = config.onTick || null;
  this.onReset = config.onReset || null;

  // $start
  this.start = (val) => {
    this.pauseTime = this.deltaTime || (val * 1000 * 60);

    if(!this.isActive) {
      this.targetTime = new Date(Date.now() + this.pauseTime);
      this.onStart ? this.onStart() : void 0;
      this.timerID = setInterval(this.update, 100);
      this.isActive = true;
    }
  };

  // $update
  this.update = () => {
    this.deltaTime = this.targetTime.getTime() - Date.now();

    if(this.deltaTime < 0) {
      this.stop();
      this.onEnd ? this.onEnd() : void 0;
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

export default Timer;
