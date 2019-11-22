import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  handleChange = (key) => ({target: {value}}) => {
    console.log(key, this.state, value);
    this.setState({[key]:value});
  }

  // COMENTARIO DE PRUEBA
  
  handleSubmit = () => {
    const {firstName, lastName, email} = this.state;
    alert(`${firstName} ${lastName} ${email}`);
  }

  render () {
    const {firstName, lastName, email} = this.state;
    return (
      <div className="App">
        <form className='Form' onSubmit={this.handleSubmit}>
          <input value={firstName} required placeholder='Ingrese nombre' onChange={this.handleChange('firstName')} />
          <input value={lastName} required placeholder='Ingrese apellido' onChange={this.handleChange('lastName')} />
          <input value={email} type='email' required placeholder='Ingrese email' onChange={this.handleChange('email')} />
          <button type='submit'>{'Submit'}</button>
        </form>
      </div>
    );
  }
}

export default App;
