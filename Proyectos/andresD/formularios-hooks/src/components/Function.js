/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';

import '../App.css';

const genders = ['male', 'female', 'other'];

const Function = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleChange = key => ({ target: { value } }) => {
    switch (key) {
      case value:
        break;

      case 'firstName':
        setFirstName(value);
        break;

      case 'lastName':
        setLastName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'gender':
        setGender(value);
        break;

      case 'birthdate':
        setBirthdate(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = () => {
    // eslint-disable-next-line no-alert
    alert(`${firstName} ${lastName} ${email} ${gender} ${birthdate}`);
  };

  const renderGendersMap = () =>
    // eslint-disable-next-line no-shadow
    genders.map(gender => (
      <div key={gender}>
        <input
          className='App-Form-Item'
          name='genders'
          required
          type='radio'
          value={gender}
          onChange={handleChange('gender')}
        />
        {gender}
      </div>
    ));

  return (
    <div className='App'>
      <form className='App-Form' onSubmit={handleSubmit}>
        <input
          className='App-Form-Item'
          required
          value={firstName}
          onChange={handleChange('firstName')}
        />
        <input
          className='App-Form-Item'
          required
          value={lastName}
          onChange={handleChange('lastName')}
        />
        <input
          className='App-Form-Item'
          required
          type='email'
          value={email}
          onChange={handleChange('email')}
        />
        {renderGendersMap()}
        <input
          className='App-Form-Item'
          required
          type='date'
          value={birthdate}
          onChange={handleChange('birthdate')}
        />
        <button className='App-Form-Item' type='submit'>
          {'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Function;
