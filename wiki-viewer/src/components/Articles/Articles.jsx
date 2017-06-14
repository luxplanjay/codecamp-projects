import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash';
import uuid from 'uuid';
import './Articles.scss';

const Articles = ({articles}) => {
  const pageUrl = 'https://en.wikipedia.org/?curid=';
  let  items = map(articles, item => {
    return (
      <ArticlesItem
        key={uuid.v4()}
        title={item.title}
        text={item.extract}
        url={`${pageUrl}${item.pageid}`}
      />
    );
  });

  return (
    <div className="articles-container">
      {items}
    </div>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object)
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

export default Articles;
