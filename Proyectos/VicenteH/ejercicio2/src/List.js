import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment, increment2 } from './actions/list';

const List = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(({ list }) => list);
  const { count2 } = useSelector(({ list }) => list);
  const handleIncrement = useCallback(() => dispatch(increment()), [dispatch]);
  const handleIncrement2 = useCallback(() => dispatch(increment2()), [
    dispatch
  ]);

  return (
    <div>
      <h1>Menu de comida con N O R M A L I D A D</h1>
      <p>Yummys: {count} </p>
      <p>Yucks: {count2} </p>
      <div>
        <button onClick={handleIncrement}>Yummys</button>
      </div>
      <div>
        <button onClick={handleIncrement2}>Yucks</button>
      </div>
    </div>
  );
};

export default List;
