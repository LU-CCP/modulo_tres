import React from 'react';

class AddressLabel extends React.Component { //componente padre es App.js
    constructor(props){
        super(props); //permite acceder a las propiedades del padre
    }


    render (){
        const{nombrePersona, direccion1, direccion2}=this.props
        return (
            <div>            
            <p>{`${nombrePersona}`}</p>
            <p>{`${direccion1}`}</p>
            <p>{`${direccion2}`}</p>
           </div>
           )
    }

}


export default AddressLabel; 