import React,{Component,useState} from 'react';
const genders=['male','female','other'];

const Function =()=> {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [firstName,setG]=useState('');
    const [firstName,setfirstName]=useState('');

  const  handleChange = (key) => ({ target: { value }}) => {
        this.setState({ [key]: value });
      }
    
    const  handleSubmit = () => {
        const { firstName, lastName, email, gender, birthdate } = this.state;
        alert(`${firstName} ${lastName} ${email} ${gender} ${birthdate}`)
      }
      renderGendersMap = () =>{
        return genders.map((gender)=>{  
          return(
            <div>  key={gender}
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

