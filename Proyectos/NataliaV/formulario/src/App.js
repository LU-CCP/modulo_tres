import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      firstName: '',
      lastname:'',
      email:''
    };
  
  }
  handleChange =(key) =>({target: {value}})=>{
    console.log(key,this.state, value)
    this.setState({[key]: value});
    
  }
  handleSubmit =() =>{
    const {firstName,lastname,email}= this.state;
    alert(`${firstName} ${lastname} ${email}`)

  }

  
  render(){
    const {firstName ,lastname,email}=this.setState;
  
  return (
    <div className="App">
    <form className='Form' onSubmit={this.handleSubmit}>
    <input required value ={firstName} onChange={this.handleChange('firstName')}/>
    <input required value ={lastname} onChange={this.handleChange('lastName')}/>
    <input required type='email' value ={email} onChange={this.handleChange('email')}/>

  <button type='submit'>{'Submit'}</button>
    </form>
    </div>
  );
}
}

export default App;
