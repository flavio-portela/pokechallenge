// @flow
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectPage,
  selectCurrentPageNumber
} from '../../redux/reducers/pagination';
import { selectSets } from '../../redux/reducers/sets';
import { fetchSets } from '../../redux/actions/setsActions';

import SetCard from '../../components/SetCard';
import Pagination from '../../components/Pagination';
import styles from './Sets.styles';

const Sets = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state =>
    selectCurrentPageNumber(state, 'sets')
  );
  const page = useSelector(state => selectPage(state, currentPage, 'sets'));
  const sets = useSelector(selectSets);
  const goToPage = page => {
    dispatch(fetchSets({ page }));
  };
  useEffect(() => {
    goToPage(currentPage);
  }, []);

  return (
    <div css={styles}>
      <Pagination
        currentPage={currentPage}
        onNext={() => goToPage(currentPage + 1)}
        onPrevious={() => goToPage(currentPage - 1)}
      />
      <div className="sets">
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
