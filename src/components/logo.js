import React, { Component } from 'react';

export default class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='logo-main'>
        <img src="/assets/ds_circle_logo.png" alt="Daily Smarty Image Logo"/>
      </div>
    );
  }
}