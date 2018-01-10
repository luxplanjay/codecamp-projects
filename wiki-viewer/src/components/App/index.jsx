import React, { Component } from 'react';
import AppBar from 'components/AppBar';
import SearchForm from 'components/SearchForm';
import Gallery from 'components/Gallery';
import * as api from 'api';
import * as storage from 'localStorage';
import './styles.css';

export default class App extends Component {
  state = {
    articles: []
  };

  componentWillMount() {
    const data = storage.loadState('wiki-articles');
    if (data) {
      this.setState({
        articles: data
      });
    }
  }

  handleFormSubmit = searchQuery => {
    api.fetchArticles(searchQuery).then(data => {
      this.setState(
        {
          articles: api.extractArticles(data.query.pages)
        },
        () => {
          storage.saveState('wiki-articles', this.state.articles);
        }
      );
    });
  };

  render() {
    return (
      <div className="App">
        <AppBar>
          <SearchForm onSubmit={this.handleFormSubmit} />
        </AppBar>
        <Gallery articles={this.state.articles} />
      </div>
    );
  }
}
