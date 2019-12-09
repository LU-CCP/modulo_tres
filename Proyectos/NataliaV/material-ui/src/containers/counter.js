import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { ROOT } from '../routes/paths';

const Counter = () => {
  const dispatch = useDispatch();

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <div>
      <h1>USERS</h1>
      <button
        style={{ backgroundColor: 'green' }}
        onClick={handleNavigate(ROOT)}
      >
        VOLVER
      </button>
    </div>
  );
};

export default Counter;
