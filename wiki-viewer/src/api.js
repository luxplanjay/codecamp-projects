const endpoint = 'https://en.wikipedia.org/w/api.php?';
const origin = 'origin=*';
const format = '&format=json&formatversion=2';
const action = '&action=query&generator=search';
const props =
  '&prop=extracts|pageimages&exchars=300&exintro&explaintext&piprop=thumbnail&pithumbsize=600';
const limit = '&gsrlimit=10';

export const fetchArticles = searchQuery => {
  const search = `&gsrsearch=${searchQuery}`;
  const apiUrl = endpoint + origin + format + action + limit + props + search;

  return fetch(apiUrl)
    .then(response => {
      if (response.ok) return response.json();
      throw Error(response.statusText);
    })
    .catch(err => console.log(err));
};

export const extractArticles = articles =>
  articles.map(article => {
    const img = article.thumbnail
      ? article.thumbnail.source
      : 'http://via.placeholder.com/640x480?text=image not found';

    return {
      title: article.title,
      text: article.extract,
      img,
      url: `https://en.wikipedia.org/?curid=${article.pageid}`,
      alt: article.title
    };
  });
