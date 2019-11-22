import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: 'Ingrese su nombre',
      lastName:'Ingrese su apellido',
      email:'Ingrese su e-mail',
      date:'',
      genero: ['masculino','femenino']
    };
  }

  handleChange = (key) => ({target:{value}}) =>
  { console.log(key, this.state, value)
    this.setState({[key]: value})
  }
  handleSubmit = () =>
  {
    const {firstName, lastName, email, date, genero} = this.state;
    alert(`${firstName} ${lastName} ${email} ${date} ${genero}`)
  }
  render(){
    const {firstName, lastName, email, genero, date } = this.state;
    return (
    <div className="App">
      <form className = 'Form' onSubmit = {this.handleSubmit}>
      <label>
        Nombre:
      <input required value = {firstName} onChange = {this.handleChange('firstName')}/>
      Apellido:
      <input required value = {lastName} onChange = {this.handleChange('lastName')}/>
      Email:
      <input required type = 'email' value = {email} onChange = {this.handleChange('email')}/>
      Fecha de Nacimiento:
      <input required type = 'date' value = {date} onChange = {this.handleChange('date')}/>
     
      <input required type = 'radio' value = {genero[0]} onChange = {this.handleChange('genero')}/>
      masculino
      <input required type = 'radio' value = {genero[1]} onChange = {this.handleChange('genero')}/>
      femenino
      </label>
      

    <button type = 'submit'>{'Submit'}</button>
    {/* <button type = 'radio'>{'Submit'}</button> */}
      </form>
    </div>
  );
  }
}
export default App;