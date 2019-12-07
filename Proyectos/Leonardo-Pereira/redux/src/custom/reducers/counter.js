import { createReducer } from 'reduxsauce';
import produce from 'immer';

import {
  INCREMENT,
  INCREMENT_ASYNC,
  DECREMENT,
  DECREMENT_ASYNC
} from '../action/counter';

const INITIAL_SATE = {
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

const decrement = produce(draft => {
  draft.count -= 1;
  draft.isDecrementing = false;
});

const decrementAsync = produce(draft => {
  draft.isDecrementing = true;
});

const reducer = createReducer(INITIAL_SATE, {
  [INCREMENT]: increment,
  [INCREMENT_ASYNC]: incrementAsync,
  [DECREMENT]: decrement,
  [DECREMENT_ASYNC]: decrementAsync
});

export default reducer;
