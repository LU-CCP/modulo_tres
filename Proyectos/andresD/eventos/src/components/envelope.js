import React from 'react';
import AddresLabel from './AdressLabel'

class Envelope extends React.Component{
 
constructor(props){
    super(props)
}

    render(){
     const { fromPerson, toPerson } = this.props;
        return(
    <div className='ContainerEnvelope'>   
         <div className="ContainerSuperior">
            <div className="Direccion">
            <AddresLabel
             nombrePersona={fromPerson.nombre}
             direccion1={fromPerson.direccion1}
             direccion2={fromPerson.direccion2}
            />
            </div>
            <div className= 'Estampilla'>
                <div className='Estampa'></div>

            </div>
            </div>
            
            
            
            <div className="ContnainerInferior">
            <div className="Direccion">
            <AddresLabel
            nombrePersona={toPerson.nombre}
            direccion1={toPerson.direccion1}
            direccion2={toPerson.direccion2}
            />
            </div>
             </div>
      </div>
        )
    }

}



export default Envelope;