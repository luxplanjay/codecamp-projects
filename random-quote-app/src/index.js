import createLayout from './js/createLayout';
import getQuote from './js/getQuote';
import updateView from './js/updateView';
import './sass/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  root.append(createLayout());

  getQuote().then(data => updateView(data));
});

if (module.hot) {
  module.hot.accept();
}
