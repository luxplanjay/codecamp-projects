/**
 * Created by Zerk on 22-Jun-17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import WeatherCard from '@/components/WeatherCard';
import './styles.scss';

const Forecast = ({ weatherData }) => (
  <div className="forecast">
    <h2 className="forecast__title">Forecast</h2>
    <ul className="forecast__list">
      {weatherData.map(item =>
        <WeatherCard key={item.date} data={item} />,
      )}
    </ul>
  </div>
);

Forecast.propTypes = {
  weatherData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Forecast;
