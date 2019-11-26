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

  renderGendersFor = () => {
    const gendersJSX = [];

    for (let i = 0; i < genders.length; i += 1) {
      const gender = genders[i];

      gendersJSX.push(
        <div key={gender}>
          <input
            className='App-Form-Item'
            name='genders'
            required
            type='radio'
            value={gender}
            onChange={this.handleChange('gender')}
          />
          {gender}
        </div>
      );
    }

    return gendersJSX;
  };

  renderGendersForEach = () => {
    const gendersJSX = [];

    genders.forEach(gender => {
      gendersJSX.push(
        <div key={gender}>
          <input
            className='App-Form-Item'
            name='genders'
            required
            type='radio'
            value={gender}
            onChange={this.handleChange('gender')}
          />
          {gender}
        </div>
      );
    });

    return gendersJSX;
  };

  render() {
    const { firstName, lastName, email, birthdate } = this.state;

    return null;
  }
}

export default App;
