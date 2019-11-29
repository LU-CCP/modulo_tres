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
      onIncrementAsync,
      onDecrementAsync,
      isIncrementing,
      isDecrementing,
      onIncrement,
      onDecrement
    } = this.props;

    return (
      <div>
        <h1>Redux is Awesome!</h1>
        <p>Count: {count}</p>

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

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
  onIncrementAsync: () => {
    dispatch(incrementAsync());
    setTimeout(() => dispatch(increment()), 3000);
  },
  onDecrementAsync: () => {
    dispatch(decrementAsync());
    setTimeout(() => dispatch(decrement()), 3000);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
