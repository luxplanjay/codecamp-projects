import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App/App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app-root')
  );
};

render(App);

module.hot ? module.hot.accept('./components/App/App', () => { render(App); }) : void 0;
