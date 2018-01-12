import { h } from 'preact';
import styles from './styles.css';

const Logo = ({ text, link }) => (
  <h1 className={styles.logo}>
    <a href={link} className={styles.link}>
      Wiki Viewer
    </a>
  </h1>
);

export default Logo;
