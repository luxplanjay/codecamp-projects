export const loadState = tag => {
  try {
    const serializedState = localStorage.getItem(tag);
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (tag, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(tag, serializedState);
  } catch (err) {
    console.err('Save state error: ', err);
  }
};
