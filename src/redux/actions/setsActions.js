// @flow
export const START_FETCHING_SETS = 'SETS/START_FETCHING_SETS';
export const FETCH_SETS = 'SETS/FETCH_SETS_ASYNC';
export const FETCH_SETS_OK = 'SETS/FETCH_SETS_OK';
export const FETCH_SETS_ERROR = 'SETS/FETCH_SETS_ERROR';

export type FetchSetsPayload = {|
  page: number
|};

export type FetchSetsAction = {
  type: typeof START_FETCHING_SETS,
  payload: FetchSetsPayload
};

export function fetchSets(payload: FetchSetsPayload): FetchSetsAction {
  return {
    type: START_FETCHING_SETS,
    payload
  };
}

export type SetsFetchedAction = {
  type: typeof FETCH_SETS_OK,
  payload: {
    sets: Array<any>
  }
};

export function setsFetched(sets: Array<any>): SetsFetchedAction {
  return {
    type: FETCH_SETS_OK,
    payload: {
      sets
    }
  };
}
