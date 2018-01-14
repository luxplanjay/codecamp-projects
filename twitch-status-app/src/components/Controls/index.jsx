import { h } from 'preact';
import Button from './Button';
import styles from './styles.css';

const Controls = ({ onChangeFilter, currentFilter }) => (
  <div className={styles.controls}>
    <Button
      filter="all"
      onClick={onChangeFilter}
      text="all"
      currentFilter={currentFilter}
    />
    <Button
      filter="online"
      onClick={onChangeFilter}
      text="online"
      currentFilter={currentFilter}
    />
    <Button
      filter="offline"
      onClick={onChangeFilter}
      text="offline"
      currentFilter={currentFilter}
    />
  </div>
);

export default Controls;
