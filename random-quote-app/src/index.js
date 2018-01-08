import * as View from './js/View';
import fetchQuote from './js/fetchQuote';
import './scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#root').append(View.initLayout());

  fetchQuote().then(data => {
    View.updateView(data);
  });

  View.elements.quoteBtn.addEventListener('click', () => {
    View.clearQuoteBox();

    fetchQuote().then(data => {
      View.updateView(data);
    });
  });
});

if (module.hot) {
  module.hot.accept();
}
