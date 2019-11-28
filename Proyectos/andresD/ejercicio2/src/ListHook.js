import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sendLike, sendDislike } from './actions/list';
import './App.css';

const ListHook = () => {
  const dispatch = useDispatch();
  const { likes, dislikes, menus, likeMenus, dislikeMenus } = useSelector(
    ({ list }) => list
  );

  const handleLike = useCallback(index => () => dispatch(sendLike(index)), [
    dispatch
  ]);

  const handleDislike = useCallback(
    index => () => dispatch(sendDislike(index)),
    [dispatch]
  );

  const renderMenu = () =>
    menus.map((comida, index) => (
      <div>
        <p>{comida}</p>
        <button onClick={handleLike(index)}>Like</button>
        <button onClick={handleDislike(index)}>Dislike</button>
      </div>
    ));

  const renderLike = () =>
    likeMenus.map(comida => (
      <div>
        <p>{comida}</p>
      </div>
    ));

  const renderDislike = () =>
    dislikeMenus.map(comida => (
      <div>
        <p>{comida}</p>
      </div>
    ));

  return (
    <div className='App'>
      <div className='ContenedorListas'>
        <h1>Menus</h1>
        <p>Likes: {likes}</p>
        <p>Dislikes: {dislikes}</p>

        <div className='ListaLikes'>
          Menu Likes <br />
          {renderLike()}
        </div>
        <div className='ListaBase'>{renderMenu()}</div>
        <div className='ListaDislikes'>
          Menu Dislikes <br />
          {renderDislike()}
        </div>
      </div>
    </div>
  );
};

export default ListHook;
