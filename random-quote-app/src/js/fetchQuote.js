import { ajax } from 'jquery';

const apiURL =
  'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

const fetchQuote = () =>
  new Promise((resolve, reject) => {
    ajax({
      type: 'GET',
      url: apiURL,
      success(data) {
        resolve(data[0]);
      },
      error(err) {
        reject(err);
        throw Error(`Error fetching data: ${err}`);
      },
      cache: false
    });
  });

export default fetchQuote;
