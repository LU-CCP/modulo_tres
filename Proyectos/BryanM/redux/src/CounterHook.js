import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync
} from './custom/actions/counter';

const CounterHook = () => {
  const dispatch = useDispatch();
  // El useSelector es lo mismo que el mapStateToProps
  const { count, isIncrementing, isDescremeting } = useSelector(
    ({ counter }) => counter
  );

  // El equivalente a la linea 51 de Counter = onIncrement: () => dispatch(increment()),
  const handleIncrement = useCallback(() => dispatch(increment()), [dispatch]);

  // El equivalente a la linea 56 de Counter = onDecrement: () => dispatch(decrement()),
  const handleDecrement = useCallback(() => dispatch(decrement()), [dispatch]);

  // El equivalente a la linea 53 de Counter = dispatch(incrementAsync())...
  const handleIncrementAsync = useCallback(() => {
    dispatch(incrementAsync);
    setTimeout(handleIncrement, 3000);
  }, [dispatch, handleIncrement]);

  // El equivalente a la linea 58 de Counter = dispatch(decrementAsync())...
  const handleDecrementAsync = useCallback(() => {
    dispatch(decrementAsync);
    setTimeout(handleDecrement, 3000);
  }, [dispatch, handleDecrement]);

  return (
    <div>
      <h1>V-I-R-G-I-N-I-O big F!</h1>
      <p>Count: {count}</p>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrementAsync} disabled={isIncrementing}>
          Increment Async
        </button>
      </div>
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleDecrementAsync} disabled={isDescremeting}>
          Decrement Async
        </button>
      </div>
    </div>
  );
};

export default CounterHook;
