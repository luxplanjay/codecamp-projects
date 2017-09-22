/**
 * Created by Zerk on 22-Sep-17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

const propTypes = {
  filter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const Button = ({ filter, onClick, text, isActive }) => {
  const btnClass = classNames({
    'btn': true,
    'btn--active': isActive,
  });

  const handleClick = () => {
    onClick(filter);
  };

  return (
    <button
      className={btnClass}
      onClick={handleClick}
    >{text}</button>
  );
};

Button.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => ({
  isActive: state.visibilityFilter === ownProps.filter,
});

export default connect(mapStateToProps, null)(Button);
