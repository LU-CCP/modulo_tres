import React, {Component} from 'react';

class Button extends Component {
    handeClick = () => {
        const { onClick } = this.props;
        onClick();
    }
    render () {
        return (
            <button onClick={this.handeClick}>
                {'Tocame'}
            </button>

        )
    }
}

export default Button