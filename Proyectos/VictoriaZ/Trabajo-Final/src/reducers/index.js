import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import home from './home';

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ home, router });

  return rootReducer;
}

export default createRootReducer;
