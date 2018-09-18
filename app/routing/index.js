'use strict';

import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../containers/App';
import HomePage from '../containers/HomePage';
import CounterPage from '../containers/CounterPage';
import NotFoundPage from '../containers/NotFoundPage';

export const routes = {
  Home: {
    path: '/',
    exact: true
  },
  Counter: {
    path: '/counter',
    exact: true
  },
  NotFound: {}
};

const routeComponents = {
  Home: HomePage,
  Counter: CounterPage,
  NotFound: NotFoundPage
};

export default () => {
  return (
    <App>
      <Switch>
        {Object.keys(routes).map(a => (
          <Route
            key={routes[a].path || 'notfound'}
            {...routes[a]}
            component={routeComponents[a]}
          />
        ))}
      </Switch>
    </App>
  );
};
