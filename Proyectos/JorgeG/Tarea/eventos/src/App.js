import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      firstname: '',
      lastname: '',
      email:'',
      genero:'',
      fechaNac:''
    }

  }

  handleChange = (key) => ({ target: { value }}) =>{
    console.log(key, this.state, value)
    this.setState({ [key]: value });
  }

  handleSubmit = () =>{
    const { firstname, lastname, email,genero, fechaNac } = this.state;
    alert(`${firstname} ${lastname} ${email} ${genero} ${fechaNac}`)
  }

  render() {
    const { firstname, lastname, email, fechaNac } = this.state;
    return (
      <div className="App">
        <form className="Form" onSubmit={this.handleSubmit}>
          Nombre<input required value = {firstname} onChange={this.handleChange('firstname')}/>
          Apellido<input required value = {lastname} onChange={this.handleChange('lastname')}/>
          E-mail<input required  type='email' value = {email} onChange={this.handleChange('email')}/>
          Masculino<input required  type='radio' name= 'genero' value = 'Masculino' checked={this.state.genero==='Masculino'} onChange={this.handleChange('genero')}/>
          Femenino<input required  type='radio' name= 'genero' value = 'Femenino' checked={this.state.genero==='Femenino'} onChange={this.handleChange('genero')}/>
          Fecha de Nacimiento<input required  type='date' value = {fechaNac} onChange={this.handleChange('fechaNac')}/>
    <button type='submit'>{'Submit'}</button>
        </form>
      </div>
    );
  }
}

export default App;