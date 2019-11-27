import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from './native/actions/counter';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>UwU</h1>
        <p>Contador:</p>
        <div>
          <button>Increment</button>
          <button>Increment Async</button>
        </div>
        <div>
          <button>Decrement</button>
          <button>Decrement Async</button>
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

const mapDispatchToPros = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement())
});

export default connect(mapStateToProp, mapDispatchToPros)(Counter);
