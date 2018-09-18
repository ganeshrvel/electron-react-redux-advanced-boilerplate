'use strict';

import { actionTypes } from './actions';

const defaultState = {
  ___isDefault: true,
  ___isLoading: false,
  ___timeGenerated: null,
  ___timeLastModified: null,
  ___error: {
    status: false,
    message: null
  },

  count: 0
};

export default function counter(state = defaultState, action) {
  let { type, payload } = action;
  switch (type) {
    case actionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1
      };
    case actionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}
