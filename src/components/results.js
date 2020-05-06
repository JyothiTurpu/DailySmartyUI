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
      <div className='results'>
        <Logo size={55}/>
        <SearchBar page='results' onSubmit={(query) => {this.handleSearchBarSubmit(query)}}/>
        <ResultsPost/>
      </div>
    );
  }
}

export default connect(null, actions)(Results);