import { createActions } from 'reduxsauce';

import { INCREMENT } from '../actions/counter';

const INITIAL_STATE = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

const increment = state => ({
  ...state,
  count: state.count + 1,
  isIncrementing: false
});

const reducer = createActions(INITIAL_STATE, {
  [INCREMENT]: increment
});

export default reducer;
