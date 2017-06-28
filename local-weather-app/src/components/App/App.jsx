import React from 'react';
import Model from '../Model';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import ForecastWeather from '../ForecastWeather/ForecastWeather';
import Author from '../Author/Author';
import Loading from '../Loading/Loading';

import './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.model = Model();

    this.state = {
      fullWeatherData: null,
      formattedWeatherData: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.images = this.model.importAllImages(
      require.context('img', false, /\.(png|jpe?g|svg)$/),
    );
  }

  componentDidMount() {
    this.model.init().then((data) => {
      this.setState({
        fullWeatherData: data,
        formattedWeatherData: this.model.formatWeatherData(data, 'metric'),
      });
    });
  }

  getAppBackground() {
    let styles = {};

    if (this.state.fullWeatherData) {
      const condition = this.state.fullWeatherData.current.condition.text.toLowerCase();

      Object.keys(this.images).forEach((item) => {
        if (condition.indexOf(item) !== -1) {
          styles = {
            backgroundImage: `url(${this.images[item]})`,
          };
        }
      });
    }

    return styles;
  }

  handleClick(units) {
    this.setState({
      formattedWeatherData: this.model.formatWeatherData(this.state.fullWeatherData, units),
    });
  }

  render() {
    return (
      <div className="app-wrapper" style={this.getAppBackground()}>
        {!this.state.fullWeatherData
          ? <Loading text="Please wait a moment" blinkSpeed={200} />
          : <div>
            <CurrentWeather
              weatherData={this.state.formattedWeatherData.current}
              handleClick={this.handleClick}
            />
            <ForecastWeather
              weatherData={this.state.formattedWeatherData.forecast}
            />
          </div>}
        <Author />
      </div>
    );
  }
}
