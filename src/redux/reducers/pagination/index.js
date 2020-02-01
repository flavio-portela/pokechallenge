// @flow
import pagination from './pagination';

export function selectPage(state: any, page: number, search: string) {
  try{
    const { pagination } = state;
    const pages = pagination[search];
    return pages[page];
  }catch(error){
    return null;
  }
  
}

export function selectCurrentPageNumber(state: any, search: string) {
  try{
    return state.pagination[search].currentPage;
  }catch(error){
    return 1;
  }
}


export default pagination;
