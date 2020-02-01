// @flow
import {
  REQUEST_PAGE,
  type RequestPageAction,
  PAGE_FETCHED,
  type PageFetchedAction,
  SET_CURRENT_PAGE,
  type SetCurrentPageAction
} from '../../actions/paginationActions';

type Action = RequestPageAction | PageFetchedAction | SetCurrentPageAction;

type Page = {|
  ids: Array<string>,
  isLoading: boolean
|};

type Pages = {
  [page: number]: Page
};

type Pagination = {
  currentPage: number,
  pages: Pages
};

type PaginationState = {
  [search: string]: Pagination
};

export default function pagination(
  state: PaginationState = {},
  action: Action
) {
  switch (action.type) {
    case REQUEST_PAGE: {
      const { page, search } = action.payload;
      return {
        ...state,
        [search]: {
          ...state[search],
          [page]: {
            ids: [],
            isLoading: true
          }
        }
      };
    }
    case PAGE_FETCHED: {
      const { page, search, ids } = action.payload;
      return {
        ...state,
        [search]: {
          ...state[search],
          [page]: {
            ids,
            isLoading: false
          }
        }
      };
    }
    case SET_CURRENT_PAGE: {
      const { page, search } = action.payload;
      return {
        ...state,
        [search]: {
          ...state[search],
          currentPage: page
        }
      };
    }
    default:
      return state;
  }
}
