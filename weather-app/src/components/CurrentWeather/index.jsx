import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as unitTypes from '@/UnitTypes';
import Conditions from './Conditions';
import Button from './Button';
import './styles.scss';

export default class CurrentWeather extends React.Component {
  static propTypes = {
    weatherData: PropTypes.shape().isRequired,
    onUnitsToggle: PropTypes.func.isRequired,
  };

  state = {
    units: unitTypes.METRIC,
  };

  handleToggle = (units) => {
    if (units === unitTypes.METRIC) {
      this.props.onUnitsToggle(units);
      this.setState({ units });
    } else if (units === unitTypes.IMPERIAL) {
      this.props.onUnitsToggle(units);
      this.setState({ units });
    }
  };

  render() {
    const getClassNames = units => classNames({
      'current__btn': true,
      'current__btn--active': this.state.units === units,
    });

    const {
      icon,
      location,
      temp,
      condition,
      lastUpdateTime,
      feelsLike,
      wind,
      visibility,
      humidity,
    } = this.props.weatherData;

    const styles = {
      backgroundImage: `url(${icon})`,
    };

    return (
      <div className="current">
        <p className="current__location">{location}</p>
        <div className="current__temp">
          <i className="current__icon" style={styles} />
          <span className="current__deg">{temp}</span>
          <div className="current__btns-box">
            <Button
              cls={getClassNames(unitTypes.METRIC)}
              onClick={this.handleToggle}
              units={unitTypes.METRIC}
              text="c"
            />
            <Button
              cls={getClassNames(unitTypes.IMPERIAL)}
              onClick={this.handleToggle}
              units={unitTypes.IMPERIAL}
              text="f"
            />
          </div>
        </div>
        <p className="current__condition">{condition}</p>
        <p className="current__update">Updated as of {lastUpdateTime}</p>
        <Conditions
          feelsLike={feelsLike}
          wind={wind}
          visibility={visibility}
          humidity={humidity}
        />
      </div>
    );
  }
}

