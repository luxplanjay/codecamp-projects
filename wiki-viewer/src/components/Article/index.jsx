import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Article = ({ title, text, img, url, alt }) => (
  <article className="wiki-article">
    <a href={url} target="_blank" className="wiki-article__link">
      <img src={img} className="wiki-article__img" alt={alt} />
      <h2 className="wiki-article__title">{title}</h2>
      <p className="wiki-article__text">{text}</p>
    </a>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Article;
