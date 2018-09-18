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

export function apiFetchDemo({ title }) {
  return dispatch => {
    dispatch({
      type: actionTypes.REQ_LOAD
    });

    return fetch(`http://api.plos.org/search?q=title:${title}`)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
        throw `page status: ${res.status}`;
      })
      .then(res =>
        dispatch({
          type: actionTypes.API_FETCH_DEMO,
          payload: {
            data: res
          }
        })
      )
      .catch(e =>
        dispatch({
          type: actionTypes.FAIL_LOAD,
          payload: {
            error: e
          }
        })
      );
  };
}
