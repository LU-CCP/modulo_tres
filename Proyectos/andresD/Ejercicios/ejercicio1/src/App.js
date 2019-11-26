import React, { Component } from 'react';
import './App.css';
import './components/Function'

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


  renderGendersFor=() =>{
    const genderJSX = [];
    for (let i = 0; i < genders.length; i++) {
      const gender = genders[i];
      genderJSX.push(
        <div key={gender}>
            <input 
            className='App-Form-Item' 
            name='genders' 
            required 
            type='radio' 
            value={gender} 
            onChange={this.handleChange('gender')} 
            /> {gender}
          </div>
      );

    }
    return genderJSX;
  }

  renderGendersForEach=()=>{
    const genderJSX=[];
    genders.forEach((gender) =>{
      genderJSX.push(
      <div key={gender}>
      <input 
      className='App-Form-Item' 
      name='genders' 
      required 
      type='radio' 
      value={gender} 
      onChange={this.handleChange('gender')} 
      /> {gender}
    </div>
    )
    }
    )
   return genderJSX;
  }

 

  render() {
    const { firstName, lastName, email, birthdate } = this.state;
    return (
     
    );
  }
}

export default App;
