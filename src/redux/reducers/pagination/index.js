// @flow
import pagination from './pagination';

export function selectSetsPage(state: any, page: number) {
  return state.pagination.sets.pages[page];
}

export function selectSetsPageNumber(state: any) {
  return state.pagination.sets.currentPage;
}

export function selectSetsCurrentPage(state: any) {
  const currentPage = selectSetsPageNumber(state);
  return state.pagination.sets.pages[currentPage];
}

export default pagination;
