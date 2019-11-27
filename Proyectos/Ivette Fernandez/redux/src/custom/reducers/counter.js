import { createReducer } from 'reduxsauce';

import {
  INCREMENT,
  // eslint-disable-next-line no-unused-vars
  INCREMENT_ASYNC,
  // eslint-disable-next-line no-unused-vars
  DECREMENT,
  // eslint-disable-next-line no-unused-vars
  DECREMENT_ASYNC
} from '../actions/counter';

const INITIAL_STATE = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

const increment = state => ({
  ...state,
  count: state.cout + 1,
  isIncrementing: false
});

const reducer = createReducer(INITIAL_STATE, {
  [INCREMENT]: increment
});

export default reducer;
