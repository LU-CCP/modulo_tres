import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        };
    }

handleSubmit = () => {
    const { firstName, lastName, email } = this.state;
    alert(`${firstName} ${lastName} ${email}`)
}

handleChange = (key) => ({ target: {value} }) => {
    console.log(key, this.state, value)
    this.setState({ [key]: value });
}

render() {
    const { firstName, lastName, email } = this.state;
    return (
        <div className='App'>
        <form className='Form' onSubmit={this.handleSubmit} >
            <input required value={firstName} onChange={this.handleChange('firstName')} /* requiered pone un cartel que dice que no ha ingresado ningun texto en la caja de texto aun *//> 
            <input required value={lastName} onChange={this.handleChange('lastName')}/>
            <input required value={email} onChange={this.handleChange('email')}/>
            <button type='submit'>{'Submit'}</button>
        </form>
        </div>
    )
}
        
    
}

export default App;