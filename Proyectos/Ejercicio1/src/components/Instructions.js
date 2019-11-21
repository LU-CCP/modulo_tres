import React from 'react';

class Instruction extends React.Component  
{
    constructor(props) 
    {
        super(props);
    }
    componentDidMount()
    {
        console.log(this.props);
    }
    render() 
    {
        const {nombre, edad, hacerClick} = this.props;
        return (
            <div>
            <button onClick = {() => hacerClick(nombre)}> 
            click</button>
            <p>{`Hola ${nombre}, mi edad es ${edad}`}</p>
            </div>
           
        )
    }
}

export default Instruction;