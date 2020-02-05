// @flow
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
