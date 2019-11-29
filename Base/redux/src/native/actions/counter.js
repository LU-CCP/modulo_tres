<<<<<<< HEAD
const INCREMENT = 'COUNTER/INCEMENT';
const INCREMENT_ASYNC = 'COUNTER/INCEMENT_ASYNC';
=======
const INCREMENT = 'COUNTER/INCREMENT';
const INCREMENT_ASYNC = 'COUNTER/INCREMENT_ASYNC';
>>>>>>> master
const DECREMENT = 'COUNTER/DECREMENT';
const DECREMENT_ASYNC = 'COUNTER/DECREMENT_ASYNC';

const increment = () => ({
  type: INCREMENT
});

const incrementAsync = () => ({
  type: INCREMENT_ASYNC
});
<<<<<<< HEAD
const decrement = () => ({
  type: DECREMENT
});
const decrementAsynt = () => ({
=======

const decrement = () => ({
  type: DECREMENT
});

const decrementAsync = () => ({
>>>>>>> master
  type: DECREMENT_ASYNC
});

export {
  increment,
  incrementAsync,
  decrement,
<<<<<<< HEAD
  decrementAsynt,
=======
  decrementAsync,
>>>>>>> master
  INCREMENT,
  INCREMENT_ASYNC,
  DECREMENT,
  DECREMENT_ASYNC
};
