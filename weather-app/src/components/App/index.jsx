import React, { Component } from 'react';
import CurrentWeather from '@/components/CurrentWeather';
import ForecastWeather from '@/components/Forecast';
import Loading from '@/components/Loading';
import * as api from '@/API';
import * as unitTypes from '@/UnitTypes';
import './styles.scss';

const images = api.importAllImages(
  require.context('img', false, /\.(png|jpe?g|svg)$/),
);

export default class App extends Component {
  state = {
    fullWeatherData: null,
    formattedWeatherData: null,
  };

  componentWillMount() {
    api.getWeatherData()
      .then((data) => {
        this.setState({
          fullWeatherData: data,
          formattedWeatherData: api.formatWeatherData(data, unitTypes.METRIC),
        });
      });
  }

  getAppBackground() {
    let styles = {};

    if (this.state.fullWeatherData) {
      const condition = this.state.fullWeatherData.current.condition.text.toLowerCase();

      styles = {
        backgroundImage: `url(${images.fallback})`,
      };

      Object.keys(images).forEach((item) => {
        if (condition.includes(item)) {
          styles = {
            backgroundImage: `url(${images[item]})`,
          };
        }
      });
    }

    return styles;
  }

  handleClick = (units) => {
    this.setState({
      formattedWeatherData: api.formatWeatherData(this.state.fullWeatherData, units),
    });
  };

  render() {
    const { fullWeatherData, formattedWeatherData } = this.state;
    const background = this.getAppBackground();

    return (
      <div className="app-wrapper" style={background}>
        {!fullWeatherData
          ? <Loading text="Please wait a moment" blinkSpeed={200} />
          : <div>
            <CurrentWeather
              weatherData={formattedWeatherData.current}
              handleClick={this.handleClick}
            />
            <ForecastWeather weatherData={formattedWeatherData.forecast} />
          </div>
        }
      </div>
    );
  }
}
