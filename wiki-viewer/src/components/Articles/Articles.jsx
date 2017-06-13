import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash';

export default class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articlesData: []
    };
  }

  componentDidMount() {
    this.getArticles('cat');
  }

  getArticles(searchQuery) {
    const apiUrl = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=8&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${searchQuery}&callback=?`;


    fetch(apiUrl)
      .then(response => {
        // if(response.ok) {
        //   return response.json();
        // }
        //
        // throw new Error('something went wrong');
        console.log(response);
      }).then(data => {
        console.log(data);
      });
    // .then(data => {
    // console.log(data);
    // this.setState(() => {
    //   return {
    //     articlesData: data
    //   }
    // })
    // });
  }

  render() {
    return (
      <div></div>
    );
  }
}

Articles.propTypes = {

};
