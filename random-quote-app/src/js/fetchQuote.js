const apiURL =
  'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

export default function fetchQuote() {
  return fetch(apiURL + `&t=${Date.now()}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Error ${response.statusText}`);
    })
    .then(data => data[0]);
}
