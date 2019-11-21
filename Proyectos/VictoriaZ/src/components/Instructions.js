import React from 'react';

class Instructions extends React.Component { //componente padre es App.js
    constructor(props){
        super(props); //permite acceder a las propiedades del padre
    }
    componentDidMount(){
        console.log(this.props)
    }

    render (){
        const{nombre, edad, hacerClick}=this.props
        return (
            <div>
            <button onClick={()=> hacerClick(nombre)}>
                click
            </button>
            
            <p>{`Hola ${nombre} edad ${edad}`}</p>
           </div>
        
           )
    }

}


export default Instructions; 