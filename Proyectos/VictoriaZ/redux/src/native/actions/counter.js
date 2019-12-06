// debe tener el mismo nombre q el reducers

// DEBEN SER UNICOS
const INCREMENT = 'COUNTER/INCREMENT'; // counter prefijo
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

// Para acceder a ellas con destructuring dp
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
