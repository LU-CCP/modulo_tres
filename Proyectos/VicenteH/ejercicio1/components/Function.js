import React, { Component, useState } from 'react';

const genders = ['male', 'female', 'other'];


const Function = () => {
    const [firstName,setfirstName] = useState('');
    const [lastName,setlastName] = useState('');
    const [email,setemail] = useState('');
    const [gender,setgender] = useState('');
    const [birthdate,setbirthdate] = useState('');

    handleChange = (key) => ({ target: { value } }) => {
        this.setState({ [key]: value });
      }
    
      handleSubmit = () => {
        const { firstName, lastName, email, gender, birthdate } = this.state;
        alert(`${firstName} ${lastName} ${email} ${gender} ${birthdate}`)
      }
    
      renderGendersMap = () => {
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
}




export default Function;

