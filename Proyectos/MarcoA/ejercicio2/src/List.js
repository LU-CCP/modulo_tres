import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sendLikes, sendDislikes } from './actions/list';

const List = () => {
  const dispatch = useDispatch();

  const {
    likes,
    dislikes,
    arrayLikes,
    arrayDislikes,
    arrayMedio
  } = useSelector(({ list }) => list);

  const handleLikes = useCallback(index => () => dispatch(sendLikes(index)), [
    dispatch
  ]);

  const handleDislikes = useCallback(
    index => () => dispatch(sendDislikes(index)),
    [dispatch]
  );

  const menuMap = () =>
    arrayMedio.map((menu, index) => {
      console.log(index);

      return (
        <div key={menu}>
          {menu}
          <button onClick={handleLikes(index)}>Like</button>
          <button onClick={handleDislikes(index)}>Dislike</button>
        </div>
      );
    });

  const menuAcceptMap = () =>
    arrayLikes.map(menu => <div key={menu}>{menu}</div>);

  const menuDenyMap = () =>
    arrayDislikes.map(menu => <div key={menu}>{menu}</div>);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div style={{ border: 'solid' }}>
        <h1>Comida aceptada</h1>
        {menuAcceptMap()}
      </div>
      <div style={{ border: 'solid' }}>
        <h1>Elije tu comida</h1>
        <p>Likes: {likes}</p>
        <p>Dislikes: {dislikes}</p>
        {menuMap()}
      </div>
      <div style={{ border: 'solid' }}>
        <h1>Comida rechazada</h1>
        {menuDenyMap()}
      </div>
    </div>
  );
};

export default List;
