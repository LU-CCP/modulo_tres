import React from 'react';
import './App.css';
import {Textinput, Button} from './components'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      textinputDisabled:false
    };
  }  
   handleClick = () =>
    {
      const {textinputDisabled} = this.state;
      this.setState({textinputDisabled:!textinputDisabled})
    }
  render(){
    const {textinputDisabled} = this.state;
    return (
    <div className="App">
      <Textinput disabled ={textinputDisabled}/>
      <Button onClick = {this.handleClick}/>
    </div>
  );
  }
}

export default App;
