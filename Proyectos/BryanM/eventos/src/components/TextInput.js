import React, { Component } from 'react'

class TextImput extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = ({ target: { value} } ) => {
        console.log(this.state.value, value)
        this.setState( {value} );
    }

    render(){
        const { value } = this.state;
        const { disabled } = this.props;
        return (
            <input value={value} disabled={disabled} onChange={this.handleChange}></input>
        )   
    }

}

export default TextImput;