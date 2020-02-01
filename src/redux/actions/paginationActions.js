// @flow
export const REQUEST_PAGE = 'PAGINATION/REQUEST_PAGE';
export const PAGE_FETCHED = 'PAGINATION/PAGE_FETCHED';
export const SET_CURRENT_PAGE = 'PAGINATION/SET_CURRENT_PAGE';

type RequestPagePayload = {
  page: number,
  search: string
};

export type RequestPageAction = {
  type: typeof REQUEST_PAGE,
  payload: RequestPagePayload
};

export function requestPage(payload: RequestPagePayload): RequestPageAction {
  return {
    type: REQUEST_PAGE,
    payload
  };
}

type PageFetchedPayload = {
  search: string,
  page: number,
  ids: Array<string>
};

export type PageFetchedAction = {
  type: typeof PAGE_FETCHED,
  payload: PageFetchedPayload
};

export function pageFetched(payload: PageFetchedPayload): PageFetchedAction {
  return {
    type: PAGE_FETCHED,
    payload
  };
}

type SetCurrentPagePayload = {
  page: number,
  search: string
};

export type SetCurrentPageAction = {
  type: typeof SET_CURRENT_PAGE,
  payload: SetCurrentPagePayload
};

export function setCurrentPage(
  payload: SetCurrentPagePayload
): SetCurrentPageAction {
  return {
    type: SET_CURRENT_PAGE,
    payload
  };
}
