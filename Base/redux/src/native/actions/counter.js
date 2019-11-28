const INCREMENT = 'COUNTER/INCEMENT';
const INCREMENT_ASYNC = 'COUNTER/INCEMENT_ASYNC';
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
const decrementAsynt = () => ({
  type: DECREMENT_ASYNC
});

export {
  increment,
  incrementAsync,
  decrement,
  decrementAsynt,
  INCREMENT,
  INCREMENT_ASYNC,
  DECREMENT,
  DECREMENT_ASYNC
};
