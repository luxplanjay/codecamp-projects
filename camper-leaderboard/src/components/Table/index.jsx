import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import TableRowComp from './TableRow';

const propTypes = {
  campers: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onTableSort: PropTypes.func.isRequired,
};

const Tableq = ({ campers, onTableSort }) => (
  <MuiThemeProvider>
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>#</TableHeaderColumn>
          <TableHeaderColumn>Camper</TableHeaderColumn>
          <TableHeaderColumn>
            <RaisedButton
              label="Last 30 days"
              primary
              onClick={() => { onTableSort('recent'); }}
            />
          </TableHeaderColumn>
          <TableHeaderColumn>
            <RaisedButton
              label="All time"
              primary
              onClick={() => { onTableSort('alltime'); }}
            />
          </TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        showRowHover
        stripedRows
        displayRowCheckbox={false}
      >
        {campers.map((camper, idx) => (
          <TableRowComp
            key={camper.username}
            img={camper.img}
            rank={idx + 1}
            name={camper.username}
            recentPts={camper.recent}
            allTimePts={camper.alltime}
          />
        ))}
      </TableBody>
    </Table>
  </MuiThemeProvider>
);

Tableq.propTypes = propTypes;

export default Tableq;
