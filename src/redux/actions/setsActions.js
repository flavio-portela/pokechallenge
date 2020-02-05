// @flow
export const START_FETCHING_SETS = 'SETS/FETCH_SETS_XHR';
export const FETCH_SETS_OK = 'SETS/FETCH_SETS_OK';

export type FetchSetsPayload = {|
  page: number
|};

export type FetchSetsAction = {
  type: typeof START_FETCHING_SETS,
  payload: FetchSetsPayload
};

export function fetchSets(payload: FetchSetsPayload) {
  return {
    type: START_FETCHING_SETS,
    payload: {
      params: {
        ...payload,
        pageSize: 10
      },
      url: '/sets',
      method: 'GET',
      paginated: true,
      searchKey: 'sets',
      getIds: (data: any) => {
        return data.sets.map(set => set.code);
      }
    }
  };
}

export type SetsFetchedAction = {
  type: typeof FETCH_SETS_OK,
  payload: {
    sets: Array<PokeSet>
  }
};

export function setsFetched(sets: Array<PokeSet>): SetsFetchedAction {
  return {
    type: FETCH_SETS_OK,
    payload: {
      sets
    }
  };
}
