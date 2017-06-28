import React from 'react';
import PropTypes from 'prop-types';
import './Loading.scss';

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.interval = null;

    this.state = {
      text: props.text,
    };
  }

  componentDidMount() {
    const stopper = `${this.props.text}...`;

    this.interval = setInterval(() => {
      if (this.state.text !== stopper) {
        this.setState(prevState => ({
          text: `${prevState.text}.`,
        }));
      } else {
        this.setState({
          text: this.props.text,
        });
      }
    }, this.props.blinkSpeed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <p className="placeholder">
        {this.state.text}
      </p>
    );
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  blinkSpeed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
  text: 'Loading',
  blinkSpeed: 300,
};

export default Loading;
