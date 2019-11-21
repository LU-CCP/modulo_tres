import React from 'react';
import './App.css';
import {TextInput, Button} from './components';


class  App extends React.Component {

    constructor(props){

      super(props);
      this.state = { //estado como objeto

        TextInputDisable:false
        
      };

      

      
    }

    handleClick =()=>{
      const{TextInputDisable}=this.state;

      this.setState({TextInputDisable: !TextInputDisable});

    }

  
  render(){ 

        const {TextInputDisable}=this.state;

        return(

          <div className="App">

            <TextInput disabled={TextInputDisable}/>
            <Button  onClick={this.handleClick}/>

          </div>



        );

    
    
    }


}

export default App;

