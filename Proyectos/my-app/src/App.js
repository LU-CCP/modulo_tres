import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : 'Learn React',
      compare: ''
    };
    this._varGlobal = '';
    console.log('constructor')
  }
  shouldComponentUpdate(nextProps, nextState) {
    const {value, compare} = this.state;
    console.log(nextProps);
    const should =  nextState.value !== value || nextState.compare !== compare;
    console.log('shouldComponentUpdate', should);
    return should;
  }
  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({value: 'Learn React Now!'});
    }, 3000)
    setTimeout(() => {
      this._varGlobal = 'Please';
      console.log('forceUpdate')
      this.forceUpdate();
    }, 4000)
    setTimeout(() => {
      console.log('setState compare')
      this.setState({compare: ''})
    }, 5000)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render() {
    console.log('render');
    return (
      <div className="App">
        <header className="App-header">
        <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Now! Please
          </a>
        </header>
      </div>
    );
  }
}

export default App;
