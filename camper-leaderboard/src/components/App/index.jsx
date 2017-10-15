import React, { Component } from 'react';
import * as api from '@/api';
import Table from '../Table';
import './styles.scss';

export default class App extends Component {
  state = {
    campers: null,
  };

  componentDidMount() {
    api.fetchCamperData().then((data) => {
      this.setState({
        campers: data,
      });
    });
  }

  sortByPts = (stat) => {
    this.setState({
      campers: api.sortCampersBy(this.state.campers, stat),
    });
  }

  render() {
    return (
      <div className="container">
        <h1>FCC Camper Leaderboard</h1>
        {this.state.campers &&
          <Table
            campers={this.state.campers}
            onTableSort={this.sortByPts}
          />}
      </div>
    );
  }
}
