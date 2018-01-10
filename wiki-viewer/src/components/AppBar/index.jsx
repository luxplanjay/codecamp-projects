import React from 'react';
import './styles.css';

const AppBar = props => (
  <div className="AppBar">
    <header className="AppBar__container">{props.children}</header>
  </div>
);

export default AppBar;
