import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  increment,
  decrement,
<<<<<<< HEAD
  decrementAsync,
  incrementAsync
} from './Custom/actions/counter';

const CounterHook = () => {
  const dispatch = useDispatch();

  const { count, isIncrementing, isDecrementing } = useSelector(
    ({ counter }) => counter
  );

  const handleIncrement = useCallback(() => dispatch(increment()), [dispatch]);

  const handleDecrement = useCallback(() => dispatch(decrement()), [dispatch]);

=======
  incrementAsync,
  decrementAsync
} from './custom/actions/counter';

const CounterHook = () => {
  const dispatch = useDispatch();
  // El useSelector es lo mismo que el mapStateToProps
  const { count, isIncrementing, isDecrementing } = useSelector(
    ({ counter }) => counter
  );
  // El equivalente a la linea 51 de Counter onIncrement: () => dispatch(increment())
  const handleIncrement = useCallback(() => dispatch(increment()), [dispatch]);
  // El equivalente a la linea 56 de Counter onDecrement: () => dispatch(decrement())
  const handleDecrement = useCallback(() => dispatch(decrement()), [dispatch]);
  // El equivalente a la linea 53 de Counter  dispatch(incrementAsync())...
>>>>>>> master
  const handleIncrementAsync = useCallback(() => {
    dispatch(incrementAsync());
    setTimeout(handleIncrement, 3000);
  }, [dispatch, handleIncrement]);
<<<<<<< HEAD

=======
  // El equivalente a la linea 58 de Counter  dispatch(decrementAsync())...
>>>>>>> master
  const handleDecrementAsync = useCallback(() => {
    dispatch(decrementAsync());
    setTimeout(handleDecrement, 3000);
  }, [dispatch, handleDecrement]);

  return (
    <div>
      <h1>Redux is awesome</h1>
<<<<<<< HEAD
      <p>Count:{count}</p>
=======
      <p>Count: {count}</p>
>>>>>>> master
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
