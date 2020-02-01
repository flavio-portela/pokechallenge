// @flow
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSets } from '../../redux/actions/setsActions';

const Sets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSets({ page: 1 }));
  }, []);

  return (
    <div>
      <h1>This is a list of sets</h1>
    </div>
  );
};

export default Sets;
