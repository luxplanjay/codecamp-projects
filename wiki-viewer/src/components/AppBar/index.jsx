import React from 'react';
import Logo from 'components/Logo';
import './styles.css';

const AppBar = props => (
  <header className="AppBar">
    <div className="AppBar__logo">
      <Logo
        text="Viki Viewer"
        link="https://axzerk.github.io/codecamp-projects/wiki-viewer/build/"
      />
    </div>
    <div className="AppBar__form">{props.children}</div>
  </header>
);

export default AppBar;
