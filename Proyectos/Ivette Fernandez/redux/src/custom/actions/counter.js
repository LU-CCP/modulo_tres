import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    increment: null,
    decrement: null,
    incrementAsync: null,
    decrementAsync: null
  },
  {
    prefix: 'COUNTER/'
  }
);

const { increment, decrement, incrementAsync, decrementAsync } = Creators;
const { INCREMENT, DECREMENT, INCREMENT_ASYNC, DECREMENT_ASYNC } = Types;

export {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  INCREMENT,
  INCREMENT_ASYNC,
  DECREMENT,
  DECREMENT_ASYNC
};
