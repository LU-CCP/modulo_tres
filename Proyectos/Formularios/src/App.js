import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName:''
    };
  }
  render(){
    const {firstName, lastName} = this.state;
    return (
    <div className="App">
      <form className = 'Form'>
      <input value = {firstName}/>
      <input value = {lastName}/>
      </form>
    </div>
  );
  }
}

export default App;
