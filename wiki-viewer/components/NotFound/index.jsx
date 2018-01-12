import { h } from 'preact';
import styles from './styles.css';

const NotFound = () => (
  <div className={styles.container}>
    <p className={styles.text}>Sorry, we couldn't find anything</p>
    <span className={styles.icon}>(⌣́_⌣̀)</span>
  </div>
);

export default NotFound;
