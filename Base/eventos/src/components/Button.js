import React, { Component } from 'react';

class Button extends Component {
    handleClick = () => {
        const { onClick } = this.props;
        onClick();
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {'Press me'}
            </button>
        )
    }
}

export default Button;
