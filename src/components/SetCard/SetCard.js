// @flow
import React from 'react';
import styles from './SetCard.styles';

type Props = {
  set: PokeSet,
  className?: string
};

const SetCard = ({ set, className }: Props) => {
  return (
    <div className={className} css={styles}>
      <div className="logo">
        <img src={set.logoUrl} alt={`Image for the set ${set.code}`} />
      </div>
      <div className="content">
        <img src={set.symbolUrl} alt="Symbol" />
        <div className="name">
          <h3>{set.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default SetCard;
