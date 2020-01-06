import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import cambios from './cambios';

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ cambios, router });

  return rootReducer;
}

export default createRootReducer;
