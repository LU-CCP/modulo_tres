import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync
} from './native/actions/counter';

class Counter extends Component {
  render() {
    const {
      count,
      isDecrementing,
      isIncrementing,
      onDecrement,
      onDecrementAsync,
      onIncrement,
      onIncrementAsync
    } = this.props;

    return (
      <div>
        <h1>UwU</h1>
        <p>Contador: {count}</p>
        <div>
          <button onClick={onIncrement}>Increment</button>
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

const mapStateToProp = ({ counter }) => ({
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
  onDecrementAsync: () => {
    dispatch(decrementAsync());
    setTimeout(() => dispatch(decrement()), 3000);
  },
  onDecrement: () => dispatch(decrement())
});

export default connect(mapStateToProp, mapDispatchToProps)(Counter);
