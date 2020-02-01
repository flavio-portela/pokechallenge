// @flow
import { type Saga } from 'redux-saga';
import { all } from 'redux-saga/effects';

import sets from './sets';

export default function* rootSaga(): Saga<void> {
  yield all([...sets]);
}
