const INCREMENT = 'COUNTER/INCREMENT';
const INCREMENT_ASYINC = 'COUNTER/INCREMENT/ASYNC';
const DECREMENT = 'COUNTER/DECREMENT';
const DECREMENT_ASYINC = 'COUNTER/DECREMENT/ASYNC';

const increment = () => ({
  type: INCREMENT
});

const incrementAsync = () => ({
  type: INCREMENT_ASYINC
});
const decrement = () => ({
  type: DECREMENT
});

const decrementAsync = () => ({
  type: DECREMENT_ASYINC
});

export {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  INCREMENT,
  INCREMENT_ASYINC,
  DECREMENT,
  DECREMENT_ASYINC
};
