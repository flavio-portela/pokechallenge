// @flow
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import { selectCards } from '../../redux/reducers/cards';
import { fetchCards } from '../../redux/actions/cardsActions';
import {
  selectPage,
  selectCurrentPageNumber
} from '../../redux/reducers/pagination';
import styles from './Cards.styles';

const Cards = () => {
  const dispatch = useDispatch();
  const { setId } = useParams();
  const paginationSearchKey = `cards-${setId}`;
  const currentPage = useSelector(state =>
    selectCurrentPageNumber(state, paginationSearchKey)
  );
  const page = useSelector(state =>
    selectPage(state, currentPage, paginationSearchKey)
  );
  const cards = useSelector(selectCards);

  const goToPage = page => {
    dispatch(
      fetchCards({
        page,
        setCode: setId
      })
    );
  };

  useEffect(() => {
    goToPage(currentPage);
  }, []);

  return (
    <div css={styles}>
      <Pagination
        currentPage={currentPage}
        onPrevious={() => {
          goToPage(currentPage - 1);
        }}
        onNext={() => {
          goToPage(currentPage + 1);
        }}
      />
      <div className="cards">
        {page &&
          page.ids &&
          page.ids.map(id => {
            return <Card key={id} card={cards[id]} />;
          })}
      </div>
    </div>
  );
};

export default Cards;
