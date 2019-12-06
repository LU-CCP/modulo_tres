import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  // se definen las acciones y automaticamente las crea y los parametros tb
  {
    increment: null, // los parametros se pasan con ['','']
    incrementAsync: null,
    decrement: null,
    decrementAsync: null
  },
  {
    prefix: 'COUNTER/'
  }
);

const { increment, decrement, incrementAsync, decrementAsync } = Creators;

const { INCREMENT, DECREMENT, INCREMENT_ASYNC, DECREMENT_ASYNC } = Types; // cada constante va a ser el mismo nombre de la funcion en mayúscula, la capitalizacion se cambia por un _

export {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  INCREMENT,
  DECREMENT,
  INCREMENT_ASYNC,
  DECREMENT_ASYNC
};
