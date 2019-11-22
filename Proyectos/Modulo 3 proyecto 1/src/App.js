import React from 'react';
import './App.css';
import { TextInput, Button } from './Componentes2';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TextInputDisabled: false
        };
    }

handleClick = () =>{
    const { TextInputDisabled } = this.state;
    this.setState({ TextInputDisabled: !TextInputDisabled});
}


render() {
    const { TextInputDisabled } = this.state;
    return (
        <div className= "App">
            <TextInput disabled={TextInputDisabled}/>
            <Button onClick={this.handleClick}/>
        </div>
    )
}
        
    
}

export default App;