import React from 'react';

class AddresLabel extends React.Component{
constructor(props){
    super(props);
}

render(){
    const{ nombrePersona, direccion1, direccion2} = this.props;

return(
  <div className ="App-link">  
         <p> {`${nombrePersona}`} </p>   
         <p> {` ${direccion1} `} </p>
         <p> {`${direccion2} `} </p>
  </div>

)

}

}
export default AddresLabel;