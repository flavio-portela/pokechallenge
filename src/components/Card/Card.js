// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.styles';

type Props = {
  card: PokeCard
};

const Card = (props: Props) => {
  const { card } = props;
  return (
    <Link css={styles} to={`/card/${card.id}`}>
      <img src={card.imageUrl} alt="Card image" />
    </Link>
  );
};

export default Card;
