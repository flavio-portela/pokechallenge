// @flow
import cards from './cards';

export function selectCards(state: any) {
  return state.cards;
}

export function selectCard(state: any, id: string) {
  return state.cards[id];
}

export default cards;
