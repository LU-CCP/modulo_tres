import { combineReducers } from 'redux';

import counter from './counter';

function createRootReducer() {
  const RootReducer = combineReducers({ counter });

  return RootReducer;
}

export default createRootReducer;
