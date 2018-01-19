import { h } from 'preact';
import styles from './styles.css';
import onlineIcon from './img/online.svg';
import offlineIcon from './img/offline.svg';
import defaultLogo from './img/default-logo.png';
import trashBinIcon from './img/trash-bin.svg';

const Card = ({ id, title, logo, url, name, isOnline, onDelete }) => {
  const handleDelete = e => {
    e.preventDefault();
    onDelete(id);
  };

  return (
    <a className={styles.card} href={url} target="_blank">
      <button className={styles.btn} onClick={handleDelete}>
        <svg>
          <use href={`${trashBinIcon}#root`} />
        </svg>
      </button>
      <img src={logo || defaultLogo} className={styles.img} alt="channel" />
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.descr}>{title || ''}</p>
      </div>
      <svg className={styles.icon}>
        <use href={`${isOnline ? onlineIcon : offlineIcon}#root`} /> : }
      </svg>
    </a>
  );
};

export default Card;
