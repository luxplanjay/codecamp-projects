import React from 'react';
import PropTypes from 'prop-types';
import GalleryCard from './GalleryCard';
import './styles.css';

const Gallery = ({ articles }) => (
  <ul className="Gallery">
    {articles.map(item => (
      <li key={item.title} className="Gallery__item">
        <GalleryCard {...item} />
      </li>
    ))}
  </ul>
);

Gallery.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Gallery;
