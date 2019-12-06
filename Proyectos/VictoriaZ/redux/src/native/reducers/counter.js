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

// la primera vez cdo se levante viene como undefined

// acumular q mantiene el estado.cambiar uun objeto a traves del rducer, cdo se dispara la accion entra al reducer, cambia el estado y lo devuelve
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state, // clonar las propiedades del estado
        count: state.count + 1, // cambiar solamente las propiedades q quiero, cambio el count y isincrementing. isDecrementing se mantiene igual
        isIncrementing: false
      };
    case INCREMENT_ASYNC:
      return {
        ...state,
        isIncrementing: true
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: false
      };
    case DECREMENT_ASYNC:
      return {
        ...state,
        isDecrementing: true
      };
    default:
      return state;
  }
};

export default reducer;
// recomendable un reduces por pantalla que se esta mostrando
