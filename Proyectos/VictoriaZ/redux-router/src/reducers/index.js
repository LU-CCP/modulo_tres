import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import counter from './counter';

function createRootReducer(history) {
  // history viene del store.js
  const router = connectRouter(history);
  const rootReducer = combineReducers({ router, counter });

  return rootReducer;
}

export default createRootReducer;
