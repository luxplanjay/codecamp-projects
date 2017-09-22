import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppHeader from '@/components/AppHeader';
import Controls from '@/components/Controls';
import Channels from '@/components/Channels';
import * as apiActions from '@/actions/channelActions';
import defaultChannels from '@/default-channels';
import './styles.scss';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onFetchApiData() {
    const state = stateProps.state;
    const dispatch = dispatchProps.dispatch;

    const channels = state.channels.length > 0
    ? state.channels.map(channel => channel.name)
      : defaultChannels;

    dispatch(apiActions.fetchApiData(channels));
  },
});

@connect(mapStateToProps, mapDispatchToProps, mergeProps)
export default class App extends Component {
  static propTypes = {
    onFetchApiData: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.onFetchApiData();
  }
  render() {
    return (
      <div className="app-container">
        <AppHeader />
        <Controls />
        <Channels />
      </div>
    );
  }
}
