import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const SearchForm = ({ onSubmit }) => {
  let input = null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input.value);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <a
        href="https://en.wikipedia.org/wiki/Special:Random"
        className="search-form__link"
        target="_blank"
        rel="noreferrer noopener"
      >go to a random article</a>
      <span className="search-form__text">or</span>
      <div className="search-form__search-box">
        <input
          type="text"
          className="search-form__input"
          placeholder="enter search query"
          ref={(x) => { input = x; }}
        />
        <button type="submit" className="search-form__btn">search</button>
      </div>
    </form>
  );
};

SearchForm.propTypes = propTypes;

export default SearchForm;
