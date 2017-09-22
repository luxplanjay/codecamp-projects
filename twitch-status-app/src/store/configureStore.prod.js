import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '@/reducers';

const middleware = [thunk];

export default function (initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware)),
  );
}
