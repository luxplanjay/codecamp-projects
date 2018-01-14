import { h, Component } from 'preact';
import AppBar from '../AppBar';
import Logo from '../Logo';
import SearchForm from '../SearchForm';
import Controls from '../Controls';
import ChannelList from '../ChannelList';
import defaultChannels from '../../defaultChannels';
import * as API from '../../API.js';
import { saveState, loadState } from '../../localStorage';
import styles from './styles.css';

const getVisibleChannels = (channels, filter) => {
  console.log(channels);
  switch (filter) {
    case 'all':
      return channels;
    case 'online':
      return channels.filter(channel => channel.isOnline);
    case 'offline':
      return channels.filter(channel => !channel.isOnline);
    default:
      return channels;
  }
};

export default class App extends Component {
  state = {
    channels: [],
    visibilityFilter: 'all'
  };

  componentDidMount() {
    const persistedState = loadState();

    if (persistedState) {
      this.setState({
        channels: persistedState
      });
    } else {
      const channelsList =
        this.state.channels.length > 0
          ? this.state.channels.map(channel => channel.name)
          : defaultChannels;

      this.fetchData(channelsList);
    }
  }

  fetchData = channels => {
    const state = this.state.channels;

    API.fetchData(channels).then(data => {
      if (state.length > 0 && data.length === 1) {
        const idList = state.map(channel => channel.id);
        const channelID = data[0].id;

        if (!idList.includes(channelID)) {
          this.setState(
            prevState => ({
              channels: [...data, ...prevState.channels]
            }),
            () => {
              saveState(this.state.channels);
            }
          );
        }

        return;
      } else if (data.length > 1) {
        this.setState(
          {
            channels: data
          },
          () => {
            saveState(this.state.channels);
          }
        );
      }
    });
  };

  onRemoveChannel = id => {
    this.setState(
      prevState => ({
        channels: prevState.channels.filter(channel => channel.id !== id)
      }),
      () => {
        saveState(this.state.channels);
      }
    );
  };

  setVisibilityFilter = filter => {
    this.setState({
      visibilityFilter: filter
    });
  };

  render() {
    const { channels, visibilityFilter } = this.state;
    return (
      <div className="app">
        <AppBar>
          <Logo
            text="twitch.tv reporter"
            link="https://axzerk.github.io/codecamp-projects/twitch-status-app/build/"
          />
          <Controls
            onChangeFilter={this.setVisibilityFilter}
            currentFilter={visibilityFilter}
          />
          <SearchForm onSubmit={this.fetchData} />
        </AppBar>

        {channels.length > 0 && (
          <ChannelList
            channels={getVisibleChannels(channels, visibilityFilter)}
            onDeleteCard={this.onRemoveChannel}
          />
        )}
      </div>
    );
  }
}
