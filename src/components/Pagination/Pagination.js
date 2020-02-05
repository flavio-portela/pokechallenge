// @flow
import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import styles from './Pagination.styles';

type Props = {|
  onNext: Function,
  onPrevious: Function,
  currentPage: number
|};

const Pagination = (props: Props) => {
  const { currentPage } = props;
  return (
    <div css={styles}>
      <Button
        color="secondary"
        size="large"
        variant="contained"
        onClick={props.onPrevious}>
        <ArrowBack />
      </Button>
      <Typography className="page" variant="overline">
        {currentPage}
      </Typography>
      <Button
        color="secondary"
        size="large"
        variant="contained"
        onClick={props.onNext}>
        <ArrowForward />
      </Button>
    </div>
  );
};

export default Pagination;
