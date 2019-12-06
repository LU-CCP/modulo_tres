import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sendLike, sendDislike } from './custom/actions/list';

const List = () => {
  const dispatch = useDispatch();
  const { likes, dislikes } = useSelector(({ list }) => list);

  const handleSendLike = useCallback(index => () => dispatch(sendLike(index)), [
    dispatch
  ]);

  const handleSendDislike = useCallback(
    index => () => dispatch(sendDislike(index)),
    [dispatch]
  );

  return (
    <div>
      <h1>Menú de comidas</h1>
      <p>Like count: {likes}</p>
      <p>Dislike count: {dislikes}</p>
      <button onClick={handleSendLike(index)}>Like</button>
      <button onClick={handleSendDislike(index)}>Dislike</button>
    </div>
  );
};

export default List;
