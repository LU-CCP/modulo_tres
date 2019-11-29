import React, {usesState} from 'react';

const genders = ['male', 'female', 'other'];

const Function =() => {
    const [firstName, setFirstName] = usesState('');
    const [lastName, setLastName] = usesState('');
    const [email, setEmail] = usesState('');
    const [gender, setGender] = usesState('');
    const [birthdate, setBirthdate] = usesState('');


    const handleChange = (key) => ({ target: { value }}) => {

        

        setState({ [key]: value });
      }
    
    const handleSubmit = () => {
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