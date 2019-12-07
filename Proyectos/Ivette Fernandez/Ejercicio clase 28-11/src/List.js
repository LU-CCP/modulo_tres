import React from 'react';

import { sendLikes, sendDislikes } from './actions/list';

const List = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <h1>MENÚ</h1>
    <p>Like Count: {sendLikes}</p>
    <p>Dislike Count: {sendDislikes}</p>
    <div
      style={{
        width: 1000,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      {/* <button onClick={onIncrement}>Increment</button>
        <button onClick={onIncrementAsync} disabled={isIncrementing}>
          Increment Async
        </button> */}
      {/* <div>{likeMenus.map(renderItem)}</div>
      <div>{menus.map(renderMenu)}</div>
      <div>{dislikeMenus.map(renderItem)}</div> */}
    </div>
    {/* <div>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onDecrementAsync} disabled={isDecrementing}>
          Decrement Async
        </button>
      </div> */}
  </div>
);

export default List;
