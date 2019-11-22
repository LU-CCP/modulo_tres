import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
      email: '',
      genero: '',
      fechaNacimiento: ''
    };
  }

  handleChange = (key) => ({ target: { value }}) => {
    console.log(key, this.state, value)
    this.setState({ [key]: value });
  }

  handleSubmit = () => {
    const { nombre, apellido, email, genero, fechaNacimiento } = this.state;
    alert(`Nombre: ${nombre} \n Apellido: ${apellido} \n Email: ${email} \n Genero: ${genero} \n Fecha de Nacimiento ${fechaNacimiento}`)
  }

  //Este es el render
  render(){
    const { nombre, apellido, email, genero, fechaNacimiento } = this.state;
    return (
      <div className="App">
        <form className="Form" onSubmit={this.handleSubmit}>
          <p> Nombre</p>
          <input required value={nombre} onChange={this.handleChange('nombre')} ></input>
          <p>Apellido</p>
          <input required value={apellido} onChange={this.handleChange('apellido')}></input>
          <p>Email</p>
          <input required type='email' value={email} onChange={this.handleChange('email')}></input>
          
          <button type='submit'>{'Submit'}</button>
        </form>
      </div>
    );
  }
}

export default App;
