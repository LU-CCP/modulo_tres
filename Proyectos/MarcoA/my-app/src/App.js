import React from 'react';
import logo from './pepe.jpg';
import './App.css';
import Instructions from './components/instructions'
import Link from './components/link';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Pepe',
      compare: ''
    };
    this._varGlobal = '';
    console.log('constructor')
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { value, compare } = this.state;
    const should = nextState.value !== value ||
      nextState.compare !== compare;
    console.log('shouldComponentUpdate', should)
    return should
  }

  componentDidMount() {
    console.log('componentDidMount')

    setTimeout(() => {
      console.log('setState')
      this.setState({ value: 'Pepe save the world' })
    }, 3000);

    setTimeout(() => {
      this._varGlobal = ' (CLICK FOR FREE NSFW)'
      this.forceUpdate();
    }, 8000);

    setTimeout(() => {
      console.log('setState compare')
      this.setState({ compare: '' });

    }, 5000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  render() {
    console.log('render')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Pepe fan page
        </p>
          <a
            className="App-link"
            href="https://i.guim.co.uk/img/media/327e46c3ab049358fad80575146be9e0e65686e7/0_0_1023_742/master/1023.jpg?width=300&quality=85&auto=format&fit=max&s=02632218051da209be64b27e96722c43"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${this.state.value}`}
          </a>
          <Instructions
            nombre='Luis Miguel'
            edad = '42'
          />
          <Link
          />
        </header>
      </div>
    );
  }
}

export default App;
