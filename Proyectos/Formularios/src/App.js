import React from 'react';
//import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      mail: ''
    };
  }

  handleChange = (key) => ({ target: {value} }) => {
    console.log(key, this.state, value)
    this.setState({ [key]: value });
  }

  handleSubmit = () => {
    const {firstName, lastName, mail} = this.state;
    alert(`${firstName} ${lastName} ${mail}`);
  }

  render() {
    const {firstName, lastName, mail} = this.state;
    return (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
          <input required value={firstName} onChange={this.handleChange('firstName')} />
          <input required value={lastName}  onChange={this.handleChange('lastName')} />
          <input required type="email" value={mail}  onChange={this.handleChange('mail')} />
          <button type='submit'>{'Submit'}</button>
        </form>
      </div>
    );
  }
}

export default App;
