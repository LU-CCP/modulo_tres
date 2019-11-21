import React from 'react';
import './App.css';


class  App extends React.Component {

    constructor(props){

      super(props);
      this.state = { 


        firstName: '',
        lastName: '',
        email:''
        
      };
      
    }

  handleChange=(key)=>({target:{value}})=>{
    console.log(key,this.state,value)
    this.setState({[key]:value});
  

  }

  handleSubmit=()=>{

    const {firstName,lastName,email}=this.state;
    alert(`${firstName} ${lastName} ${email}`);
  }
  render(){ 

    const {firstName, lastName,email}= this.state;

     return(
      <div className="App">

           <form className="Form" onSubmit={this.handleSubmit}>

             <input value ={firstName} onChange={this.handleChange('firstName')} placeholder="nombre" required/>
             <input value={lastName}  onChange={this.handleChange('lastName')} placeholder="apellido" required/>
             <input value={email}  onChange={this.handleChange('email')} placeholder="correo" required type="email"/>
     <button type='submit'>{'Submit'}</button>
           </form>

      </div>


        );

    
    
    }


}

export default App;

