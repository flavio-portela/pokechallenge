import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCard } from '../../redux/reducers/cards';
import { fetchCard } from '../../redux/actions/cardsActions';
import styles from './Card.styles';

const Card = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const card = useSelector(state => selectCard(state, id));
  
  useEffect(() => {
    dispatch(fetchCard({ id }));
  }, []);
  
  if (!card) {
    return null;
  }
  return (
    <div css={styles}>
      <img src={card.imageUrl} />
      <code>{JSON.stringify(card)}</code>
    </div>
  );
};

export default Card;
