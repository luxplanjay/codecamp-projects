import { h } from 'preact';
import styles from './styles.css';

const AppBar = props => (
  <header className={styles.bar}>{props.children}</header>
);

export default AppBar;
