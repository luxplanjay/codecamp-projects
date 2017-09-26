import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as unitTypes from '@/UnitTypes';
import './styles.scss';

export default class CurrentWeather extends React.Component {
  static propTypes = {
    weatherData: PropTypes.shape().isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  state = {
    units: unitTypes.METRIC,
  };

  getClassNames(val) {
    return classNames('current__btn', {
      'current__btn--active': this.state.units === val,
    });
  }

  handleClick = (e) => {
    const value = e.target.dataset.value;

    if (value === unitTypes.METRIC) {
      this.props.handleClick(value);
      this.setState({
        units: unitTypes.METRIC,
      });
    } else if (value === unitTypes.IMPERIAL) {
      this.props.handleClick(value);
      this.setState({
        units: unitTypes.IMPERIAL,
      });
    }
  };

  render() {
    const { weatherData } = this.props;

    const styles = {
      backgroundImage: `url(${weatherData.icon})`,
    };

    return (
      <div className="current">
        <p className="current__location">{weatherData.location}</p>
        <div className="current__temp">
          <i className="current__icon" style={styles} />
          <span className="current__deg">{weatherData.temp}</span>
          <div className="current__btns-box">
            <button
              className={this.getClassNames(unitTypes.METRIC)}
              onClick={this.handleClick}
              data-value={unitTypes.METRIC}
            >c</button>
            <button
              className={this.getClassNames(unitTypes.IMPERIAL)}
              onClick={this.handleClick}
              data-value={unitTypes.IMPERIAL}
            >f</button>
          </div>
        </div>
        <p className="current__condition">{weatherData.condition}</p>
        <p className="current__update">Updated as of {weatherData.lastUpdateTime}</p>
        <ul className="current__list">
          <li>Feels like: {weatherData.feelsLike}</li>
          <li>Wind: {weatherData.wind}</li>
          <li>Visibility: {weatherData.visibility}</li>
          <li>Humidity: {weatherData.humidity}</li>
        </ul>
      </div>
    );
  }
}

