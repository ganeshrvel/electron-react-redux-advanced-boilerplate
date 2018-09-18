'use strict';

import { actionTypes } from './actions';

const defaultState = {
  meta: {
    isDefault: true,
    isLoading: false,
    error: {
      status: false,
      message: null
    }
  },
  data: {
    text: null,
    otherValue: null,
    obj: {
      o: null
    }
  }
};

export default function counter(state = null, action) {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return state + 1;
    case actionTypes.DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
