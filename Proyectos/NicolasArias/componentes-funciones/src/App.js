import React, { Component } from 'react';
import './App.css';

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

  render() {
    const { firstName, lastName, email, gender, birthdate } = this.state;
    return (
      <div className='App'>
        <form className='App-Form' onSubmit={this.handleSubmit}>
          <input className='App-Form-Item' required value={firstName} onChange={this.handleChange('firstName')} />
          <input className='App-Form-Item' required value={lastName} onChange={this.handleChange('lastName')} />
          <input className='App-Form-Item' required type='email' value={email} onChange={this.handleChange('email')} />
          <div>
            <input className='App-Form-Item' name='genders' required type='radio' value='male'onChange={this.handleChange('gender')} />Male
          </div>
          <div>
            <input className='App-Form-Item' name='genders' required type='radio' value='female' onChange={this.handleChange('gender')} />Female
          </div>
          <div>
            <input className='App-Form-Item' name='genders' required type='radio' value='other' onChange={this.handleChange('gender')} />Other
          </div>
          <input className='App-Form-Item' required type='date' value={birthdate} onChange={this.handleChange('birthdate')} />
          <button className='App-Form-Item' type='submit'>{'Submit'}</button>
        </form>
      </div>
    );
  }
}

export default App;
