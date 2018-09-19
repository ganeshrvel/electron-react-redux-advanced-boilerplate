'use strict';

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import Counter from '../../containers/CounterPage/reducers';
import App from '../../containers/App/reducers';

const rootReducer = combineReducers({
  Counter,
  App,
  router
});

export default rootReducer;
