import { combineReducers } from 'redux';

import counter from './counter';

function createRootReduce() {
  const rootReducer = combineReducers({ counter });

  return rootReducer;
}

export default createRootReduce;
