import React, { Component } from 'react';
import CurrentWeather from '@/components/CurrentWeather';
import ForecastWeather from '@/components/ForecastWeather';
import Loading from '@/components/Loading';
import * as API from '../API';
import './styles.scss';

const images = API.importAllImages(
  require.context('img', false, /\.(png|jpe?g|svg)$/),
);

export default class App extends Component {
  state = {
    fullWeatherData: null,
    formattedWeatherData: null,
  };

  componentWillMount() {
    API.getWeatherData()
      .then((data) => {
        this.setState({
          fullWeatherData: data,
          formattedWeatherData: API.formatWeatherData(data, 'metric'),
        });
      });
  }

  getAppBackground() {
    let styles = {};

    if (this.state.fullWeatherData) {
      const condition = this.state.fullWeatherData.current.condition.text.toLowerCase();

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
      formattedWeatherData: API.formatWeatherData(this.state.fullWeatherData, units),
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
            <ForecastWeather
              weatherData={formattedWeatherData.forecast}
            />
          </div>
        }
      </div>
    );
  }
}
