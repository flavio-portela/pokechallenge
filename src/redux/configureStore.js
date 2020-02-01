// @flow
import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
console.log(rootReducer)

export default function configureStore(initialState: any) {
  return createStore(rootReducer, initialState, composeEnhancers());
}
