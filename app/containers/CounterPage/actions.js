'use strict';
import prefixer from '../../utils/reducerPrefixer.js';

const prefix = '@@counter';
const actionTypesList = ['INCREMENT_COUNTER', 'DECREMENT_COUNTER'];

export const actionTypes = prefixer(prefix, actionTypesList);

export function increment() {
  return {
    type: actionTypes.INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: actionTypes.DECREMENT_COUNTER,
    payload: {}
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter.count % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
