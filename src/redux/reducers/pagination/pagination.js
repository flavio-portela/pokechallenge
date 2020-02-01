// @flow
import {
  REQUEST_SET_PAGE,
  type RequestSetPageAction,
  SETS_PAGE_FETCHED,
  type SetsPageFetchedAction,
  SET_CURRENT_PAGE_FOR_SETS,
  type SetCurrentPageForSetAction
} from '../../actions/paginationActions';

type Action =
  | RequestSetPageAction
  | SetsPageFetchedAction
  | SetCurrentPageForSetAction;

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
    case SETS_PAGE_FETCHED: {
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
      };
    }
    case SET_CURRENT_PAGE_FOR_SETS: {
      const { page } = action.payload;
      return  {
        ...state,
        sets: {
          ...state.sets,
          currentPage: page
        }
      }
    }
    default:
      return state;
  }
}
