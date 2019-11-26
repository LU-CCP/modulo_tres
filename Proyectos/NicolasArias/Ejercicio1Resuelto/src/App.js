import React, { Component } from 'react';
import './App.css';

const genders = ['male', 'female', 'other']

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

  // renderGendersFor = () =>{
  //   const genderJSX = [];

  //   for (let i = 0; i < genders.length; i++) {
  //     const gender = genders[i];
  //     genderJSX.push(
  //       <div key={gender}>
  //         <input
  //           required
  //           type='radio' 
  //           name='genders' 
  //           value={gender}
  //           className='App-Form-Item' 
  //           onChange={this.handleChange('gender')} 
  //         />{gender}
  //       </div>
  //     )
  //   }

  //   return genderJSX;
  // }

  // renderGendersForEach = () =>{
  //   const genderJSX = [];

  //   genders.forEach((gender) =>{
  //     genderJSX.push(
  //       <div key={gender}>
  //         <input
  //           required
  //           type='radio' 
  //           name='genders' 
  //           value={gender}
  //           className='App-Form-Item' 
  //           onChange={this.handleChange('gender')} 
  //         />{gender}
  //       </div>
  //     );
  //   });

  //   return genderJSX;
  // }

  renderGendersMap = () =>{
    //El map retorna el array que internamente genera
    return genders.map((gender) => {
      //Cada return es un push
      return (
        <div key={gender}>
           <input
            required
            type='radio' 
            name='genders' 
            value={gender}
            className='App-Form-Item' 
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
          {this.renderGendersMap()}
          <input className='App-Form-Item' required type='date' value={birthdate} onChange={this.handleChange('birthdate')} />
          <button className='App-Form-Item' type='submit'>{'Submit'}</button>
        </form>
      </div>
    );
  }
}

export default App;
