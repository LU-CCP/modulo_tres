import React, { Component } from 'react';
import './App.css';

const generos = ['Hombre', 'Mujer', 'Helicoptero Apache'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gender: null,
      birthdate: ''
    };
  }

  renderGenerosForEach = () => {
    const generosJSX = [];
    generos.forEach((genero) => {
      generosJSX.push(
        <div key={genero}>
          <input className='App-Form-Item'
            name='genero'
            required
            type='radio'
            value={genero}
            onChange={this.handleChange('genero')}
          />{genero}
        </div>)
    });
    return generosJSX;
  }

  renderGenerosFor = () => {
    const generosJSX = [];
    for (let i = 0; i < generos.length; i++) {
      const genero = generos[i];
      generosJSX.push(
        <div key={genero}>
          <input className='App-Form-Item'

            name='genero'
            required
            type='radio'
            value={genero}
            onChange={this.handleChange('genero')}
          />{genero}
        </div>)
    }
    return generosJSX;
  }

  renderGenerosMap = () => {
    return generos.map((genero) => {
      return (
        <div key={genero}>
          <input className='App-Form-Item'
            name='genero'
            required
            type='radio'
            value={genero}
            onChange={this.handleChange('genero')}
          />{genero}
        </div>);
    })
  }

  handleChange = (key) => ({ target: { value } }) => {
    this.setState({ [key]: value });
  }

  handleSubmit = () => {
    const { firstName, lastName, email, gender, birthdate } = this.state;
    alert(`${firstName} ${lastName} ${email} ${gender} ${birthdate}`)
  }

  render() {
    const { firstName, lastName, email, birthdate } = this.state;
    return (
      <div className='App'>
        <form className='App-Form' onSubmit={this.handleSubmit}>
        Nombre <input className='App-Form-Item' required value={firstName} onChange={this.handleChange('firstName')} />
        Apellido    <input className='App-Form-Item' required value={lastName} onChange={this.handleChange('lastName')} /> 
        Correo    <input className='App-Form-Item' required type='email' value={email} onChange={this.handleChange('email')} />
          Genero {this.renderGenerosMap()}
          Cumpleaños <input className='App-Form-Item' required type='date' value={birthdate} onChange={this.handleChange('birthdate')} />
            <button className='App-Form-Item' type='submit'>{'Submit'}</button>
        </form>
      </div>
    );
  }
}

export default App;
