import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SkipPrevious } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

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
  const { attacks } = card;
  return (
    <div css={styles}>
      <Link className="backLink" to={`/cards/${setId}`}>
        <SkipPrevious fontSize="large" color="primary" />
      </Link>
      <div className="card">
        <img src={card.imageUrl} />
        <div className="details">
          <div className="name">
            <Typography variant="h2" color="primary">
              {card.name}
            </Typography>
            <Typography className="type" variant="h2" color="secondary">
              {card.supertype} {card.subtype && ` -  ${card.subtype}`}
            </Typography>
          </div>
          {attacks && (
            <div className="attacks">
              {attacks.map(attack => (
                <div key={attack.name} className="attack">
                  <Typography>
                    {attack.name} | {attack.damage}
                  </Typography>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
