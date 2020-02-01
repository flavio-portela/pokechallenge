// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, cancel } from 'redux-saga/effects';

import pokemon from '../../../services/pokemon';

import { setsFetched, type FetchSetsAction } from '../../actions/setsActions';
import {
  requestSetsPage,
  setsPageFetched,
  setCurrentPageForSets
} from '../../actions/paginationActions';

import {
  selectSetsPage,
  selectSetsCurrentPage
} from '../../reducers/pagination';

export default function* fetchSets(action: FetchSetsAction): Saga<void> {
  try {
    const { payload } = action;
    const { page } = payload;

    if (page < 1) {
      yield cancel();
    }

    yield put(setCurrentPageForSets({ page }));
    // Check if we already have this page
    const nextPage = yield select(selectSetsPage, page);
    if (nextPage) {
      yield cancel();
    }

    yield put(requestSetsPage({ page }));

    const response = yield call(pokemon.get, `/sets?page=${page}&pageSize=10`);
    const { sets } = response.data;

    yield put(setsFetched(response.data.sets));

    yield put(setsPageFetched({ ids: sets.map(set => set.code), page }));
  } catch (error) {
    yield call(
      console.error,
      'There was a problem fetching the sets',
      error.message
    );
  }
}
