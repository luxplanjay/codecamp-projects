import $ from 'jquery';

const getQuote = () =>
  new Promise((resole, reject) => {
    const apiUrl = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

    $.ajax({
      type: 'GET',
      url: apiUrl,
      success(data) {
        resole(data);
      },
      error(err) {
        reject(err);
        throw Error(`Error fetching data: ${err}`);
      },
      cache: false,
    });
  });

export default getQuote;
