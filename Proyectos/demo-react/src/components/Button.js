import React, { Component } from 'react';

class Button extends Component {

    handleClick = () => {
        const { onClick} = this.props;
        onClick();   
    }

    render(){
        return( 
            <button onClick={this.handleClick}>
                {'Soy un botón que hace algo'}
                </button>
        )
    }
}

export default Button;