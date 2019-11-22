import React from 'react'; //Se importa react

class Instructions extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     nombre: 'hernan'
        // }
    }

    componentDidMount(){
        console.log(this.props)
    }

    render(){

        const { nombre, hacerClick } = this.props

        return(
            <div>
                <button onClick = {() => hacerClick(nombre)}>
                    click
                </button>
                
                <p>{`Hola ${nombre}`}</p>
            </div>
        );
    }
}

export default Instructions; //Importa por defecto el archivo js