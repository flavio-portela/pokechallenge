import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SkipPrevious } from '@material-ui/icons';

import { selectCard } from '../../redux/reducers/cards';
import { fetchCard } from '../../redux/actions/cardsActions';
import styles from './Card.styles';

const Card = () => {
  const dispatch = useDispatch();
  const { id, setId } = useParams();
  const card = useSelector(state => selectCard(state, id));

  useEffect(() => {
    dispatch(fetchCard({ id }));
  }, []);

  if (!card) {
    return null;
  }
  return (
    <div css={styles}>
      <Link className="backLink" to={`/cards/${setId}`}>
        <SkipPrevious fontSize="large" color="primary" />
      </Link>
      <div>
        <img src={card.imageUrl} />
        <code>{JSON.stringify(card)}</code>
      </div>
    </div>
  );
};

export default Card;
