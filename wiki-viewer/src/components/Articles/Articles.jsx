import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash';
import uuid from 'uuid';

export default class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articlesData: null
    };
  }

  componentDidMount() {
    this.getArticles('cat');
  }

  getArticles(searchQuery) {
    const endpoint = 'https://en.wikipedia.org/w/api.php?',
          format = 'format=json',
          action = '&action=query&generator=search&gsrnamespace=0&gsrlimit=8&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max',
          search = `&gsrsearch=${searchQuery}`,
          apiUrl = endpoint+format+action+search;

    fetch(apiUrl)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      }).then(data => {
        let arr = map(data.query.pages, item => {
          return item;
        });

        this.setState(() => {
          return {
            articlesData: arr
          };
        });
      });
  }

  render() {
    let items,
        pageUrl = 'https://en.wikipedia.org/?curid=';

    if(this.state.articlesData) {
      items = map(this.state.articlesData, item => {
        return (
          <ArticlesItem
            key={uuid.v4()}
            title={item.title}
            text={item.extract}
            url={`${pageUrl}${item.pageid}`}
          />
        );
      });
    }
    return (
      <div className="articles-container">
        {items}
      </div>
    );
  }
}

Articles.propTypes = {

};

const ArticlesItem = ({title, text, url}) => {
  return (
    <article className="wiki-article">
      <a href={url} target="_blank" className="wiki-article__link">
        <h2 className="wiki-article__title">{title}</h2>
        <p className="wiki-article__text">{text}</p>
      </a>
    </article>
  );
};

ArticlesItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string
};
