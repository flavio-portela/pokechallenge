// @flow
import { combineReducers } from 'redux';
import sets from './sets';
import pagination from './pagination';

export default combineReducers({
  sets,
  pagination
});
