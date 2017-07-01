import React from 'react';
import { map } from 'lodash';
import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import Author from '../Author/Author';
import './App.scss';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      articlesData: [],
    };

    this.getArticles = this.getArticles.bind(this);
  }

  getArticles(searchQuery) {
    const endpoint = 'https://en.wikipedia.org/w/api.php?';
    const origin = 'origin=*';
    const format = '&format=json&formatversion=2';
    const action = '&action=query&generator=search';
    const props = '&prop=extracts|pageimages&exchars=300&exintro&explaintext&piprop=thumbnail&pithumbsize=600';
    const limit = '&gsrlimit=9';
    const search = `&gsrsearch=${searchQuery}`;
    const apiUrl = endpoint + origin + format + action + limit + props + search;

    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      }).then((data) => {
      console.log(data);
      this.setState({
          articlesData: map(data.query.pages, (item) => {
            const img = item.thumbnail ? item.thumbnail.source : 'http://via.placeholder.com/640x480?text=image not found';

            return {
              title: item.title,
              text: item.extract,
              img,
              url: `https://en.wikipedia.org/?curid=${item.pageid}`,
            };
          }),
        });
      });
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="app-title">Wiki Viewer</h1>
        <Author />
        <SearchForm onSubmit={this.getArticles} />
        <Gallery articles={this.state.articlesData} />
      </div>
    );
  }
}
