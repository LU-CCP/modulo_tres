import { combineReducers } from 'redux'; // junta el resultado o combina el resultado de otras funciones reductoras

import list from './list';

function createRootReducer() {
  const rootReducer = combineReducers({ list });

  return rootReducer;
}

export default createRootReducer;
