import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sendLike, sendDislike } from './actions/list';

const List = () => {
  const dispatch = useDispatch();
  const { like, dislike, menu, menuLike, menuDislike } = useSelector(
    ({ list }) => list
  );

  const handleSendLike = useCallback(index => () => dispatch(sendLike(index)), [
    dispatch
  ]);
  const handleSendDislike = useCallback(
    index => () => dispatch(sendDislike(index)),
    [dispatch]
  );

  const renderMenu = () =>
    menu.map((menus, index) => (
      <div
        key={menus}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '400'
        }}
      >
        <p style={{ width: 300 }}>{menus}</p>
        <button onClick={handleSendLike(index)}> Like</button>
        <button onClick={handleSendDislike(index)}> Dislike</button>
      </div>
    ));

  const renderMenuLike = () =>
    menuLike.map(menus => <div key={menus}>{menus}</div>);

  const renderMenuDislike = () =>
    menuDislike.map(menus => <div key={menus}>{menus}</div>);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div style={{ width: 600 }}>
        <fieldset>
          <h1> Menús</h1>

          {renderMenu()}
        </fieldset>
        <fieldset>
          <p1>Contador Like {like} </p1>
          <div>
            <p1>Contador Dislike {dislike} </p1>
          </div>
        </fieldset>
      </div>
      <div>
        <fieldset style={{ float: 'left', width: 270 }}>
          <h1>Menu Like</h1>
          {renderMenuLike()}
        </fieldset>
        <fieldset style={{ float: 'right', width: 270 }}>
          <h1>Menu Dislike</h1>
          {renderMenuDislike()}
        </fieldset>
      </div>
    </div>
  );
};

export default List;
