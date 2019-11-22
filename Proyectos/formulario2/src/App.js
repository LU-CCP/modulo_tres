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
      fechaNac: ''
    };
  }


  handleChange = (key) => ({ target: { value } }) => {
    console.log(key, this.state, value)
    this.setState({ [key]: value });
  }
  handleSumbit = () => {
    const { firstName, lastName, email, genero, fechaNac } = this.state;
    alert(`${firstName} ${lastName} ${email} ${genero} ${fechaNac}`)
  }
  

  render() {
    const { firstName, lastName, email, fechaNac } = this.state;
    return (
      <div className='App'>
        <form className='Form' onSubmit={this.handleSumbit}>
          <input required value={firstName} onChange={this.handleChange('firstName')} />
          <input required value={lastName} onChange={this.handleChange('lastName')} />
          <input required type='email' value={email} onChange={this.handleChange('email')} />
          <label>Femenino</label><input type='radio' name='genero' value='Femenino' required checked={this.state.genero==='Femenino'} onChange={this.handleChange('genero')}></input>
          <label>Masculino</label><input type='radio' name='genero' value='Masculino' required checked={this.state.genero==='Masculino'} onChange={this.handleChange('genero')}></input>
          <label>No responde</label><input type='radio' name='genero' value='No responde' required checked={this.state.genero==='No responde'} onChange={this.handleChange('genero')}></input>
          <input required value={fechaNac} type='date' onChange={this.handleChange('fechaNac')} required/>
          <button type = 'submit'>{'Sumbit'}</button>
        </form>

      </div >
    );
  }
}

export default App;
