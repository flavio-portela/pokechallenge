// @flow
import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './SetCard.styles';

type Props = {
  set: PokeSet,
  className?: string
};

const SetCard = ({ set, className }: Props) => {
  const history = useHistory();
  return (
    <div className={className} css={styles} onClick={() => { history.push(`/cards/${set.code}`)}}>
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
