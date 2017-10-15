import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const propTypes = {
  rank: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  recentPts: PropTypes.number.isRequired,
  allTimePts: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

const rowStyles = {
  display: 'flex',
  alignItems: 'center',
};

const avatarStyles = {
  marginRight: '1rem',
};

const TableRowComp = ({ rank, img, name, recentPts, allTimePts }) => (
  <TableRow>
    <TableRowColumn>{rank}</TableRowColumn>
    <TableRowColumn style={rowStyles}>
      <Avatar src={img} style={avatarStyles} />
      {name}
    </TableRowColumn>
    <TableRowColumn>{recentPts}</TableRowColumn>
    <TableRowColumn>{allTimePts}</TableRowColumn>
  </TableRow>
);

TableRowComp.propTypes = propTypes;

export default TableRowComp;
