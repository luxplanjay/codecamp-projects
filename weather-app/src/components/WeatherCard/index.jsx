/**
 * Created by Zerk on 26-Sep-17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
  data: PropTypes.shape().isRequired,
};

function WeatherCard({ data }) {
  const styles = {
    backgroundImage: `url(${data.icon})`,
  };

  return (
    <li className="weather-card">
      <p className="weather-card__date">{data.date}</p>
      <i className="weather-card__icon" style={styles} />
      <p className="weather-card__temp">
        <span className="weather-card__temp-max">{data.maxTemp}</span>
        <span className="weather-card__temp-min">{data.minTemp}</span>
      </p>
      <p className="weather-card__condition">{data.condition}</p>
    </li>
  );
}

WeatherCard.propTypes = propTypes;

export default WeatherCard;
