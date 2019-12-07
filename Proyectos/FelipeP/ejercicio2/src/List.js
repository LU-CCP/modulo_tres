import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

<<<<<<< HEAD
import { sendLike, sendDislike } from './custom/actions/list';

const List = () => {
  const dispatch = useDispatch();
  const { likes, dislikes } = useSelector(({ list }) => list);
=======
import { sendLike, sendDislike } from './actions/list';
import './custom.css';

const List = () => {
  const dispatch = useDispatch();
  const { menus, likeMenus, dislikeMenus, likes, dislikes } = useSelector(
    ({ list }) => list
  );
>>>>>>> eec3be26ef71ea660c72eeacdc52037dd80db725

  const handleSendLike = useCallback(index => () => dispatch(sendLike(index)), [
    dispatch
  ]);

  const handleSendDislike = useCallback(
    index => () => dispatch(sendDislike(index)),
    [dispatch]
  );

<<<<<<< HEAD
  return (
    <div>
      <h1>Menú de comidas</h1>
      <p>Like count: {likes}</p>
      <p>Dislike count: {dislikes}</p>
      <button onClick={handleSendLike(index)}>Like</button>
      <button onClick={handleSendDislike(index)}>Dislike</button>
=======
  const renderItem = menu => <p>{menu}</p>;

  const renderMenu = (menu, index) => (
    <div className='div-foods'>
      <p style={{ width: 300 }}>{menu}</p>
      <button onClick={handleSendLike(index)}>Like</button>
      <button onClick={handleSendDislike(index)}>Dislike</button>
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
>>>>>>> eec3be26ef71ea660c72eeacdc52037dd80db725
    </div>
  );
};

export default List;
