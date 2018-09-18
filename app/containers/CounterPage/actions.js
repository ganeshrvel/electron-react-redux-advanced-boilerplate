'use strict';
import prefixer from '../../utils/reducerPrefixer.js';

const prefix = '@@counter';
const actionTypesList = [
  'REQ_LOAD',
  'RES_LOAD',
  'FAIL_LOAD',
  'INCREMENT_COUNTER',
  'DECREMENT_COUNTER'
];

export const actionTypes = prefixer(prefix, actionTypesList);

export function increment() {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.INCREMENT_COUNTER,
      payload: {}
    });
  };
}

export function decrement() {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.DECREMENT_COUNTER,
      payload: {}
    });
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter.count % 2 === 0) {
      return;
    }

    increment();
  };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      increment();
    }, delay);
  };
}
