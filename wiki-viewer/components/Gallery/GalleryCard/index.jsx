import { h } from 'preact';
import styles from './styles.css';

const GalleryCard = ({ title, text, img, url, alt }) => (
  <div className={styles.card}>
    <a className={styles.link} href={url} target="_blank">
      <img className={styles.img} src={img} alt={alt} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </a>
  </div>
);

export default GalleryCard;
