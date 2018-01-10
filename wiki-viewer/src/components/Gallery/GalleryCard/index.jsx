import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const GalleryCard = ({ title, text, img, url, alt }) => (
  <div className="GalleryCard">
    <a href={url} target="_blank" className="GalleryCard__link">
      <img src={img} className="GalleryCard__img" alt={alt} />
      <h2 className="GalleryCard__title">{title}</h2>
      <p className="GalleryCard__text">{text}</p>
    </a>
  </div>
);

GalleryCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default GalleryCard;
