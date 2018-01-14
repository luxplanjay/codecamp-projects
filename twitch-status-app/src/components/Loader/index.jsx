import { h } from 'preact';
import styles from './styles.css';

const Loader = () => (
  <div className={styles.backdrop}>
    <div class={styles.loader}>
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
    </div>
  </div>
);

export default Loader;
