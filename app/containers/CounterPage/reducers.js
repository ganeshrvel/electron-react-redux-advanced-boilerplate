'use strict';

import { actionTypes } from './actions';

const defaultState = {
  ___meta: {
    isDefault: true,
    isLoading: false,
    timeGenerated: null,
    timeLastModified: null,
    error: null
  },
  
  count: 0,
  demoFetchData: null
};

export default function counter(state = defaultState, action) {
  let { type, payload } = action;
  switch (type) {
    /* <Meta Data> */
    case actionTypes.REQ_LOAD:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.RES_LOAD:
      return {
        ...state,
        ...setLoadedMetaData(state)
      };
    case actionTypes.FAIL_LOAD:
      return {
        ...state,
        isLoading: false,
        error: payload.error
      };
    /* </Meta Data> */

    case actionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        ...setLoadedMetaData(state),
        count: state.count + 1
      };
    case actionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        ...setLoadedMetaData(state),
        count: state.count - 1
      };
    case actionTypes.API_FETCH_DEMO:
      return {
        ...state,
        ...setLoadedMetaData(state),
        demoFetchData: payload.data
      };
    default:
      return state;
  }
}

function setLoadedMetaData(state) {
  const ms = Date.now();
  return {
    meta: {
      isLoading: false,
      isDefault: false,
      timeGenerated: !state.timeGenerated ? ms : state.timeGenerated,
      timeLastModified: ms,
      error: null
    }
  };
}
