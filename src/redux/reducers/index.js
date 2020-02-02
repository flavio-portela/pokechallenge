// @flow
import { combineReducers } from 'redux';
import sets from './sets';
import pagination from './pagination';
import cards from './cards';

export default combineReducers({
  cards,
  sets,
  pagination
});
