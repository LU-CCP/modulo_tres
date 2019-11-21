import React from 'react';
class Instruction extends React.Component{

    constructor(props){

        super(props); //permite que el componente hijo acceda a las propiedades del padre

    }

    componentDidMount(){

        console.log(this.props)
    }

 

    render(){

        const{nombre,edad,hacerClick}=this.props;

        return(
            <div>

                <p>  {`hola ${nombre} tu edad ${edad}`}</p>
                <button onClick={()=>hacerClick(nombre)}>boton click</button>



            </div>
           

            
            
        )
    }
}

export default Instruction;