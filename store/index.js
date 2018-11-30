import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';
import { actions, actionCreators } from './actions';
import * as selectors from './selectors';

const exampleInitialState = {
  ui: {
    loading: false,
  },
  data: {},
  error: {},
};

export function initializeStore (initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware, promiseMiddleware())))
};

export { actions, actionCreators, selectors };
