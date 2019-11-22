import React, { Component } from'react';

class Button extends Component {

    handleClick = () => {
        const {onClick} = this.props;
        //Antes: alert('Wow ¡Funciona!');
        onClick();
    }

    render() {
        return(
            <button onClick={this.handleClick}>
                {'Press me'}
            </button>
        )
    }
}

export default Button;