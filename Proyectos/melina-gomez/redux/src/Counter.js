import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from './native/actions/counter';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Redux is awesome</h1>
        <p>Count: </p>
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
const mapStateToProps = ({ counter }) => ({
  Count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
});
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
