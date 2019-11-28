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
      isIncrementing,
      isDescremeting,
      onIncrement,
      onIncrementAsync,
      onDecrement,
      onDecrementAsync
    } = this.props;

    return (
      <div>
        <h1>V-I-R-G-I-N-I-O big F!</h1>
        <p>Count: {count}</p>
        <div>
          <button onClick={onIncrement}>Increment</button>
          <button onClick={onIncrementAsync} disabled={isIncrementing}>
            Increment Async
          </button>
        </div>
        <div>
          <button onClick={onDecrement}>Decrement</button>
          <button onClick={onDecrementAsync} disabled={isDescremeting}>
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
  isDescremeting: counter.isDescremeting
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onIncrementAsync: () => {
    dispatch(incrementAsync());
    setTimeout(() => dispatch(increment()), 3000);
  },
  onDecrement: () => dispatch(decrement()),
  onDecrementAsync: () => {
    dispatch(decrementAsync());
    setTimeout(() => dispatch(decrement()), 3000);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
