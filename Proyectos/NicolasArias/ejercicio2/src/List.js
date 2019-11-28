import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sendLike, sendDislike } from './actions/list';

const List = () => {
  const dispatch = useDispatch();
  const { likes, dislikes, menu, menuLikes, menuDislikes } = useSelector(
    ({ list }) => list
  );

  const handleSendLike = useCallback(index => () => dispatch(sendLike(index)), [
    dispatch
  ]);

  const handleSendDislike = useCallback(
    index => () => dispatch(sendDislike(index)),
    [dispatch]
  );

  const renderLikes = () =>
    menuLikes.map(comida => (
      <div>
        <p>{comida}</p>
      </div>
    ));

  const renderDislikes = () =>
    menuDislikes.map(comida => (
      <div>
        <p>{comida}</p>
      </div>
    ));

  const renderMenu = () =>
    menu.map((comida, index) => (
      <div>
        <p>{comida}</p>
        <button onClick={handleSendLike(index)}>Like</button>
        <button onClick={handleSendDislike(index)}>Dislike</button>
      </div>
    ));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1>Menus</h1>
      <p>Likes: {likes}</p>
      <p>Dislikes: {dislikes}</p>
      <div>
        <p>menuLikes</p>
        {renderLikes()}
      </div>
      <div>
        <p>menuDislikes</p>
        {renderDislikes()}
      </div>
      <div>
        <p>menu</p>
        {renderMenu()}
      </div>
    </div>
  );
};

export default List;
