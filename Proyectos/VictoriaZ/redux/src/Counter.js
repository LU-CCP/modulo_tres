import React, { Component } from 'react';
import { connect } from 'react-redux'; // para conectar react con redux

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
      onIncrementAsync,
      onDecrement,
      onDecrementAsync
    } = this.props; // esto por el mapeo q se hizo abajo

    return (
      <div>
        <h1>Redux is awesome</h1>
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

// equivalente a los handle, deben tener el on prefijo funciones
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment()), // asi se mapea funcion q dispara alguna accion
  onIncrementAsync: () => {
    dispatch(incrementAsync());
    setTimeout(() => dispatch(increment()), 3000);
  },

  onDecrement: () => dispatch(decrement()), // cuando cambia el booleano se desacctiva el boton
  onDecrementAsync: () => {
    dispatch(decrementAsync());
    setTimeout(() => dispatch(decrement()), 3000);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter); // conectar el componente con redux y las acciones a disparar
