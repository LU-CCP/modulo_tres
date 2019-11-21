import React from 'react';
import AddresLabel from './addresLabel';


class Envelope extends React.Component{

    constructor(props){

        super(props); 

    }

    render(){

        const {toPerson,fromPerson}=this.props;
        return(

            <div className="Container">

                <div className="Container-superior">

                        <div className="Direccion">

                            <AddresLabel

                            nombre={fromPerson.nombre}
                            direccion1={fromPerson.direccion1}
                            direccion2={fromPerson.direccion2}
                            />

                        </div>
                        <div className="Estampilla">

                        <img src="bojack.png"  />

                            
                        </div>

                </div>
                <div className="Container-inferior">

                    <AddresLabel
                    nombre={toPerson.nombre}
                    direccion1={toPerson.direccion1}
                    direccion2={toPerson.direccion2}
                    />


                </div>



            </div>
           
           
        )
    }
}

export default Envelope;