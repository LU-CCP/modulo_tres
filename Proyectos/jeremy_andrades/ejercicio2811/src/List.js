import React from 'react';

import { like, dislike } from './actions/list';

const List = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <h1>Menu</h1>
    <p>Like Count: {like}</p>
    <p>Dislike Count: {dislike}</p>
    <div
      style={{
        width: 1000,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      {/* <div>{MenuLike.map(renderItem)}</div>
      <div>{menus.map(renderItem)}</div>
      <div>{MenuDislike.map(renderItem)}</div> */}
    </div>
  </div>
);

export default List;
