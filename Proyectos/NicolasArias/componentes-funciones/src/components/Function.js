import React, { useState } from 'react';

const genders = ['male', 'female', 'other'];

const Function = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleChange = key => ({ target: { value } }) => {};

  const handleSubmit = () => {
    const { firstName, lastName, email, gender, birthdate } = state;
    alert(`${firstName} ${lastName} ${email} ${gender} ${birthdate}`);
  };

  const renderGendersMap = () => {
    //El map retorna el array que internamente genera
    return genders.map(gender => {
      //Cada return es un push
      return (
        <div key={gender}>
          <input
            required
            type='radio'
            name='genders'
            value={gender}
            className='App-Form-Item'
            onChange={handleChange('gender')}
          />
          {gender}
        </div>
      );
    });
  };

  return (
    //El return es equivalente al render
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
