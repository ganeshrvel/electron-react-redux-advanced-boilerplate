'use strict';

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from '../../containers/CounterPage/reducers';
import app from '../../containers/App/reducers';

const rootReducer = combineReducers({
  counter,
  app,
  router
});

export default rootReducer;
