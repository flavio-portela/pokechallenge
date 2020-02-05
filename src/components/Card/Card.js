// @flow
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Card.styles';

type Props = {
  card: PokeCard
};

const Card = (props: Props) => {
  const { setId } = useParams();
  const { card } = props;
  return (
    <Link css={styles} to={`/cards/${setId}/${card.id}`}>
      <img src={card.imageUrl} alt="Card image" />
    </Link>
  );
};

export default Card;
