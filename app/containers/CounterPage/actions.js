'use strict';
import prefixer from '../../utils/reducerPrefixer.js';

const prefix = '@@counter';
const actionTypesList = [
  'REQ_LOAD',
  'RES_LOAD',
  'FAIL_LOAD',
  'INCREMENT_COUNTER',
  'DECREMENT_COUNTER',
  'API_FETCH_DEMO'
];

export const actionTypes = prefixer(prefix, actionTypesList);

export function increment() {
  return {
    type: actionTypes.INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: actionTypes.DECREMENT_COUNTER
  };
}

export function reqLoad() {
  return {
    type: actionTypes.REQ_LOAD
  };
}

export function failLoad(e) {
  return {
    type: actionTypes.FAIL_LOAD,
    payload: {
      error: e
    }
  };
}

export function apiFetchDemo(data) {
  return {
    type: actionTypes.API_FETCH_DEMO,
    payload: {
      data: data
    }
  };
}
