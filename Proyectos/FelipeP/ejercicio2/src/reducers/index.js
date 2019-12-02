import { combineReducers } from 'redux';

import list from './list';

console.log('hola');

function createRootReducer() {
  const rootReducer = combineReducers({ list });

  return rootReducer;
}

export default createRootReducer;
