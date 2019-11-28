import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import {} from './actions/list';

const List = () => (
  <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <h1>Menus</h1>
    <p>Like count:</p>
    <p>Dislike count:</p>
    {/* <div
      style={{
        width: 1000,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
        <div>{likesMenus.map(renderItem)}</div>
        <div>{menus.map(renderMenu)}</div>
        <div>{dislikesMenus.map(renderItem)}</div>
    </div> */}
  </div>
);

export default List;
