import React from 'react';
import AddressLabel from './AddressLabel'
import AddressLabel2 from './AddressLabel'

class Envelope extends React.Component{

    componentDidMount(){
        console.log('props');
    }

    render(){
        const {toPerson, toFrom} = this.props;
        return(
            <div className= "Container-Envelope">
                <div className= "Container-Superior">
                    <div>
                    <AddressLabel
                    nombre= {toPerson.nombre}
                    direccion1= {toPerson.direccion1}
                    direccion2= {toPerson.direccion2}
                    />
                   </div>
                   <div>
                   <AddressLabel2
                    nombre= {toFrom.nombre}
                    direccion1= {toFrom.direccion1}
                    direccion2= {toFrom.direccion2}
                   />
                   </div>
                   </div>
            </div>
        )
    }
}

export default Envelope;