// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, cancel } from 'redux-saga/effects';

import pokemon from '../../../services/pokemon';

import { setsFetched, type FetchSetsAction } from '../../actions/setsActions';
import {
  requestPage,
  pageFetched,
  setCurrentPage
} from '../../actions/paginationActions';
import { selectPage } from '../../reducers/pagination';

export default function* fetchSets(action: FetchSetsAction): Saga<void> {
  try {
    const { payload } = action;
    const { page } = payload;

    if (page < 1) {
      yield cancel();
    }

    yield put(setCurrentPage({ page, search: 'sets' }));

    // Check the current status of this page
    const currentPage = yield select(selectPage, page, 'sets');
    if (currentPage) {
      yield cancel();
    }

    yield put(requestPage({ page, search: 'sets' }));

    const response = yield call(pokemon.get, `/sets?page=${page}&pageSize=10`);
    const { sets } = response.data;
    yield put(setsFetched(sets));
    yield put(
      pageFetched({ page, ids: sets.map(set => set.code), search: 'sets' })
    );
  } catch (error) {
    yield call(
      console.error,
      'There was a problem fetching the sets',
      error.message
    );
  }
}
