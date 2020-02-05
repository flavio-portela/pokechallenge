// @flow
import API from '../../services/pokemon';
import {
  requestPage,
  pageFetched,
  setCurrentPage
} from '../actions/paginationActions';
import { selectPage } from '../reducers/pagination';

const fetchingMiddleware = (store: any) => (next: any) => (action: any) => {
  const { type } = action;
  if (!type.endsWith('XHR')) {
    return next(action);
  }

  const { payload } = action;
  const {
    url,
    method,
    params = {},
    paginated,
    searchKey,
    getIds,
    parseResponse,
    selector
  } = payload;
  const { page } = params;

  if (selector && selector(store.getState())) {
    return;
  }

  if (paginated) {
    if (page < 1) {
      return;
    }
    const currentPage = selectPage(store.getState(), page, searchKey);
    // Avoid requesting the page if it is already loading
    if (currentPage) {
      const { isLoading } = currentPage;
      if (isLoading) {
        return;
      }
      next(setCurrentPage({ page, search: searchKey }));
      return;
    }
    next(
      requestPage({
        page,
        search: searchKey
      })
    );
  }

  API.request({
    method,
    url,
    params
  }).then(response => {
    const { status, data } = response;
    if (status === 200) {
      next({
        type: type.replace('XHR', 'OK'),
        payload: data
      });
      if (paginated) {
        // Check if we had a response back
        const ids = getIds(data);
        if (!ids.length) {
          return;
        }
        next(
          pageFetched({
            page,
            ids,
            search: searchKey
          })
        );
        next(
          setCurrentPage({
            page,
            search: searchKey
          })
        );
      }
    }
  });
};

export default fetchingMiddleware;
