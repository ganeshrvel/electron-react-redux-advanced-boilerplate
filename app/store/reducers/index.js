'use strict';

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import App from '../../containers/App/reducers';

const rootReducer = asyncReducers =>
  combineReducers({
    App,
    router,
    ...asyncReducers
  });

export default rootReducer;
