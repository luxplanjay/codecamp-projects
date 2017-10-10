const audioCtx = new AudioContext();
const frequencies = [329.63, 261.63, 220, 164.81];

const errOsc = audioCtx.createOscillator();
errOsc.type = 'triangle';
errOsc.frequency.value = 110;
errOsc.start(0.0);

const errNode = audioCtx.createGain();
errOsc.connect(errNode);
errNode.gain.value = 0;
errNode.connect(audioCtx.destination);

const ramp = 0.05;
const vol = 0.5;

const oscillators = frequencies.map((frq) => {
  const osc = audioCtx.createOscillator();
  osc.type = 'sine';
  osc.frequency.value = frq;
  osc.start(0.0);

  return osc;
});

const gainNodes = oscillators.map((osc) => {
  const g = audioCtx.createGain();
  osc.connect(g);
  g.connect(audioCtx.destination);
  g.gain.value = 0;

  return g;
});

// EXPORTS
export const playGoodTone = (id) => {
  gainNodes[id].gain.linearRampToValueAtTime(vol, audioCtx.currentTime + ramp);
};

export const stopGoodTones = () => {
  gainNodes.forEach((g) => {
    g.gain.linearRampToValueAtTime(0, audioCtx.currentTime + ramp);
  });
};

export const playErrTone = () => {
  errNode.gain.linearRampToValueAtTime(vol, audioCtx.currentTime + ramp);
};

export const stopErrTone = () => {
  errNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + ramp);
};
