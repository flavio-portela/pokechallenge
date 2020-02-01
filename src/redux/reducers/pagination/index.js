// @flow
import pagination from './pagination';

export function selectSetsPage(state: any, page: number) {
  console.log(state.pagination.sets)
  return state.pagination.sets.pages[page];
}
export default pagination;
