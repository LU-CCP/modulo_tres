import React from 'react';

class Instructions extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log('props');
    }

    render(){
        const { nombre, edad, hacerClick } = this.props;
        return(
            <div>
                <p>{`Hola ${nombre} mi edad es ${edad}`}</p>
                <button onClick={() => hacerClick(nombre)}>
                click
                </button>
            </div>
        )
    }
}

export default Instructions;


