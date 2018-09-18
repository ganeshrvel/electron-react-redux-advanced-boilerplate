'use strict';

import { actionTypes } from './actions';

const defaultState = {
  /* <Meta Data> */
  ___isDefault: true,
  ___isLoading: false,
  ___timeGenerated: null,
  ___timeLastModified: null,
  ___error: null,
  /* </Meta Data> */

  count: 0
};

export default function counter(state = defaultState, action) {
  let { type, payload } = action;
  switch (type) {
    /* <Meta Data> */
    case actionTypes.REQ_LOAD:
      return {
        ...state,
        ___isLoading: true
      };
    case actionTypes.RES_LOAD:
      return {
        ...state,
        ...setLoadedMetaData(state),
      };
    case actionTypes.FAIL_LOAD:
      return {
        ...state,
        ___isLoading: false,
        ___error: payload.error
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
    default:
      return state;
  }
}

function setLoadedMetaData(state) {
  const ms = Date.now();
  return {
    ___isLoading: false,
    ___isDefault: false,
    ___timeGenerated: !state.___timeGenerated ? ms : state.___timeGenerated,
    ___timeLastModified: ms,
    ___error: null
  };
}
