import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default class Loading extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    blinkSpeed: PropTypes.number.isRequired,
  };

  static defaultProps = {
    text: 'Loading',
    blinkSpeed: 300,
  };

  state = {
    text: this.props.text,
  };

  componentDidMount() {
    const stopper = `${this.props.text}...`;

    this.interval = setInterval(() => {
      if (this.state.text !== stopper) {
        this.setState(prevState => ({ text: `${prevState.text}.` }));
      } else {
        this.setState({ text: this.props.text });
      }
    }, this.props.blinkSpeed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <p className="placeholder">{this.state.text}</p>;
  }
}
