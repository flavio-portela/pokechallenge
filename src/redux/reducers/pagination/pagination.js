// @flow
import {
  REQUEST_SET_PAGE,
  type RequestSetPageAction,
  SETS_PAGE_FETCHED,
  type SetsPageFetchedAction
} from '../../actions/paginationActions';

type Action = RequestSetPageAction | SetsPageFetchedAction;

type SetPage = {|
  ids: Array<string>,
  loading: boolean
|};

type SetPages = {
  [page: number]: SetPage
};

type PaginationState = {|
  sets: {|
    currentPage: number,
    pages: SetPages
  |}
|};

const initialState: PaginationState = {
  sets: {
    currentPage: 1,
    pages: {}
  }
};

export default function pagination(
  state: PaginationState = initialState,
  action: Action
) {
  switch (action.type) {
    case REQUEST_SET_PAGE: {
      const { page } = action.payload;
      return {
        ...state,
        sets: {
          ...state.sets,
          pages: {
            ...state.sets.pages,
            [page]: {
              ids: [],
              loading: true
            }
          }
        }
      };
    }
    case SETS_PAGE_FETCHED:
      const { ids, page } = action.payload;
      return {
        ...state,
        sets: {
          ...state.sets,
          pages: {
            ...state.sets.pages,
            [page]: {
              ids,
              loading: false
            }
          }
        }
      }
    default:
      return state;
  }
}
