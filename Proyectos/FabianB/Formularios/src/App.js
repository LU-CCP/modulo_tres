import React from 'react'
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  handleChange = (key) => ({ target: { value } }) => {
    console.log(key, this.state, value)
    this.setState({ [key]: value });

  }

  handleSubmit = () => {
    const { firstName, lastName, email } = this.state;
    alert(`${firstName} ${lastName} ${email}`)

  }


  render() {
    const { firstName, lastName, email } = this.state;
    return (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
          <input required value={firstName} onChange={this.handleChange('firstName')} />
          <input required value={lastName} onChange={this.handleChange('lastName')} />
          <input required type='email' value={email} onChange={this.handleChange('email')} />
          <button type='submit'>{'Submit'}</button>
        </form>
      </div>
    )
  }
}

export default App;

