// @flow
export const START_FETCHING_CARDS = 'CARDS/START_FETCHING_CARDS';
export const FETCH_CARDS = 'CARDS/FETCH_CARDS_ASYNC';
export const FETCH_CARDS_OK = 'CARDS/FETCH_CARDS_OK';
export const FETCH_CARDS_ERROR = 'CARDS/FETCH_CARDS_ERROR';

type FetchCardsPayload = {|
  page: number,
  setCode: string
|};

export type FetchCardsAction = {|
  type: typeof START_FETCHING_CARDS,
  payload: FetchCardsPayload
|};

export function fetchCards(payload: FetchCardsPayload) {
  return {
    type: START_FETCHING_CARDS,
    payload
  };
}

export type CardsFetchedAction = {|
  type: typeof FETCH_CARDS_OK,
  payload: {
    cards: Array<any>
  }
|};

export function cardsFetched(cards: Array<any>) {
  return {
    type: FETCH_CARDS_OK,
    payload: {
      cards
    }
  };
}
