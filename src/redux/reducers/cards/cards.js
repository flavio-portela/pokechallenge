// @flow
import { FETCH_CARDS_OK, FETCH_CARD_OK } from '../../actions/cardsActions';

type CardsState = { [id: string]: any };

const initialState = {};

export default function cards(state: CardsState = initialState, action: any) {
  const { type } = action;
  switch (type) {
    case FETCH_CARDS_OK: {
      const { cards } = action.payload;
      const newCards = cards.reduce((obj, card) => {
        obj[card.id] = card;
        return obj;
      }, {});
      return {
        ...state,
        ...newCards
      };
    }
    case FETCH_CARD_OK: {
      const { card } = action.payload;
      return {
        ...state,
        [card.id]: card
      };
    }
    default:
      return state;
  }
}
