import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Logo = ({ text, link }) => (
  <h1 className="Logo">
    <a href={link} className="Logo__link">
      Wiki Viewer
    </a>
  </h1>
);

Logo.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Logo;
