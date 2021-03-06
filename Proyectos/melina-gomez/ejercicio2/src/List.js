import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sendLikes, sendDislikes } from './actions/list';

const List = () => {
  const dispatch = useDispatch();
  const { menus, likeMenus, dislikeMenus, likes, dislikes } = useSelector(
    ({ list }) => list
  );

  const handleSendLikes = useCallback(
    index => () => dispatch(sendLikes(index)),
    [dispatch]
  );

  const handleSendDislikes = useCallback(
    index => () => dispatch(sendDislikes(index)),
    [dispatch]
  );

  const renderItem = pet => <p>{pet}</p>;

  const renderMenu = (pet, index) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 400
      }}
    >
      <p style={{ width: 300 }}>{pet}</p>
      <button onClick={handleSendLikes(index)}>Like</button>
      <button onClick={handleSendDislikes(index)}>Dislike</button>
    </div>
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1>Menus</h1>
      <p>Like count: {likes}</p>
      <p>Dislike count: {dislikes}</p>
      <div
        style={{
          width: 1000,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <div>{likeMenus.map(renderItem)}</div>
        <div>{menus.map(renderMenu)}</div>
        <div>{dislikeMenus.map(renderItem)}</div>
      </div>
    </div>
  );
};

export default List;
