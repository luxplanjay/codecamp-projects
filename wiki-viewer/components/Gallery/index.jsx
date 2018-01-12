import { h } from 'preact';
import GalleryCard from './GalleryCard';
import styles from './styles.css';

const Gallery = ({ articles }) => (
  <ul className={styles.gallery}>
    {articles.map(item => (
      <li key={item.title} className={styles.item}>
        <GalleryCard {...item} />
      </li>
    ))}
  </ul>
);

export default Gallery;
