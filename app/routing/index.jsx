import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './routes.json';
import App from '../containers/App';
import HomePage from '../containers/HomePage';
import CounterPage from '../containers/CounterPage';
import NotFound from '../components/NotFound';

const routesComponents = {
  HOME: HomePage,
  COUNTER: CounterPage,
  NOTFOUND: NotFound
};

export default () => {
  return (
    <App>
      <Switch>
        {Object.keys(routes).map(a => (
          <Route
            key={routes[a].path || 'notfound'}
            {...routes[a]}
            component={routesComponents[a]}
          />
        ))}
      </Switch>
    </App>
  );
};
