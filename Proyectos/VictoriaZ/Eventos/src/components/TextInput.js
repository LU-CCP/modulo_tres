import React, {Component} from 'react';  //para no tener que acceder con React.Component

class TextInput extends Component {
    constructor(props){
        super(props);
        this.state={
            value: ''
        }
    }
   // this.handleChange.bind(this);

                //target almacena el valor del elemento entre otras cosas
    handleChange=({target:{value}})=>{
        console.log(this.state.value, value)
        this.setState({value});
    }

    render (){
        const {value} = this.state;
        const {disabled}=this.props;
        return(
            <input value={value} disabled={disabled} onChange={this.handleChange} />
           // <input></input>
        )
    }

}

export default TextInput;