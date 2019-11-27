import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Learn React',
      compare: ''
    };
    this._varGlobal = '';
    console.log('constructor');
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { value, compare } = this.state;

    const should = nextState.value !== value || nextState.compare !== compare;

    console.log('shouldComponentUpdate', should);

    return should;
  }
}

export default App;
