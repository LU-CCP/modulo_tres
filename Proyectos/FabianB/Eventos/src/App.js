import React from 'react';
import './App.css';
import { Textinput, Button } from './components';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputDisable: false
    };


  }
  handleClick = () => {
    const { textInputDisable } = this.state;
    this.setState({ textInputDisable: !textInputDisable });

  }

  render() {
    console.log('render')
    const { textInputDisable } = this.state;
    return (

      <div className="App">
        <Textinput disabled={textInputDisable} />
        <Button onClick={this.handleClick} />

      </div>
    );
  }
}

export default App;
