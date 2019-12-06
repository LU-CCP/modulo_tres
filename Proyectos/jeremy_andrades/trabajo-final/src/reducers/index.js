import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import users from './users';
import randomUsers from './randomUsers';

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ users, randomUsers, router });

  return rootReducer;
}

export default createRootReducer;
