import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { INCREMENT, INCREMENT2 } from '../actions/list';

const INITIAL_STATE = {
  arrayNormal: ['Camotes', 'Pizzas', 'Cecilias', 'DDHH', 'KpuchAs'],
  normalYummys: [],
  normalYucks: [],
  count: 0,
  count2: 0,
  isIncrementing: false,
  isIncrementing2: false
};

const increment = produce((draft, { index }) => {
  draft.count += 1;
  draft.normalYummys;
  draft.isIncrementing = false;
});
const increment2 = produce(draft => {
  draft.count2 += 1;
  draft.isIncrementing2 = false;
});

const reducer = createReducer(INITIAL_STATE, {
  [INCREMENT]: increment,
  [INCREMENT2]: increment2
});

export default reducer;
