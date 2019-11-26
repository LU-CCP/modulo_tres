import React, {useState} from 'react';

const genders = ['male','famale','other'];

const Function = () => {
    const [firstName, setFirstName] = useState('');
    const [firstLastName, setFirstLastName] = useState('');
    const [email, setemail] = useState('');
    const [gender, setgender] = useState('');
    const [birthdate, setbirthdate] = useState('');

    const handleChange = (key) => ({ target: { value }}) => {
        // switch (key) {
        //     case value:
                
        //         break;
        
        //     default:
        //         break;
        // }
        // setState({ [key]: value });
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
      
}