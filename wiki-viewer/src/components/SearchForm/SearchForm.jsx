import React from 'react';
import PropTypes from 'prop-types';
import './SearchForm.scss';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  }

  onInputChange(e) {
    const value = e.target.value;
    this.setState({
      inputValue: value,
    });
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <a
          href="https://en.wikipedia.org/wiki/Special:Random"
          className="search-form__link"
          target="_blank"
          rel="noreferrer noopener"
        >go to a random article</a>
        <p className="search-form__text">or</p>
        <div className="search-form__search-box">
          <input
            type="text"
            className="search-form__input"
            placeholder="enter search query"
            value={this.state.inputValue}
            onChange={this.onInputChange}
          />
          <button type="submit" className="search-form__btn">search</button>
        </div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
