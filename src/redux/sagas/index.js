// @flow
import { type Saga } from 'redux-saga';
import { all } from 'redux-saga/effects';

import sets from './sets';
import cards from './cards';

export default function* rootSaga(): Saga<void> {
  yield all([...sets, ...cards]);
}
