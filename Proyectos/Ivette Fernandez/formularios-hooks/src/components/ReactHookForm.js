import React from 'react';
import useForm from 'react-hook-form'
import "../App.css";

const Function = () =>  {
const {register, handleSubmit} = useForm();

const onSubmit = (data) =>
{
    const {firstName, lastName, email, birthdate} = data;
    alert(`${firstName} ${lastName} ${email} ${birthdate}`)
}

return (
    <div className='App'>
      <form className='App-Form' onSubmit={handleSubmit(onSubmit)}>
        <input className='App-Form-Item' required name ='firstName' ref={register} />
        <input className='App-Form-Item' required name='lastName' ref={register} />
        <input className='App-Form-Item' required type='email' name='email' ref={register} />
        <input className='App-Form-Item' required type='date' name='birthdate' ref={register} />
        <button className='App-Form-Item' type='submit'>{'Submit'}</button>
      </form>
    </div>
  );

}

export default Function;