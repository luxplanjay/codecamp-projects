import $ from 'jquery';

export const APP = (function () {
  const elements = {
    quoteBtn: document.querySelector('.quote-btn'),
    tweetBtn: document.querySelector('.tweet-btn'),
    quoteTextField: document.querySelector('.quote-text'),
    quoteAuthorField: document.querySelector('.quote-author')
  };

  const getQuote = function () {
    const apiKey = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

    $.ajax({
      type: 'GET',
      url: apiKey,
      success: function (data) {
        elements.quoteTextField.innerHTML = data[0].content;
        elements.quoteAuthorField.innerHTML = `&mdash; ${data[0].title}`;

        elements.tweetBtn.setAttribute('href', `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(` ${elements.quoteTextField.textContent} ${data[0].title}`)}`);
      },
      error: function (error) {
        alert('ERROR fetching data: ' + error);
      },
      cache: false
    });
  };

  const init = function () {
    getQuote();
    elements.quoteBtn.addEventListener('click', getQuote);
  };

  return {
    init: init
  };
})();
