import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Articles from '../Articles/Articles';
import {map} from 'lodash';
import './App.scss';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      articlesData: null
    };
  }

  getArticles(searchQuery) {
    // cors - https://www.mediawiki.org/wiki/Manual:CORS#Description
    const endpoint = 'https://en.wikipedia.org/w/api.php?origin=*',
          format = '&format=json',
          props = '&action=query&generator=search&gsrnamespace=0&gsrlimit=9&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max',
          search = `&gsrsearch=${searchQuery}`,
          apiUrl = endpoint+format+props+search;

    fetch(apiUrl)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      }).then(data => {
        this.setState(() => {
          return {
            articlesData: map(data.query.pages, item => item)
          };
        });
      });
  }

  render() {
    const link = 'https://www.freecodecamp.com/axzerk';

    return (
      <div className="app-container">
        <h1 className="app-title">
          React Powered Wiki Viewer
          <a href={link} target="_blank">by Zerk</a>
        </h1>
        <SearchForm onSubmit={this.getArticles.bind(this)}/>
        <Articles articles={this.state.articlesData}/>
      </div>
    );
  }
}
