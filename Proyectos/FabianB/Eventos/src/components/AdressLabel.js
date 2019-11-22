import React from 'react';

class AdressLabel extends React.Component {

    
    render() {
        const { fullName, direccion1, direccion2 } = this.props;
        return (<div  className="adress">

            
        <p>{fullName}</p>
        <p>{direccion1}</p>
        <p>{direccion2}</p>
        </div> )
    }

}


export default AdressLabel