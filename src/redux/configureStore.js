// @flow
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import fetchingMiddleware from './middlewares/fetchingMiddleware';
import 'regenerator-runtime/runtime';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState: any) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(fetchingMiddleware))
  );
}
