import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './components/App/index';
import configureStore from './store';
import { saveState, loadState } from './localStorage';
import './sass/base.scss';

const persistedState = loadState();
const store = configureStore(persistedState);

// localStorage state persistence
store.subscribe(() => {
  setInterval(() => {
    saveState({
      channels: store.getState().channels,
    });
  }, 1000);
});

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewRoot = require('./components/App/index').default;
    render(
      <AppContainer>
        <Provider store={store}>
          <NewRoot />
        </Provider>
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
