import { h } from 'preact';
import Card from '../Card';
import styles from './styles.css';

const ChannelList = ({ channels, onDeleteCard }) => (
  <ul className={styles.list}>
    {channels.map(channel => (
      <li key={channel.id} className={styles.item}>
        <Card onDelete={onDeleteCard} {...channel} />
      </li>
    ))}
  </ul>
);

// const mapStateToProps = state => ({
//   channels: getVisibleChannels(state.channels, state.visibilityFilter)
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteCard(id) {
//     dispatch(channelActions.removeChannel(id));
//   }
// });

export default ChannelList;
