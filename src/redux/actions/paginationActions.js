// @flow
export const REQUEST_SET_PAGE = 'PAGINATION/REQUEST_SET_PAGE';
export const SETS_PAGE_FETCHED = 'PAGINATION/SETS_PAGE_FETCHED';

type RequestSetPagePayload = {|
  page: number
|};

export type RequestSetPageAction = {|
  type: typeof REQUEST_SET_PAGE,
  payload: RequestSetPagePayload
|};

export function requestSetsPage(payload: RequestSetPagePayload) {
  return {
    type: REQUEST_SET_PAGE,
    payload
  };
}

type SetsPageFetchedPayload = {|
  ids: Array<string>,
  page: number
|};

export type SetsPageFetchedAction = {|
  type: typeof SETS_PAGE_FETCHED,
  payload: SetsPageFetchedPayload
|};

export function setsPageFetched(
  payload: SetsPageFetchedPayload
): SetsPageFetchedAction {
  return {
    type: SETS_PAGE_FETCHED,
    payload
  };
}
