import React, {component, useState} from 'react';
const genders = ['male', 'female','other'];
const Function = () => {

    const[fistName, setFirstName]= useState('')
   const handleChange = (key) => ({ target: { value }}) => {
        this.setState({ [key]: value });
    const handleSubmit = () => {
            const { firstName, lastName, email, gender, birthdate } = this.state;
            alert(`${firstName} ${lastName} ${email} ${gender} ${birthdate}`)
          }
          
         
    const  renderGendersMap = () => {
            return genders.map((gender) => {
            return (
            <div key = {gender}>
            <input className='App-Form-Item' name='genders' required type='radio' 
            value={gender}onChange={this.handleChange('gender')}
             />{gender}
            </div>
              )
            }
        )
     }

}
}