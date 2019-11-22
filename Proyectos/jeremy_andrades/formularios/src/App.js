import React from 'react';
import './App.css';


  class App extends React.Component{
    constructor(promps){
      super(promps);
      this.state = {
        firstName: '',
        lastName: '',
        email:'',
        fechaNacimiento:'',
        genero:['Masculino', 'Femenino']
      };
    }

  handleChange = (key) => ({target: {value}}) => {
    console.log(key, this.state, value);
    this.setState({ [key]: value });
  }

  handleSubmit = () => {
    const { firstName, lastName, email, fechaNacimiento, genero } = this.state;
    alert(`${firstName} ${lastName} ${email} ${fechaNacimiento} ${genero}`)
  }

  render() {
    const {firstName, lastName, email, fechaNacimiento, genero} = this.state;
    return (
    <div className="App">
      <center>
      <form className='Form' onSubmit={this.handleSubmit}>
        Nombre<input required value={firstName} onChange={this.handleChange('firstName')}/>

        Apellido<input required value={lastName}  onChange={this.handleChange('lastName')}/>

        Email<input required type='email' value={email}  onChange={this.handleChange('email')}/>

        Fecha de Nacimiento<input type='date' required  value={fechaNacimiento} onChange={this.handleChange('fechaNacimiento')}/>

      <div>
        <label name='generos'>
        <input required type='radio' name='generos' value={genero[0]}  onChange={this.handleChange('genero')}></input>
        Masculino</label>
        <label name='generos'>
        <input required type='radio' name='generos' value={genero[1]}  onChange={this.handleChange('genero')}></input>
        Femenino</label>
      </div>

    <button type='submit'>{'Submit'}</button>
      </form></center>
    </div>
    );
  }
}

export default App;