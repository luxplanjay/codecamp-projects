const updateView = ([data]) => {
  const tweetBtn = document.querySelector('.tweet-btn');
  const quoteTextField = document.querySelector('.quote-text');
  const quoteAuthorField = document.querySelector('.quote-author');

  quoteTextField.innerHTML = data.content;
  quoteAuthorField.innerHTML = `&mdash; ${data.title}`;

  const tweet = encodeURIComponent(
    `${quoteTextField.textContent} ${data.title}`,
  );

  tweetBtn.setAttribute(
    'href',
    `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${tweet}`,
  );
};

export default updateView;
