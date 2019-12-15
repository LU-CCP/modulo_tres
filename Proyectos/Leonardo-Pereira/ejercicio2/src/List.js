// ACA DEFINIMOS LAS FUNCIONES DE RENDERIZADO
import React, { useCallback } from 'react'; // callback, primero se ejecuta la funcion principal y despues la funcion que se pasa como parametro
import { useDispatch, useSelector } from 'react-redux'; // dispatch envia acciones, useSelecetor extrae datos del estado de la tienda redux

import { sendLike, sendDislike } from './actions/list'; // importamos nuestras acciones del objeto  Creators

const List = () => {
  // creamos nuestro componente
  const dispatch = useDispatch(); // se define dispatch para enviar acciones
  const { menus, likeMenus, dislikeMenus, likes, dislikes } = useSelector(
    // destructuramos los elementos desde la tienda redux
    ({ list }) => list
  );

  const handleSendLike = useCallback(index => () => dispatch(sendLike(index)), [
    dispatch
  ]);

  const handleSendDislike = useCallback(
    index => () => dispatch(sendDislike(index)),
    [dispatch]
  );

  const renderItem = menu => <p>{menu}</p>;

  const renderMenu = (menu, index) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 400
      }}
    >
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
    </div>
  );
};

export default List;
