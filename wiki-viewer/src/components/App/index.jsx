import React from 'react';
import SearchForm from '@/components/SearchForm';
import Gallery from '@/components/Gallery';
import './styles.scss';

const extractArticles = (articles, query) => articles.map((article) => {
  const img = article.thumbnail
    ? article.thumbnail.source
    : 'http://via.placeholder.com/640x480?text=image not found';

  return {
    title: article.title,
    text: article.extract,
    img,
    url: `https://en.wikipedia.org/?curid=${article.pageid}`,
    alt: `${query}`,
  };
});

const fetchArticles = (searchQuery) => {
  const endpoint = 'https://en.wikipedia.org/w/api.php?';
  const origin = 'origin=*';
  const format = '&format=json&formatversion=2';
  const action = '&action=query&generator=search';
  const props = '&prop=extracts|pageimages&exchars=300&exintro&explaintext&piprop=thumbnail&pithumbsize=600';
  const limit = '&gsrlimit=9';
  const search = `&gsrsearch=${searchQuery}`;
  const apiUrl = endpoint + origin + format + action + limit + props + search;

  return fetch(apiUrl)
    .then((response) => {
      if (response.ok) return response.json();
      throw Error(response.statusText);
    })
    .catch(err => console.log(err));
};

export default class App extends React.Component {
  state = {
    articlesData: [],
  };

  handleSubmit = (searchQuery) => {
    fetchArticles(searchQuery).then((data) => {
      this.setState({
        articlesData: extractArticles(data.query.pages, searchQuery),
      });
    });
  };

  render() {
    return (
      <div className="app-container">
        <h1 className="app-title">Wiki Viewer</h1>
        <SearchForm onSubmit={this.handleSubmit} />
        <Gallery articles={this.state.articlesData} />
      </div>
    );
  }
}
