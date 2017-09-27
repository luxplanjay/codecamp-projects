/**
 * Created by Zerk on 27-Sep-17.
 */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  feelsLike: PropTypes.string.isRequired,
  wind: PropTypes.string.isRequired,
  visibility: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
};

const Conditions = ({ feelsLike, wind, visibility, humidity }) => (
  <ul className="current__list">
    <li>Feels like: {feelsLike}</li>
    <li>Wind: {wind}</li>
    <li>Visibility: {visibility}</li>
    <li>Humidity: {humidity}</li>
  </ul>
);

Conditions.propTypes = propTypes;

export default Conditions;
