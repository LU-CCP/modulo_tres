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
    
      Nombre: <input id="nombre" value = {firstName} onChange={this.handleChange('firstName')} required/> 
     
     
      Apellido: <input value = {lastName} onChange={this.handleChange('lastName')} required/>
    
      Email: <input type="email"value = {email} onChange={this.handleChange('email')} required />

     Genero:
     <div>

     <input type="radio" name="genero" id="masculino"  value={genero[0]} onChange={this.handleChange('genero')} required></input>
     <label htmlFor='masculino'>{'Masculino'}</label>


     <input type="radio" name="genero" id="femenino"  value={genero[1]} onChange={this.handleChange('genero')} required></input>
     <label htmlFor='femenino'>{'Femenino'}</label>
     </div>
     <br></br>
     Fecha Nacimiento: 
     <input type="date" id="fechaNac" value ={fechaNac} onChange={this.handleChange('fechaNac')} required></input>


  <button type='submit'> {'Submit'}</button>
     </form>
    </div>
  );
  }
  
}

export default App;
