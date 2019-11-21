import React from 'react';

class AddressLabel extends React.Component{

    render(){
        const { nombre, direccion1, direccion2 } = this.props;
        return(
            <div>
                <p> {nombre} </p>
                <p> {direccion1} </p>
                <p> {direccion2} </p>
            </div>
        );
    }
}

export default AddressLabel;