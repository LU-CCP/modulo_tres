import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    increment: null,
    incrementAsync: null,
    decrement: null,
    decrementAsync: null
  },
  {
    prefix: 'COUNTER/'
  }
);

const { increment, incrementAsync, decrement, decrementAsync } = Creators;

const { INCREMENT, INCREMENT_ASYNC, DECREMENT, DECREMENT_ASYNC } = Types;

export {
  INCREMENT,
  INCREMENT_ASYNC,
  DECREMENT,
  DECREMENT_ASYNC,
  increment,
  incrementAsync,
  decrement,
  decrementAsync
};
