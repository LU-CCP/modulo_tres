import React from 'react';
import AddresLabel from './AddressLabel';

class Envelope extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {  const {fromPerson,toPerson} = this.props;
        return(
           <div className = "Container-Envelope">
               <div className = "Container-Superior">
               <div className = "Direccion"> 
               </div>
               <AddresLabel
            nombre = {fromPerson.nombre}
            direccion1 = {fromPerson.direccion1}
            direccion2 = {fromPerson.direccion2}
        /></div>
        <div className = "Estampilla">
        <div className = "Estampa">
        <div className = "Container-Inferior">
        <div><AddresLabel
             nombre = {toPerson.nombre}
             direccion1 = {toPerson.direccion1}
             direccion2 = {toPerson.direccion2}
         /></div>
         </div>
         </div>
         </div>
         </div>
    
        
         

        )
    }
}

export default Envelope;