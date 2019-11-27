import React, {Component, useState} from 'react'

const genders = ['male', 'female', 'other'];
const Function = () =>
{
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');
    
    handleChange = (key) => ({ target: { value }}) => 
    {
        this.setState({ [key]: value });
      }
    
      handleSubmit = () => 
      {
        const { firstName, lastName, email, gender, birthdate } = this.state;
        alert(`${firstName} ${lastName} ${email} ${gender} ${birthdate}`)
      }
      renderGendersMap = () => 
      {
        return genders.map((gender) => {
          return (
            <div key={gender}>
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
    
      render() 
      {
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