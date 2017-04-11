import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import HomeLayout from 'layout/Layout';
import Home from 'pages/home/Home';
import User from 'pages/home/User';

export default (
  <Route path='/' component={HomeLayout}>
    <IndexRoute component={Home} />
    <Route path='/user' component={User} />
    <Route path='/1' component={User} />>
    <Redirect from="**" to="/1" />
  </Route>
);
