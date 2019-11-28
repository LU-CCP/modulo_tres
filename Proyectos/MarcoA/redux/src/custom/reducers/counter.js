import { createReducer } from 'reduxsauce';
/*
import {
  INCREMENT,
  INCREMENT_ASYNC,
  DECREMENT,
  DECREMENT_ASYNC
} from '../actions/counter';
*/

const INITIAL_STATE = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

const reducer = createReducer(INITIAL_STATE, {});

/*
const increment = state => ({
  ...state,
  count: state.count + 1,
  isIncrementing: false
});
*/

export default reducer;
