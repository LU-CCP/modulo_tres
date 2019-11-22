import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      date: ''
    }
  }

  handleChange = (key) => ({target: {value}}) =>{
    this.setState({ [key]:value });
  }

  handleSubmit = () =>{
    const { firstName, lastName, email, gender, date } = this.state;
    alert(` Nombre: ${firstName}\n
            Apellido: ${lastName}\n
            Correo: ${email}\n
            Género: ${gender}\n
            Fecha: ${date}`)
  }

  render(){
    const { firstName, lastName, gender, email, date } = this.state;
  
    return(
      <div className="Form">
        <form className="Form" onSubmit={this.handleSubmit}>
          <input required placeholder='Nombre' value={firstName} onChange={this.handleChange('firstName')} />
          <input required placeholder='Apellido' value={lastName} onChange={this.handleChange('lastName')} />
          <input required placeholder='Email' type='email' value={email} onChange={this.handleChange('email')} />
          <input required type="radio" name='genero' value='masculino' checked={this.state.genero==='masculino'} onChange={this.handleChange('gender')} /> Masculino
          <input required type="radio" name='genero' value='femenino' checked={this.state.genero==='femenino'} onChange={this.handleChange('gender')}/> Femenino
          <input required type='date' value={date} onChange={this.handleChange('date')} />
          <button type='submit'> {'Submit'} </button>
        </form>
      </div>

    );
  }
}

export default App;