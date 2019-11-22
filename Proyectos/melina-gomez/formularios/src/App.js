import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        firstName:'',
        lastName:'',
        email:''
    }
  }
  handleChange = (key) => ({target: {value}}) =>{
    console.log(key, this.state, value)
    this.setState({[key]: value});
  }
 handleSubmit = () => {
   const{firstName, lastName, email, femenino, masculino, fechaNacimiento } = this.state
   alert(`${firstName} ${lastName} ${email} ${masculino} ${femenino} ${fechaNacimiento}`)
 }
  
  render(){
    console.log('render')
    const{firstName, lastName,email} = this.state
    return (
      <div className="App">
        <form className='Form'onSubmit={this.handleSubmit}>
          <input required value = {firstName} onChange={this.handleChange('firstName')} />
          <input required value = {lastName} onChange={this.handleChange('lastName')}/>
          <input type='email' value = {email} onChange={this.handleChange('email')}/>
          <input required type = 'radio' name = 'genero' value = 'masculino' checked= {this.state.genero === 'masculino' } onChange = {this.handleChange('genero')}/> Masculino
          <input required type = 'radio' name = 'genero' value = 'femenino' checked= {this.state.genero === 'femenino' } onChange = {this.handleChange('genero')}/> femenino
          <input required type = 'date' value={'fechaNacimiento'} onChange ={this.handleChange('fechaNacimiento')}/>
          <button type='submit'>{'submit'} </button> 
        </form>
      </div>
    );
  }
}

export default App;
