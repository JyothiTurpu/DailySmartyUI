import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {

  handleSearchBarSubmit = function(query) {
    console.log('Handle Submit Form', query);
    this.props.fetchPostsWithQuery(query, () => {this.props.history.push('/results')});
    
  }


  render() {
    return (
      <div className='app'>
        <Logo/>
        <SearchBar page='home' onSubmit={(query) => {this.handleSearchBarSubmit(query)}}/>
        <RecentPosts/>
      </div>
    );
  }
}

export default connect(null, actions)(App);
