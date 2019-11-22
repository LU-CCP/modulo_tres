import React from 'react';
import AdressLabel from './AdressLabel';

class Envelope extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        const {toPerson, fromPerson } = this.props;
        return (
           <div>
               <AdressLabel
               fullName={toPerson.fullName}
               direccion1={toPerson.direccion1}
               direccion2={toPerson.direccion2}
               />
               <AdressLabel
               fullName={fromPerson.fullName}
               direccion1={fromPerson.direccion1}
               direccion2={fromPerson.direccion2}
               />
               </div>
        
        )
    }
}





export default Envelope