const INCREMENT = 'COUNTER/INCREMENT';
const INCREMENT_ASYNC = 'COUNTER/INCREMENT_ASYNC';
const DECREMENT = 'COUNTER/DECREMENT';
const DECREMENT_ASYNC = 'COUNTER/DECREMENT_ASYNC';

const increment = () => ({
  type: INCREMENT
});

const incrementAsync = () => ({
  type: INCREMENT_ASYNC
});

const decrement = () => ({
  type: DECREMENT
});

const decrementAsync = () => ({
  type: DECREMENT_ASYNC
});

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
