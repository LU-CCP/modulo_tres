import { combineReducers } from 'redux';

import list from './list';

function createRootReducer() {
  const rootReducer = combineReducers({ list });

  return rootReducer;
}

export default createRootReducer;
