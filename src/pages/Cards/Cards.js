// @flow
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import Card from '../../components/Card';
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

  useEffect(() => {
    dispatch(fetchCards({ page: 1, setCode: setId }));
  }, []);

  return (
    <div css={styles}>
      <div>
        <button
          onClick={() => {
            dispatch(fetchCards({ page: currentPage - 1, setCode: setId }));
          }}>
          Previous
        </button>
        <button
          onClick={() => {
            dispatch(fetchCards({ page: currentPage + 1, setCode: setId }));
          }}>
          Next
        </button>
      </div>
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
