import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

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
      <input
        type="text"
        className="SearchForm__input"
        placeholder="Enter search query..."
        ref={x => (inputRef = x)}
      />
      <button type="submit" className="SearchForm__btn">
        search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
