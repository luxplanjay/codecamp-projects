import { h } from 'preact';
import Logo from '../Logo';
import styles from './styles.css';

const AppBar = props => (
  <header className={styles.bar}>
    <div className={styles.logo}>
      <Logo
        text="Viki Viewer"
        link="https://axzerk.github.io/codecamp-projects/wiki-viewer/build/"
      />
    </div>
    <div className={styles.form}>{props.children}</div>
  </header>
);

export default AppBar;
