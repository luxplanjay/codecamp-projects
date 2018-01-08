import createNode from './createNode';

export const elements = {
  spinner: null,
  quoteBtn: null,
  tweetBtn: null,
  quoteTextField: null,
  quoteAuthorField: null
};

export function clearQuoteBox() {
  elements.quoteTextField.innerHTML = '';
  elements.quoteAuthorField.innerHTML = '';

  toggleSpinner();
}

export function initLayout() {
  const container = createNode('div', { class: 'container' });

  const quoteBox = createQuoteBox();
  const buttonsBox = createButtonsBox();

  container.append(buttonsBox, quoteBox);

  return container;
}

export function toggleSpinner() {
  elements.spinner.classList.toggle('spinner--hidden');
}

export function updateView({ content, title }) {
  toggleSpinner();
  updateQuote(content, title);
  updateTweet(elements.quoteTextField.textContent, title);
}

function createSpinner() {
  const spinner = createNode('div', { class: 'spinner sninner--hidden' });

  for (let i = 0; i < 5; i += 1) {
    const bar = createNode('div', { class: 'spinner__bar' });
    spinner.append(bar);
  }

  elements.spinner = spinner;

  return spinner;
}

function createQuoteBox() {
  const quoteBox = createNode('div', { class: 'quote-box' });
  const quoteText = createNode('div', { class: 'quote-text js-quote-text' });
  const quoteAuthor = createNode('p', {
    class: 'quote-author js-quote-author'
  });

  const spinner = createSpinner();

  quoteBox.append(spinner, quoteText, quoteAuthor);

  elements.quoteTextField = quoteText;
  elements.quoteAuthorField = quoteAuthor;

  return quoteBox;
}

function createButtonsBox() {
  const buttonsBox = createNode('div', { class: 'buttons' });

  const tweetBtn = createNode('a', {
    class: 'tweet-btn',
    rel: 'nofollow',
    target: '_blank',
    title: 'Tweet this quote'
  });
  const tweetIcon = createNode('i', { class: 'tweet-btn__icon' });
  const tweetText = createNode(
    'span',
    { class: 'tweet-btn__text' },
    'Tweet this quote'
  );

  tweetBtn.append(tweetIcon, tweetText);

  const quoteBtn = createNode('button', { class: 'quote-btn' }, 'new quote');

  buttonsBox.append(tweetBtn, quoteBtn);

  elements.quoteBtn = quoteBtn;
  elements.tweetBtn = tweetBtn;

  return buttonsBox;
}

function updateQuote(content, title) {
  elements.quoteTextField.innerHTML = content;
  elements.quoteAuthorField.innerHTML = `&mdash; ${title}`;
}

function updateTweet(text, title) {
  const tweet = encodeURIComponent(`${text} ${title}`);

  elements.tweetBtn.setAttribute(
    'href',
    `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${tweet}`
  );
}
