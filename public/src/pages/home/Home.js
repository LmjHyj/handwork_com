import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router'

import * as Actions from 'actions/home';

@connect(
  state => (
    { counter: state.counter }
  ),
  { ...Actions }
)
class Home extends Component {

  state = {}

  componentWillMount () {
    console.log('willmount')
  }

  render () {
    return (
      <div className="home">
        <DatePicker />
        <p>home</p>
        <Link to="user" className="h">user</Link>
      </div>
    )
  }
}

export default Home;
