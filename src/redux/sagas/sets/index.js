// @flow
import { takeEvery } from 'redux-saga/effects';
import { START_FETCHING_SETS } from '../../actions/setsActions';
import fetchSets from './fetchSets';

export default [takeEvery(START_FETCHING_SETS, fetchSets)];
