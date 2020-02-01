// @flow
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSetsPageNumber,
  selectSetsCurrentPage
} from '../../redux/reducers/pagination';
import { selectSets } from '../../redux/reducers/sets';
import { fetchSets } from '../../redux/actions/setsActions';

const Sets = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectSetsPageNumber);
  const page = useSelector(selectSetsCurrentPage);
  const sets = useSelector(selectSets);

  useEffect(() => {
    dispatch(fetchSets({ page: currentPage }));
  }, []);

  useEffect(() => {
    console.log(page, sets);
  }, [page, sets]);

  return (
    <div>
      {page && page.ids && page.ids.map(id => {
        return(
          <pre key={id}>
            {JSON.stringify(sets[id])}
          </pre>
        )
      })}
    </div>
  );
};

export default Sets;
