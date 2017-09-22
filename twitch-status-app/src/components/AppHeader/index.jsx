/**
 * Created by Zerk on 20-Sep-17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import SearchForm from '../SearchForm';
import './styles.scss';

const propTypes = {};

const AppHeader = props => (
  <header className="app-header">
    <Logo />
    <SearchForm />
  </header>
);

AppHeader.propTypes = propTypes;

export default AppHeader;
