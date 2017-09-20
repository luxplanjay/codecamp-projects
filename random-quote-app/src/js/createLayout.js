import createNode from './createNode';
import getQuote from './getQuote';
import updateView from './updateView';

const createQuoteBox = () => {
  const quoteBox = createNode('div', { class: 'quote-box' });
  const quoteText = createNode('div', { class: 'quote-text js-quote-text' });
  const quoteAuthor = createNode('p', { class: 'quote-author js-quote-author' });

  quoteBox.append(quoteText, quoteAuthor);

  return quoteBox;
};

const createButtonsBox = () => {
  const buttonsBox = createNode('div', { class: 'buttons' });

  const tweetBtn = createNode(
    'a',
    {
      class: 'tweet-btn',
      rel: 'nofollow',
      target: '_blank',
      title: 'Tweet this quote!',
    },
  );
  const tweetIcon = createNode('i', { class: 'tweet-btn__icon' });
  const tweetText = createNode(
    'span',
    { class: 'tweet-btn__text' },
    'Tweet this quote!',
  );

  tweetBtn.append(tweetIcon, tweetText);

  const quoteBtn = createNode(
    'button',
    { class: 'quote-btn' },
    'new quote',
  );

  quoteBtn.addEventListener('click', () => {
    getQuote().then(data => updateView(data));
  });

  buttonsBox.append(tweetBtn, quoteBtn);

  return buttonsBox;
};

const createLayout = () => {
  const container = createNode('div', { class: 'container' });

  container.append(
    createQuoteBox(),
    createButtonsBox(),
  );

  return container;
};

export default createLayout;
