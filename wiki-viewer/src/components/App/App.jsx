import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Articles from '../Articles/Articles';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchPhrase: ''
    };
  }

  getSearchPhrase(val) {
    this.setState(() => {
      return {
        searchPhrase: val
      };
    });
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="app-title">
          React Powered Wiki Viewer
          <a href="https://www.freecodecamp.com/axzerk" target="_blank">by Zerk</a>
        </h1>
        <SearchForm onSubmit={this.getSearchPhrase.bind(this)}/>
        <Articles/>
        {/*<ListContainer searchQuery={this.state.searchPhrase}/>*/}
      </div>
    );
  }
}
