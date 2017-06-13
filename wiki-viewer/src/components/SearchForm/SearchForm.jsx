import React from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  }

  onInputChange(e) {
    const value = e.target.value;
    this.setState(() => {
      return {
        inputValue: value
      };
    });
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.onSubmit.bind(this)}>
        <a href="https://en.wikipedia.org/wiki/Special:Random" className="search-form__link" target="_blank">go to a random article</a>
        <span className="search-form__text">or type your search request below</span>
        <input
          type="text"
          className="search-form__input"
          placeholder="enter search query"
          value={this.state.inputValue}
          onChange={this.onInputChange.bind(this)}
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func
};
