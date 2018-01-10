import React, { Component } from 'react';
import AppBar from 'components/AppBar';
import SearchForm from 'components/SearchForm';
import Gallery from 'components/Gallery';
import NotFound from 'components/NotFound';
import * as api from 'api';
import * as storage from 'localStorage';
import './styles.css';

export default class App extends Component {
  state = {
    articles: [],
    requestErrored: false
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
      if (data) {
        this.setState(
          {
            articles: api.extractArticles(data)
          },
          () => {
            storage.saveState('wiki-articles', this.state.articles);
          }
        );
      } else {
        this.setState(prevState => ({
          requestErrored: !prevState.requestErrored
        }));
      }
    });
  };

  render() {
    const { articles, requestErrored } = this.state;

    return (
      <div className="App">
        <AppBar>
          <SearchForm onSubmit={this.handleFormSubmit} />
        </AppBar>
        {requestErrored ? <NotFound /> : <Gallery articles={articles} />}
      </div>
    );
  }
}
