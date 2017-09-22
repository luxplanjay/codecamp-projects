/**
 * Created by Zerk on 20-Sep-17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '@/actions/visibilityFilterActions';
import Button from './Button';
import './styles.scss';

const propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

const Controls = ({ onChangeFilter }) => (
  <div className="controls">
    <Button
      filter="SHOW_ALL"
      onClick={onChangeFilter}
      text="all"
    />
    <Button
      filter="SHOW_ONLINE"
      onClick={onChangeFilter}
      text="online"
    />
    <Button
      filter="SHOW_OFFLINE"
      onClick={onChangeFilter}
      text="offline"
    />
  </div>
);

Controls.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  onChangeFilter(filter) {
    dispatch(actions.setVisibilityFilter(filter));
  },
});

export default connect(null, mapDispatchToProps)(Controls);
