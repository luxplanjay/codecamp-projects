/**
 * Created by Zerk on 22-Jun-17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import uuid from 'uuid';

import './styles.scss';

function ForecastWeather({ weatherData }) {
  return (
    <div className="forecast-w">
      <h2 className="forecast-w__title">Forecast</h2>
      <CardsList itemsData={weatherData} />
    </div>
  );
}

ForecastWeather.propTypes = {
  weatherData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function CardsList({ itemsData }) {
  const items = map(itemsData, item => (
    <WeatherCard
      key={uuid.v4()}
      data={item}
    />
    ));

  return (
    <ul className="forecast-w__list">
      {items}
    </ul>
  );
}

CardsList.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object).isRequired,
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

WeatherCard.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default ForecastWeather;
