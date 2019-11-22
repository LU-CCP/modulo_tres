import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      firstname: '',
      lastname: ''
    }

  }

  handleChange = (key) => ({ target: { value }}) =>{
    console.log(key, this.state, value)
    this.setState({ [key]: value });
  }

  handleSubmit = () =>{
    const { firstname, lastname, email } = this.state;
    alert(`${firstname} ${lastname} ${email}`)
  }

  render() {
    const { firstname, lastname, email } = this.state;
    return (
      <div className="App">
        <form className="Form" onSubmit={this.handleSubmit}>
          <input required value = {firstname} onChange={this.handleChange('firstname')}/>
          <input required value = {lastname} onChange={this.handleChange('lastname')}/>
          <input required  type='email' value = {email} onChange={this.handleChange('email')}/>
    <button type='submit'>{'Submit'}</button>
        </form>
      </div>
    );
  }
}

export default App;
