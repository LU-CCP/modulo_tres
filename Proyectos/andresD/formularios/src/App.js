import React from 'react';
import './App.css';

class App extends React.Component {
constructor(props){
  super(props);
  this.state ={
    firstName: '',
    lastName: '',
    email:'',
    genero: ['masculino', 'femenino'],
    fechaNac: ''
  };
}

handleChange =(key) => ({target : {value}}) =>{
  console.log(key, this.state, value);
  this.setState({[key]: value});
}

handleSubmit=()=>{
  const {firstName, lastName, email, genero, fechaNac} = this.state;
  alert(`${firstName} ${lastName} ${email} ${genero} ${fechaNac} `)
}




render(){
 const {firstName, lastName, email, genero=[], fechaNac} = this.state;
  return (
    <div className="App">
      <form className='Form' onSubmit={this.handleSubmit}>
     <input value = {firstName} onChange={this.handleChange('firstName')} required/> 

     <input value = {lastName} onChange={this.handleChange('lastName')}/>

     <input type="email"value = {email} onChange={this.handleChange('email')} />

     <p>Genero:</p> 
     <div>

     <input type="radio" name="genero" id="masculino"  value={genero[0]} onChange={this.handleChange('genero')}></input>
     <label htmlFor='masculino'>{'Masculino'}</label>


     <input type="radio" name="genero" id="femenino"  value={genero[1]} onChange={this.handleChange('genero')}></input>
     <label htmlFor='femenino'>{'Femenino'}</label>
     </div>

     <input type="date" id="fechaNac" value ={fechaNac} onChange={this.handleChange('fechaNac')}></input>


  <button type='submit'> {'Submit'}</button>
     </form>
    </div>
  );
  }
  
}

export default App;
