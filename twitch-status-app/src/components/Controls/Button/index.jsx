import { h } from 'preact';
import classNames from 'classnames';
import styles from './styles.css';

const Button = ({ filter, onClick, text, currentFilter }) => {
  const btnClass = classNames({
    [styles.btn]: true,
    [styles.active]: currentFilter === filter
  });

  const handleClick = () => {
    onClick(filter);
  };

  return (
    <button className={btnClass} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
