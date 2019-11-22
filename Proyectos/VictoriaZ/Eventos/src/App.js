import React from 'react'; 
import './App.css'; //estilos aplicacion

import {TextInput, Button} from './components'

class App extends React.Component {  
  constructor(props){ 
    super(props); 
    this.state = { 
      textInputDisabled:false
    };
  }
  
  handleClick=()=>{
    const {textInputDisabled}= this.state
    this.setState({textInputDisabled:!textInputDisabled})
  }
 
  render (){
    const {textInputDisabled}=this.state;
    return ( //onclick es una propiedad creado por nosotros
      <div className="App">
        <TextInput disabled={textInputDisabled}/>
        <Button onClick={this.handleClick} /> 
      </div>
    );
  }
}

export default App;
