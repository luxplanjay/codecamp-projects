/**
 * Created by Zerk on 20-Sep-17.
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '@/components/Card';
import * as channelActions from '@/actions/channelActions';
import './styles.scss';


const propTypes = {
  channels: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

const Channels = ({ channels, onDeleteCard }) => (
  <div className="results-container">
    {channels.map(channel =>
      (<Card
        key={channel.id}
        id={channel.id}
        logo={channel.logo}
        url={channel.url}
        name={channel.name}
        title={channel.title || ''}
        isOnline={channel.isOnline}
        onDelete={onDeleteCard}
      />),
    )}
  </div>
);

Channels.propTypes = propTypes;

const getVisibleChannels = (channels, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return channels;
    case 'SHOW_ONLINE':
      return channels.filter(channel => channel.isOnline);
    case 'SHOW_OFFLINE':
      return channels.filter(channel => !channel.isOnline);
    default:
      return channels;
  }
};

const mapStateToProps = state => ({
  channels: getVisibleChannels(
    state.channels,
    state.visibilityFilter,
  ),
});

const mapDispatchToProps = dispatch => ({
  onDeleteCard(id) {
    dispatch(channelActions.removeChannel(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
