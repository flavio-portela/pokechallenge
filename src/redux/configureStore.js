// @flow
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import 'regenerator-runtime/runtime';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState: any) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
}
