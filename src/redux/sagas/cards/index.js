// @flow
import { takeEvery } from 'redux-saga/effects';
import { START_FETCHING_CARDS } from '../../actions/cardsActions';
import fetchCards from './fetchCards';

export default [takeEvery(START_FETCHING_CARDS, fetchCards)];
