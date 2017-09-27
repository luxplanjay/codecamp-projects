/**
 * Created by Zerk on 27-Sep-17.
 */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  cls: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  units: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Button = ({ cls, onClick, units, text }) => {
  const handleClick = () => {
    onClick(units);
  };

  return (
    <button
      className={cls}
      onClick={handleClick}
    >{text}</button>
  );
};

Button.propTypes = propTypes;

export default Button;
