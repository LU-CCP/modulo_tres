import { createReducer } from 'reduxsauce'; // crea solo el reducer
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

// const increment2 = state => ({
//   ...state, // clonar las propiedades del estado
//   count: state.count + 1, // cambiar solamente las propiedades q quiero, cambio el count y isincrementing. isDecrementing se mantiene igual
//   isIncrementing: false
// });

const increment = produce(draft => {
  // equivalente al increment2, draft es una copia del estado, si hay un error no se ve afectado. Concepto inmutabilidad
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

// estado inicial, handles
const reducer = createReducer(INITIAL_STATE, {
  [INCREMENT]: increment, // switch con native
  [INCREMENT_ASYNC]: incrementAsync,
  [DECREMENT]: decrement,
  [DECREMENT_ASYNC]: decrementAsync
});

export default reducer;
