import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './CurrentWeather.scss';

class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      units: 'metric',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  getClassNames(val) {
    return classNames('current-w__btn', {
      'current-w__btn--active': this.state.units === val,
    });
  }

  handleClick(e) {
    const value = e.target.dataset.value;

    if (value === 'metric') {
      this.props.handleClick(value);
      this.setState({
        units: 'metric',
      });
    } else if (value === 'imperial') {
      this.props.handleClick(value);
      this.setState({
        units: 'imperial',
      });
    }
  }

  render() {
    const styles = {
      backgroundImage: `url(${this.props.weatherData.icon})`,
    };

    return (
      <div className="current-w">
        <p className="current-w__location">
          {this.props.weatherData.location}
        </p>
        <div className="current-w__temp">
          <i className="current-w__icon" style={styles} />
          <span className="current-w__deg">{this.props.weatherData.temp}</span>
          <div className="current-w__btns-box">
            <button
              className={this.getClassNames('metric')}
              onClick={this.handleClick}
              data-value="metric"
            >c</button>
            <button
              className={this.getClassNames('imperial')}
              onClick={this.handleClick}
              data-value="imperial"
            >f</button>
          </div>
        </div>
        <p className="current-w__condition">{this.props.weatherData.condition}</p>
        <p className="current-w__update">Updated as of {this.props.weatherData.lastUpdateTime}</p>
        <ul className="current-w__list">
          <li>Feels like: {this.props.weatherData.feelsLike}</li>
          <li>Wind: {this.props.weatherData.wind}</li>
          <li>Visibility: {this.props.weatherData.visibility}</li>
          <li>Humidity: {this.props.weatherData.humidity}</li>
        </ul>
      </div>
    );
  }
}

CurrentWeather.propTypes = {
  weatherData: PropTypes.shape().isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CurrentWeather;
