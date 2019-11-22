import React from 'react';
import './App.css';
import { TextInput, Button } from './components'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      TextInputDisabled: false
    };
  }

  handeClick = () => {
    const {TextInputDisabled} = this.state
    this.setState({TextInputDisabled: !TextInputDisabled})
  }

  render() {
    const { TextInputDisabled} = this.state;
    console.log('render')
    return (
      <div className="App">
        <TextInput disabled={TextInputDisabled} />
        <Button onClick = {this.handeClick} />
      </div>
    );
  }
}

export default App;
