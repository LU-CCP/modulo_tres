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
      isDecrementing,
      onIncrement,
      onDecrement,
      onIncrementAsync,
      onDecrementAsync
    } = this.props;

    return (
      <div>
        <h1>Redux is Awesome</h1>
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

  onIncrementAsync: () => {
    setTimeout(() => {
      dispatch(incrementAsync());
    }, 3000);
  },

  onDecrement: () => dispatch(decrement()),

  onDecrementAsync: () => {
    setTimeout(() => {
      dispatch(decrementAsync());
    }, 3000);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
