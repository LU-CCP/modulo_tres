import React, { Component, useState } from 'react';

const genders = ['male', 'female', 'other'];

const Function = ()=>{
    const [firstName, setFirstName] = setState();
    const [lastName, setLastName] = setState();
    const [email, setEmail] = setState();
    const [gender, setGender] = setState();
    const [birthdate, setBirthdate] = setState();

    const handleChange = (key) => ({ target: { value }}) => {
    }
    
    const handleSubmit = () => {
        const { firstName, lastName, email, gender, birthdate } = state;
        alert(`${firstName} ${lastName} ${email} ${gender} ${birthdate}`)
    }

    const renderGendersMap = () => {
        return genders.map((gender) => {
          return (
            <div key={gender}>
              <input 
                className='App-Form-Item' 
                name='genders' 
                required 
                type='radio' 
                value={gender}
                onChange={handleChange('gender')} 
                />{gender}
            </div>
          );
        })
      }

    return (
        <div className='App'>
          <form className='App-Form' onSubmit={handleSubmit}>
            <input className='App-Form-Item' required value={firstName} onChange={handleChange('firstName')} />
            <input className='App-Form-Item' required value={lastName} onChange={handleChange('lastName')} />
            <input className='App-Form-Item' required type='email' value={email} onChange={handleChange('email')} />
            {renderGendersMap()}
            <input className='App-Form-Item' required type='date' value={birthdate} onChange={handleChange('birthdate')} />
            <button className='App-Form-Item' type='submit'>{'Submit'}</button>
          </form>
        </div>
      );
}

export default Function;