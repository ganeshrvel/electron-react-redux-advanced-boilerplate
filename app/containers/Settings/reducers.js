'use strict';

import { actionTypes } from './actions';

export const initialState = {
  freshInstall: 0,
  toggleSettings: false,
  enableAutoUpdateCheck: false,
  enableAnalytics: false
};

export default function Settings(state = initialState, action) {
  // eslint-disable-next-line prefer-const, no-unused-vars
  let { type, payload } = action;
  switch (type) {
    case actionTypes.FRESH_INSTALL:
      return { ...state, freshInstall: payload };

    case actionTypes.TOGGLE_SETTINGS:
      return { ...state, toggleSettings: payload };

    case actionTypes.ENABLE_AUTO_UPDATE_CHECK:
      return { ...state, enableAutoUpdateCheck: payload };

    case actionTypes.ENABLE_ANALYTICS:
      return { ...state, enableAnalytics: payload };

    case actionTypes.COPY_JSON_FILE_TO_SETTINGS:
      return { ...state, ...payload };

    default:
      return state;
  }
}
