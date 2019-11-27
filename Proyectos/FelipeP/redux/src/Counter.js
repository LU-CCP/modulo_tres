import React, { Component } from "react";
import { connect } from "react-redux";

import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync
} from "./native/actions/counter";

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
        <h1>Redux is awesome</h1>
        <p>Count: </p>
        <div>
          <button onClick={onIncrement}>Increment</button>
          <button disabled={isIncrementing} onClick={onIncrementAsync}>
            Increment Async
          </button>
        </div>
        <div>
          <button onClick={onDecrement}>Decrement</button>
          <button disabled={isDecrementing} onClick={onDecrementAsync}>
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
