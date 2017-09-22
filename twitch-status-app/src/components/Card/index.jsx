/**
 * Created by Zerk on 20-Sep-17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import onlineIcon from './img/online.svg';
import offlineIcon from './img/offline.svg';
import defaultLogo from './img/default-logo.png';

const propTypes = {
  id: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const Card = ({ id, logo, url, name, title, isOnline, onDelete }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(id);
  };

  return (
    <a className="channel-card" href={url} target="_blank">
      <button className="channel-card__del" onClick={handleDelete} />
      <img src={logo || defaultLogo} className="channel-card__img" alt="channel" />
      <div className="channel-card__info">
        <h2 className="channel-card__name">{name}</h2>
        <p className="channel-card__descr">{title}</p>
      </div>
      {isOnline
        ? <svg className="channel-card__status-icon"><use xlinkHref={`${onlineIcon}#root`} /></svg>
        : <svg className="channel-card__status-icon"><use xlinkHref={`${offlineIcon}#root`} /></svg>
      }
    </a>
  );
};

Card.propTypes = propTypes;

export default Card;
