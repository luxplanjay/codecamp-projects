/**
 * Created by Zerk on 20-Sep-17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as apiActions from '@/actions/channelActions';
import './styles.scss';
import icon from './img/search.svg';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const SearchForm = ({ onSubmit }) => {
  let input = null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = input.value;
    onSubmit(value);
    input.value = '';
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-form__input"
        placeholder="search for channels..."
        ref={(x) => { input = x; }}
      />
      <button type="submit" className="search-form__btn">
        <svg className="search-form__icon">
          <use xlinkHref={`${icon}#root`} />
        </svg>
      </button>
    </form>
  );
};

SearchForm.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  onSubmit(name) {
    dispatch(apiActions.fetchApiData([name]));
  },
});

export default connect(null, mapDispatchToProps)(SearchForm);
