import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middlewares = [
  promise(),
  thunk,
];

if (__DEV__) {
  middlewares.push(logger); 
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  undefined,
  enhancers(applyMiddleware(...middlewares))
);
