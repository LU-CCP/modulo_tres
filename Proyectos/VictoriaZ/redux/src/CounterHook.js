import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync
} from './custom/actions/counter';

// los map del otro Counter.js/ useSelector es lo mismo que el mapStateProps
const CounterHook = () => {
  const dispatch = useDispatch();
  const { count, isIncrementing, isDecrementing } = useSelector(
    ({ counter }) => counter
  );
  const handleIncrement = useCallback(() => dispatch(increment()), [dispatch]); // se activa solo cuando hay un cambio
  const handleDecrement = useCallback(() => dispatch(decrement()), [dispatch]); // equivalentes al onIncrement onDecrement

  const handleIncrementAsync = useCallback(() => {
    dispatch(incrementAsync);
    setTimeout(handleIncrement, 3000);
  }, [dispatch, handleIncrement]);
  const handleDecrementAsync = useCallback(() => {
    dispatch(decrementAsync);
    setTimeout(handleDecrement, 3000);
  }, [dispatch, handleDecrement]);

  return (
    <div>
      <h1>Redux is awesome</h1>
      <p>Count: {count}</p>
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
