import React from 'react';
import AddressLabel from './AddressLabel';

class Envelope extends React.Component { //componente padre es App.js
    constructor(props){
        super(props); //permite acceder a las propiedades del padre
    }


    render (){
        const{toPerson, fromPerson}=this.props
        return (   
            <div className="Caja">
                <div className="Container-Superior"> 
                    <div  className="Direccion">
                        <AddressLabel
                          nombrePersona= {toPerson.nombrePersona}
                          direccion1= {toPerson.direccion1}
                          direccion2={toPerson.direccion2}
                        />

                        
                    </div>
                    <div  className="Estampilla2">
                        bla
                    </div>
                </div>


                <div  className="Container-Inferior">
                <AddressLabel
                          nombrePersona= {fromPerson.nombrePersona}
                          direccion1= {fromPerson.direccion1}
                          direccion2={fromPerson.direccion2}
                        /> 
                </div>
                
            
            </div>
        

           )
    }

}


export default Envelope; 