// @flow
import { type Saga } from 'redux-saga';
import { call, put, cancel, select } from 'redux-saga/effects';

import {
  requestPage,
  pageFetched,
  setCurrentPage
} from '../../actions/paginationActions';
import pagination, { selectPage } from '../../reducers/pagination';
import pokemon from '../../../services/pokemon';
import {
  type FetchCardsAction,
  cardsFetched
} from '../../actions/cardsActions';

export default function* fetchCards(action: FetchCardsAction): Saga<void> {
  try {
    const { payload } = action;
    const { page, setCode } = payload;

    if (page < 1) {
      yield cancel();
    }
    const paginationSearchKey = `cards-${setCode}`;
    yield put(setCurrentPage({ page, search: paginationSearchKey }));

    // Check the current status of this page
    const currentPage = yield select(selectPage, page, paginationSearchKey);
    if (currentPage) {
      yield cancel();
    }

    const response = yield call(
      pokemon.get,
      `/cards?setCode=${setCode}&page=${page}&pageSize=10`
    );
    const { cards } = response.data;
    yield put(cardsFetched(cards));
    yield put(
      pageFetched({
        page,
        ids: cards.map(card => card.id),
        search: paginationSearchKey
      })
    );
  } catch (error) {
    console.error(error);
  }
}
