import React from 'react';
import logo from './logo.svg';
import './App.css';

import {TextInput, Button} from './components';
import { thisExpression } from '@babel/types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputDisabled : false
    }
  }

  handleClick = () => {
    this.setState ({textInputDisabled: true});
  }

  render () {
    const {textInputDisabled} = this.state;
    return (
      <div className="App">
        <TextInput disabled = {textInputDisabled}/>
        <Button onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;