import React, { Component } from 'react';
import { connect } from 'react-redux';
import dynamics from 'dynamics.js';
import {DatePicker} from 'antd'

// import * as Actions from 'actions/home';

// @connect(
//   state => (
//     { counter: state.counter }
//   ),
//   { ...Actions }
// )
class User extends Component {

  state = {
    
  }

  render() {
    
    return (
      <div className="user">
        <p>User</p>
        <DatePicker />        
      </div>
    )
  }
}

export default User;
