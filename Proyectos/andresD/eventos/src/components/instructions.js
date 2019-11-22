import React from 'react';

class Instruction extends React.Component{
  constructor(props){
  super(props);
  }

  componentDidMount(){
    console.log(this.props)
}

      render(){
          const { nombre, edad, hacerClick } = this.props;
        

          return(
           <div><button onClick={() => hacerClick(nombre)}>
               clic
           </button> 
          <p>{`Hola ${nombre} ya tienes ${edad} puedes comprar alcohol  `}</p>
          </div>
          )
      }
    
 }

 export default Instruction;

