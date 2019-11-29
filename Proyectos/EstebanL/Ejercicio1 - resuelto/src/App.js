import React, { Component } from 'react';
import './App.css';

const genders = ['male', 'female', 'other'];

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

  handleChange = (key) => ({ target: { value }}) => {
    this.setState({ [key]: value });
  }

  handleSubmit = () => {
    const { firstName, lastName, email, gender, birthdate } = this.state;
    alert(`${firstName} ${lastName} ${email} ${gender} ${birthdate}`)
  }

  renderGendersFor = () => {

  const gendersJSX = [];  
      for (let i = 0; i < genders.length; i++) {
      const gender = genders[i];
      gendersJSX.push(

          <div key = {gender}>
                <input 
                className='App-Form-Item' 
                name='genders' 
                required 
                type='radio' 
                value={gender}
                onChange={this.handleChange('gender')} 
                />{gender}
          </div>

        );
  
      }
      return gendersJSX;
  }

  renderGendersForEach = () =>{
    const gendersJSX = [];
    genders.forEach((gender) =>{

      gendersJSX.push(

          <div key = {gender}>
                <input 
                className='App-Form-Item' 
                name='genders' 
                required 
                type='radio' 
                value={gender}
                onChange={this.handleChange('gender')} 
                />{gender}
          </div>

        );

    });
    return gendersJSX;
  }
  
  renderGendersMap = () => {

    return genders.forEach.map ((gender) =>{

      return (

          <div key = {gender}>
                <input 
                className='App-Form-Item' 
                name='genders' 
                required 
                type='radio' 
                value={gender}
                onChange={this.handleChange('gender')} 
                />{gender}
          </div>

        );
    })
}

  render() {
    const { firstName, lastName, email, birthdate } = this.state;
    return (
      <div className='App'>
        <form className='App-Form' onSubmit={this.handleSubmit}>
          <input className='App-Form-Item' required value={firstName} onChange={this.handleChange('firstName')} />
          <input className='App-Form-Item' required value={lastName} onChange={this.handleChange('lastName')} />
          <input className='App-Form-Item' required type='email' value={email} onChange={this.handleChange('email')} />
          {this.renderGendersFor()}
          <input className='App-Form-Item' required type='date' value={birthdate} onChange={this.handleChange('birthdate')} />
          <button className='App-Form-Item' type='submit'>{'Submit'}</button>
        </form>
      </div>
    );
  }
}

export default App;
