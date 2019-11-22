import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      firstName: '',
      lastname:'',
      email:'',
      genero: ['Maculino', 'Femenino','Otros'],
      fechaNacimiento: ''
    };
  
  }
  handleChange =(key) =>({target: {value}})=>{
    console.log(key,this.state, value)
    this.setState({[key]: value});
    
  }
  handleSubmit =() =>{
    const {firstName,lastname,email,genero,fechaNacimiento}= this.state;
    alert(`${firstName} ${lastname} ${email} ${genero} ${fechaNacimiento}`)

  }

  
  render(){
    const {firstName ,lastname,email,genero,fechaNacimiento}=this.setState;
  
  return (
    <div className="App">
    <form className='Form' onSubmit={this.handleSubmit}>
    <input required value ={firstName} onChange={this.handleChange('firstName')}/>
    <input required value ={lastname} onChange={this.handleChange('lastName')}/>
    <input required type='email' value ={email} onChange={this.handleChange('email')}/>

    <div class="radio">
   <input value={genero[0]}  type='radio' name='genero'  id='Masculino' onChange={this.handleChange('genero')}/>
    <label for="Maculino">Masculino</label>
    <input value={genero[1]} required type='radio' name='genero'  id="Femenino"/>
    <label for="Femenino">Femenino</label>
    <input value={genero[2]} type='radio' name='genero'  id="Otros"/>
    <label for="Otros">Otros</label>
    </div>
    <input required type='date' value ={fechaNacimiento} onChange={this.handleChange('fechaNaciemiento')}/>

  <button type='submit'>{'Submit'}</button>
    </form>
    </div>
  );
}
}

export default App;
