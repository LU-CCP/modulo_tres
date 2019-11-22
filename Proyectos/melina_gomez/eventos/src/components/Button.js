import React, {Component } from "react" ;
class Button extends Component{
    handleClick = () => {
        const {onClick} = this.props;
        onClick();
    }
    render() {
        return (
            <button onClick = {this.handleClick}>
                {'soy un boton'}
            </button>

        )
    }
}
export default Button;