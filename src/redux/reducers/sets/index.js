import sets from './sets';

export function selectSets(state: any) {
  return state.sets;
}

export function selectSetsByIds(state: any, ids: Array<string> = []) {
  const sets = selectSets(state);
}

export default sets;
