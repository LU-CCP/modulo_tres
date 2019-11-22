import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      genero: ['Masculino', 'Femenino', 'Alien'],
      nacimiento: ''
    }
  }

  handleChange = (key) => ({target: {value}}) => {
    // console.log(key, this.state, value);
    this.setState({[key]:value});
  }
  
  handleSubmit = () => {
    const {firstName, lastName, email, genero, nacimiento} = this.state;
    alert(`Nombre: ${firstName} \nApellido: ${lastName} \nEmail:${email} \nGenero: ${genero} \nFecha de nacimiento: ${nacimiento}`);
    console.log('Nacimiento:' + genero);
  }

  render () {
    const {firstName, lastName, email, genero, nacimiento} = this.state;
    return (
      <div className="App">
        <form className='Form' onSubmit={this.handleSubmit}>
        <p>Formulario de ingreso</p>
          <input value={firstName} required placeholder='Ingrese nombre' onChange={this.handleChange('firstName')} />
          <input value={lastName} required placeholder='Ingrese apellido' onChange={this.handleChange('lastName')} />
          <input value={email} type='email' required placeholder='Ingrese email' onChange={this.handleChange('email')} />
          <div>
            <p>Ingrese su genero</p>
            <input value={genero[0]} type='radio' id='masculino' name = 'genero' required onChange={this.handleChange('genero')} />
            <label for='masculino'>Masculino</label>
            <input value={genero[1]} type='radio' id='femenino' name = 'genero' required onChange={this.handleChange('genero')} />
            <label for='femenino'>Femenino</label>
            <input value={genero[2]} type='radio' id='alienigena' name = 'genero' required onChange={this.handleChange('genero')} />
            <label for='alienigena'>Alienigena</label>
          </div>
          <input value={nacimiento} type='date' required onChange={this.handleChange('nacimiento')} />
          <br/>
          <button type='submit'>{'Submit'}</button>
        </form>
      </div>
    );
  }
}

export default App;
