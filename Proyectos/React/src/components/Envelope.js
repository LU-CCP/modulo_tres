import React from 'react';
import AddressLabel from './AddressLabel';
import Estampilla from '../logo.svg';

class Envelope extends React.Component{

    render(){
        const { toPerson, fromPerson } = this.props;
        return(
            <div>
                <div className = 'App-align-left'>
                    <div>
                        <AddressLabel
                            nombre = {toPerson.nombre}
                            direccion1 = {toPerson.direccion1}
                            direccion2 = {toPerson.direccion2}
                        />
                    </div>
                    <div className='App-align-right'> 
                        <img src={Estampilla} alt = 'estampilla'/> 
                    </div>
                </div>
                
                <div className = 'App-align-center'>
                    <AddressLabel
                        nombre = {fromPerson.nombre}
                        direccion1 = {fromPerson.direccion1}
                        direccion2 = {fromPerson.direccion2}
                    />
                </div>
                
            </div>

           
        );
    }
}

export default Envelope;