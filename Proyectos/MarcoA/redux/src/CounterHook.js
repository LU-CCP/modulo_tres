import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from './custom/actions/counter';

const CounterHook = () => {
  const dispatch = useDispatch();

  const { count, isDecrementing, isIncrementing } = useSelector(
    ({ counter }) => counter
  );

  const handleIncrement = useCallback(() => dispatch(increment()), [dispatch]);

  const handleDecrement = useCallback(() => dispatch(decrement()), [dispatch]);

  const handleIncrementAsync = useCallback(() => {
    dispatch(incrementAsync());
    setTimeout(handleIncrement, 3000);
  }, [dispatch, handleIncrement]);

  const handleDecrementAsync = useCallback(() => {
    dispatch(decrementAsync());
    setTimeout(handleDecrement, 3000);
  }, [dispatch, handleDecrement]);

  return (
    <div>
      <h1>UwU</h1>
      <p>Contador: {count}</p>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrementAsync} disabled={isIncrementing}>
          Increment Async
        </button>
      </div>
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleDecrementAsync} disabled={isDecrementing}>
          Decrement Async
        </button>
      </div>
    </div>
  );
};

export default CounterHook;
