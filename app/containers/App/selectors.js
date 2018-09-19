import { createSelector } from 'reselect';

const makeApp = (state, props) => state.App;

export const makeIsLoading = createSelector(makeApp, state => state.___isLoading);
