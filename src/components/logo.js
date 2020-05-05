import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const size = {
      height: this.props.size ? this.props.size : 105,
      width: this.props.size ? this.props.size : 105
    }

    return (
      <div className='logo-main'>
          <Link to='/'>
            <img style={size} src="/assets/ds_circle_logo.png" 
                 alt="Daily Smarty Image Logo"/>
          </Link>      
      </div>
    );
  }
}