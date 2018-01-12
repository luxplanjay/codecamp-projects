import { h, Component } from 'preact';
import AppBar from '../AppBar';
import SearchForm from '../SearchForm';
import Gallery from '../Gallery';
import NotFound from '../NotFound';
import * as api from '../../api';
import * as storage from '../../localStorage';
import styles from './styles.css';

export default class App extends Component {
  state = {
    articles: [],
    requestErrored: false
  };

  componentDidMount() {
    const data = storage.loadState('wiki-articles');

    if (data) {
      this.setState({
        articles: data
      });
    }
  }

  handleFormSubmit = searchQuery => {
    api.fetchArticles(searchQuery).then(data => {
      if (data) {
        this.setState(
          {
            articles: api.extractArticles(data)
          },
          () => {
            storage.saveState('wiki-articles', this.state.articles);
          }
        );
      } else {
        this.setState(prevState => ({
          requestErrored: !prevState.requestErrored
        }));
      }
    });
  };

  render() {
    const { articles, requestErrored } = this.state;

    return (
      <div className={styles.app}>
        <AppBar>
          <SearchForm onSubmit={this.handleFormSubmit} />
        </AppBar>
        {requestErrored ? <NotFound /> : <Gallery articles={articles} />}
      </div>
    );
  }
}
