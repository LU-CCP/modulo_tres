import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement } from '../actions/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(({ counter }) => counter);

  const handleIncrement = useCallback(() => dispatch(increment()), [dispatch]);

  const handleDecrement = useCallback(() => dispatch(decrement()), [dispatch]);

  return (
    <div>
      <h1>Redux is awesome</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
