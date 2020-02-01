// @flow
import { FETCH_SETS_OK } from '../../actions/setsActions';

type SetsState = {[code: string]: any};
const initialState = {};

export default function sets(state: SetsState = initialState, action: any) {
  const { type } = action;
  switch (type) {
    case FETCH_SETS_OK:
      const { sets } = action.payload;
      const newSets = sets.reduce((obj, set) => {
        obj[set.code] = set
        return obj;
      }, {})
      
      return {
        ...state,
        ...newSets
      };
    default:
      return state;
  }
}
