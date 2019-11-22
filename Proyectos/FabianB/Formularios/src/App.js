import React from 'react'
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
    }
  }

  handleChange = (key) => ({ target: { value } }) => {
    console.log(key, this.state, value)
    this.setState({ [key]: value });

  }

  handleSubmit = () => {
    const { firstName, lastName, email, genero, fechaNacimiento } = this.state;
    alert(`${firstName} ${lastName} ${email} ${genero} ${fechaNacimiento}`)

  }


  render() {
    const { firstName, lastName, email, fechaNacimiento } = this.state;
    return (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
          <input required value={firstName} onChange={this.handleChange('firstName')} />
          <input required value={lastName} onChange={this.handleChange('lastName')} />
          <input required type='email' value={email} onChange={this.handleChange('email')} />
          <input required type='radio' name='genero' value='masculino' checked={this.state.genero === 'masculino'} onChange={this.handleChange('genero')} /> Masculino
          <input required type='radio' name='genero' value='femenino' checked={this.state.genero === 'femenino'} onChange={this.handleChange('genero')} /> Femenino
          <input required type='date' value={fechaNacimiento} onChange={this.handleChange('fechaNacimiento')} />

          <button type='submit'>{'Submit'}</button>
        </form>
      </div>
    )
  }
}

export default App;

