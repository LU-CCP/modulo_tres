import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
      email: '',
      genero: ['Masculino', 'Femenino'],
      fechaNacimiento: ''
    };
  }

  handleChange = (key) => ({ target: { value }}) => {
    console.log(key, this.state, value)
    this.setState({ [key]: value });
  }

  handleSubmit = () => {
    const { nombre, apellido, email, genero, fechaNacimiento } = this.state;
    alert(`Nombre: ${nombre} \n Apellido: ${apellido} \n Email: ${email} \n Genero: ${genero} \n Fecha de Nacimiento: ${fechaNacimiento}`)
  }

  //Este es el render
  render(){
    const { nombre, apellido, email, genero, fechaNacimiento } = this.state;
    return (
      <div className="App" class="div1">
        <form className="Form" onSubmit={this.handleSubmit}>
          <a> Nombre</a>
          <input className="inpt" required placeholder='Ingrese nombre' value={nombre} onChange={this.handleChange('nombre')} ></input>
          <br></br>
          <a>Apellido</a>
          <input className="inpt" required placeholder='Ingrese apellido' value={apellido} onChange={this.handleChange('apellido')}></input>
          <br></br>
          <a>Email</a>
          <input className="inpt" required type='email' placeholder='example@gmail.com' value={email} onChange={this.handleChange('email')}></input>
          <br></br>
          <a>Genero</a>
          <input required type='radio' name="generos" id='masculino' value={genero[0]} onChange={this.handleChange('genero')}></input>
          <label for='masculino'>{'Masculino'}</label>
          <input required type='radio' name="generos" id='femenino' value={genero[1]} onChange={this.handleChange('genero')}></input>
          <label class="fem" for='femenino'>{'Femenino'}</label>
          <br></br>
          <div className="div2">
            <a>Fecha Nacimiento</a>
            <input className="inpt" required placeholder='DD/MM/YYYY' value={fechaNacimiento} onChange={this.handleChange('fechaNacimiento')}></input>
            <button className="mybtn" type='submit'>{'Enviar'}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
