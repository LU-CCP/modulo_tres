import { combineReducers } from 'redux';
import counter from './counter';

function createRootReducer() {
  const rootReducer = combineReducers({ counter });

  return rootReducer;
}

export default createRootReducer;
