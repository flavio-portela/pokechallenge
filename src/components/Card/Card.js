// @flow
import React from 'react';
import styles from './Card.styles';
type Props = {
  card: any
};

const Card = (props: Props) => {
  const { card } = props;
  return (
    <div css={styles}>
      <img src={card.imageUrl} alt="Card image" />
    </div>
  );
};

export default Card;
