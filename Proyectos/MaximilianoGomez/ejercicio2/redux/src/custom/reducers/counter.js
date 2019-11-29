import { createReducer } from 'reduxsauce';
import produce from 'immer';

import {
  INCREMENT,
  INCREMENT_ASYNC,
  DECREMENT,
  DECREMENT_ASYNC
} from '../actions/counter';

const INITIAL_STATE = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

const increment = produce(draft => {
  draft.count += 1;
  draft.isIncrementing = false;
});

const incrementAsync = produce(draft => {
  draft.isIncrementing = true;
});

const decremnent = produce(draft => {
  // draft.count = draft.count - 1;
  draft.count -= 1;
  draft.isDecrementing = false;
});

const decremnentAsync = produce(draft => {
  draft.isDecrementing = true;
});

const reducer = createReducer(INITIAL_STATE, {
  [INCREMENT]: increment,
  [INCREMENT_ASYNC]: incrementAsync,
  [DECREMENT]: decremnent,
  [DECREMENT_ASYNC]: decremnentAsync
});

export default reducer;