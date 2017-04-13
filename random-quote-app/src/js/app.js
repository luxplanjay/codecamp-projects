$(document).ready(function () {
  let getQuoteBtn = $('.quote-btn'),
    tweetBtn = $('.tweet-btn'),
    quoteTextField = $('.quote-text > span'),
    quoteAuthorField = $('.quote-author');

  getQuote(quoteTextField, quoteAuthorField);

  getQuoteBtn.on('click', function () {
    getQuote(quoteTextField, quoteAuthorField);
  });

  function getQuote(textField, authorField) {
    $.ajax({
      headers: {
        "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=",
      success: function (response) {
        let data = JSON.parse(response);
        textField.html(data.quote);
        authorField.html(`&mdash; ${data.author}`);

        tweetBtn.attr('href', `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(` ${data.quote} ${data.author}`)}`);
      }
    });
  }
});
