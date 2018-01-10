import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import searchIcon from './assets/search.svg';

const SearchForm = ({ onSubmit }) => {
  let inputRef = null;

  const handleSubmit = e => {
    e.preventDefault();
    if (inputRef.value !== '') {
      onSubmit(inputRef.value);
      inputRef.value = '';
    }
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <button type="submit" className="SearchForm__btn">
        <svg className="SearchForm__icon">
          <use href={`${searchIcon}#root`} />
        </svg>
      </button>
      <input
        type="text"
        className="SearchForm__input"
        placeholder="Search wiki..."
        ref={x => (inputRef = x)}
      />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
