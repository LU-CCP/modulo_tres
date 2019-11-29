import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  increment,
  decrement,
<<<<<<< HEAD
  decrementAsynt,
  incrementAsync
=======
  incrementAsync,
  decrementAsync
>>>>>>> master
} from './native/actions/counter';

class Counter extends Component {
  render() {
    const {
      count,
      isIncrementing,
      isDecrementing,
      onIncrement,
<<<<<<< HEAD
      onDecrement,
      onIncrementAsync,
=======
      onIncrementAsync,
      onDecrement,
>>>>>>> master
      onDecrementAsync
    } = this.props;

    return (
      <div>
        <h1>Redux is awesome</h1>
<<<<<<< HEAD
        <p>Count:{count}</p>
        <div>
          <button onClick={onIncrement}>{onIncrement}Increment</button>
=======
        <p>Count: {count}</p>
        <div>
          <button onClick={onIncrement}>Increment</button>
>>>>>>> master
          <button onClick={onIncrementAsync} disabled={isIncrementing}>
            Increment Async
          </button>
        </div>
        <div>
          <button onClick={onDecrement}>Decrement</button>
          <button onClick={onDecrementAsync} disabled={isDecrementing}>
            Decrement Async
          </button>
        </div>
      </div>
    );
  }
}
<<<<<<< HEAD
=======

>>>>>>> master
const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onIncrementAsync: () => {
    dispatch(incrementAsync());
    setTimeout(() => dispatch(increment()), 3000);
  },
  onDecrement: () => dispatch(decrement()),
  onDecrementAsync: () => {
<<<<<<< HEAD
    dispatch(decrementAsynt());
=======
    dispatch(decrementAsync());
>>>>>>> master
    setTimeout(() => dispatch(decrement()), 3000);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
