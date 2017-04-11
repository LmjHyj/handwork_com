import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import { render } from 'react-dom';

import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const App = (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

render(App, document.getElementById('app'));
