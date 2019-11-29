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
