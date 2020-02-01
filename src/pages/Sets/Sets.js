// @flow
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectSetsPageNumber,
  selectSetsCurrentPage
} from '../../redux/reducers/pagination';
import { selectSets } from '../../redux/reducers/sets';
import { fetchSets } from '../../redux/actions/setsActions';

import SetCard from '../../components/SetCard';
import styles from './Sets.styles';

const Sets = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectSetsPageNumber);
  const page = useSelector(selectSetsCurrentPage);
  const sets = useSelector(selectSets);

  useEffect(() => {
    dispatch(fetchSets({ page: currentPage }));
  }, []);

  return (
    <div css={styles}>
      <div>
        <button onClick={() => {
          dispatch(fetchSets({ page: currentPage - 1 }))
        }}>Previous</button>
        <button onClick={() => {
          dispatch(fetchSets({ page: currentPage + 1}))
        }}>Next</button>
      </div>
      <div className='sets'>
        {page &&
          page.ids &&
          page.ids.map(id => {
            return <SetCard key={id} className={'setCard'} set={sets[id]} />;
          })}
      </div>
    </div>
  );
};

export default Sets;
