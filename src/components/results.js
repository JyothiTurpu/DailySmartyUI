import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import ResultsPost from './resultsPost';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Results extends Component {
  constructor(props) {
    super(props);
  }


  handleSearchBarSubmit(query) {
    console.log('handleSearchBarSubmit from Results.js ', query);
    this.props.fetchPostsWithQuery(query);
  }


  render() {
    return (
      <div>
        <h1>Results</h1>
        <Logo size={55}/>
        <SearchBar onSubmit={(query) => {this.handleSearchBarSubmit(query)}}/>
        <ResultsPost/>
      </div>
    );
  }
}

export default connect(null, actions)(Results);