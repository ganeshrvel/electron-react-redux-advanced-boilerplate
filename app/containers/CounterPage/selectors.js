import { createSelector } from 'reselect';

const _counter = state => state.counter;

export const _count = createSelector(_counter, state => state.count);
export const _demoFetchData = createSelector(
  _counter,
  state => state.demoFetchData
);
