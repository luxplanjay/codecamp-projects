import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import Article from '../Article/index';
import './styles.scss';

const masonryOptions = {
  transitionDuration: '0.5s',
};

const Gallery = ({ articles }) => {
  const items = articles.map(item => (
    <div key={item.title} className="articles-gallery__item">
      <Article
        title={item.title}
        text={item.text}
        img={item.img}
        url={item.url}
        alt={item.alt}
      />
    </div>
  ));

  return (
    <Masonry
      className={'articles-gallery'}
      elementType={'div'}
      options={masonryOptions}
      disableImagesLoaded={false}
      updateOnEachImageLoad={false}
    >
      {items}
    </Masonry>
  );
};

Gallery.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
