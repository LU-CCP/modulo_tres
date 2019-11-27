import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      genero: '',
      fechaNacimiento: ''
    };
  }

  handleChange = key => ({ target: { value } }) => {
    console.log(key, this.state, value);
    this.setState({ [key]: value });
  };

  handleSubmit = () => {
    const { firstName, lastName, email, genero, fechaNacimiento } = this.state;

    alert(`${firstName} ${lastName} ${email} ${genero} ${fechaNacimiento}`);
  };

  render() {
    const { firstName, lastName, email, fechaNacimiento } = this.state;

    return (
      <div className='App'>
        <form className='Form' onSubmit={this.handleSubmit}>
          Nombre
          <input
            required
            value={firstName}
            onChange={this.handleChange('firstName')}
          />
          Apellido
          <input
            required
            value={lastName}
            onChange={this.handleChange('lastName')}
          />
          Correo
          <input
            required
            type='email'
            value={email}
            onChange={this.handleChange('email')}
          />
          Genero
          <input
            required
            type='radio'
            name='genero'
            value='Masculino'
            checked={this.state.genero === 'Masculino'}
            onChange={this.handleChange('genero')}
          />{' '}
          Masculino
          <input
            required
            type='radio'
            name='genero'
            value='Femenino'
            checked={this.state.genero === 'Femenino'}
            onChange={this.handleChange('genero')}
          />{' '}
          Femenino <br></br>
          Fecha de nacimiento
          <input
            required
            type='date'
            value={fechaNacimiento}
            onChange={this.handleChange('fechaNacimiento')}
          />
          <button type='submit'>{'Subir'}</button>
        </form>
      </div>
    );
  }
}

export default App;
