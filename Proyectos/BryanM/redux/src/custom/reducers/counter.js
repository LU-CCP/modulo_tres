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
  isIncremeating: false,
  isDecremeating: false
};

const increment = produce(draft => {
  draft.count += 1;
  draft.isIncremeating = false;
});

const incrementAsync = produce(draft => {
  draft.isIncremeating = true;
});

const decrement = produce(draft => {
  draft.count -= 1;
  draft.isDecremeating = false;
});

const decrementAsync = produce(draft => {
  draft.isDecremeating = true;
});

const reducer = createReducer(INITIAL_STATE, {
  [INCREMENT]: increment,
  [INCREMENT_ASYNC]: incrementAsync,
  [DECREMENT]: decrement,
  [DECREMENT_ASYNC]: decrementAsync
});

export default reducer;
