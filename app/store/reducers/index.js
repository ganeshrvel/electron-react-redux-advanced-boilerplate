'use strict';

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from '../../containers/CounterPage/reducers';

const rootReducer = combineReducers({
  counter,
  router
});

export default rootReducer;
