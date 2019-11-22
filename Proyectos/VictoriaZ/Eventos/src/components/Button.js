import React, {Component} from 'react';  //para no tener que acceder con React.Component

class Button extends Component { //si no se declara lgun estado no es necesario el constructor
    handleClick=()=>{
        const {onClick}=this.props;
        onClick();  //del handleClick en App.js
        //alert('Wow')
    }
    render (){
        return(
            <button onClick={this.handleClick}>
                {'Press me'}
            </button> 
        )
    }
}

export default Button;