import React, { Component } from 'react';
import Logo from './logo';

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Results</h1>
        <Logo/>
      </div>
    );
  }
}

export default Results;