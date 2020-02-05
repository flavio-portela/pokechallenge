// @flow
import { selectCard } from '../reducers/cards';

// Single card
export const START_FETCHING_CARD = 'CARDS/FETCH_CARD_XHR';
export const FETCH_CARD_OK = 'CARDS/FETCH_CARD_OK';

// Page
export const START_FETCHING_CARDS = 'CARDS/FETCH_CARDS_XHR';
export const FETCH_CARDS_OK = 'CARDS/FETCH_CARDS_OK';

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
    payload: {
      params: {
        ...payload,
        pageSize: 10
      },
      url: '/cards',
      method: 'GET',
      paginated: true,
      searchKey: `cards-${payload.setCode}`,
      getIds: (data: any) => {
        return data.cards.map(card => card.id);
      }
    }
  };
}

export function fetchCard(payload: any) {
  const { id } = payload;
  return {
    type: START_FETCHING_CARD,
    payload: {
      url: `/cards/${id}`,
      method: 'GET',
      selector: (state: any) => {
        return selectCard(state, id);
      }
    }
  };
}
