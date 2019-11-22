import React, {Component} from 'react'

class Button extends React.Component{
  handleClick = () =>{
      const{ onClick} = this.props;
      onClick();
  }

render() {
    const {disabled} = this.props;
   

    return (
         <button onClick={this.handleClick}>
             {'Press me'}
             </button>
    )
}

}
export default Button;