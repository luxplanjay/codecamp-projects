import $ from 'jquery';

export const APP = {
  elements: {
    quoteBtn: document.querySelector('.quote-btn'),
    tweetBtn: document.querySelector('.tweet-btn'),
    quoteTextField: document.querySelector('.quote-text'),
    quoteAuthorField: document.querySelector('.quote-author')
  },
  getQuote: function () {
    const apiKey = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
    $.ajax({
      type: 'GET',
      url: apiKey,
      success: function (data) {
        this.elements.quoteTextField.innerHTML = data[0].content;
        this.elements.quoteAuthorField.innerHTML = `&mdash; ${data[0].title}`;

        this.elements.tweetBtn.setAttribute('href', `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(` ${this.elements.quoteTextField.textContent} ${data[0].title}`)}`);
      }.bind(this),
      error: function (error) {
        alert('ERROR fetching data: ' + error);
      },
      cache: false
    });
  },
  init: function () {
    this.getQuote();
    this.elements.quoteBtn.addEventListener('click', this.getQuote.bind(this));
  }
};
