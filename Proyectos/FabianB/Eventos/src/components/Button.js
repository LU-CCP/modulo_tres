import React, { Component } from 'react';

class Button extends Component {
    handleClick = () => {
        const { onClick } = this.props;
        onClick();

    }

    render() {
        return (
            <button onClick={this.handleClick} >
                {'Manoseame'}
            </button>
        )
    }
}


export default Button;
