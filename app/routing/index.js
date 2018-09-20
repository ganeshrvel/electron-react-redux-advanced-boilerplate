'use strict';

import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../containers/App';
import HomePage from '../containers/HomePage/Loadable';
import CounterPage from '../containers/CounterPage/Loadable';
import NotFoundPage from '../containers/NotFoundPage/Loadable';

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
