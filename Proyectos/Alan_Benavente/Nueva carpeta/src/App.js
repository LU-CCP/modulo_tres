import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      firstName:'',
      lastName:'',
      birthDate:'',
      gender:['masculino','femenino']
    };
  }
   
  handleChange=(key)=>({target:{value}})=>{
      console.log(key,this.state,value)
      this.setState({[key]:value})
  }
  handleSubmit=()=>{
    const {firstName, lastName, email,gender,birthDate}=this.state;
    alert(`${firstName} ${lastName} ${email} ${gender} ${birthDate}`);
  }
  render (){
    const {firstName,lastName,email,gender,birthDate}=this.state;
  return (
    <div className="App"> 
    <form className="Form" onSubmit={this.handleSubmit}> 
    <label>
      nombre:  
    <input required type ='text' value={firstName} onChange={this.handleChange('firstName')}/>
      Apellido: 
    <input required type ='text' value={lastName} onChange={this.handleChange('lastName')}/>
      Correo Electronico: 
    <input required type='email' value={email} onChange={this.handleChange('email')} />
    </label>
    <div className="App">
      <label>
        <input name="genero" type="radio" value={gender[0]} onChange={this.handleChange('gender')}/>
      masculino
      </label>
      </div>
      <div className="App">
        <label>
          <input name="genero" type="radio" value= {gender[1]} onChange={this.handleChange('gender')} />
          femenino
        </label>
      </div>
    <label>
      fecha de nacimiento: 
    <input type='date' value={birthDate} onChange={this.handleChange('birthDate')}/>
    </label>
    <button type='submit'>{'Submit'}</button>
    </form>
    </div>
  );
}
}

export default App;
