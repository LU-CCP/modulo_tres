import React from 'react';
import AddressLabel from './AddresLabel'
import { isPipelineTopicExpression } from '@babel/types';
class Envelope extends React.Component {
    constructor(props){
        super(props);}
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        const {toPerson, fromPerson} = this.props;
        return(
        <div className = "Container-Evelope">
            <div className = "Container-Superior">
                <div className = "Direccion">
                <AddressLabel
                  nombre = { toPerson.nombre}
                  Direccion1 ={toPerson.Direccion1}
                  Direccion2 ={toPerson.Direccion2}
                />
        
                    <div className = "estampisha">
                </div>
                <div className = "container-inferior">
               <AddressLabel
               nombre = { fromPerson.nombre}
               Direccion1 ={fromPerson.Direccion1}
               Direccion2 ={fromPerson.Direccion2}
               />
             </div>
        </div>
        </div> 
    </div> 

        )
    } 
}
export default Envelope