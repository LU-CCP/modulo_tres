import React from 'react';

class Instructions extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log(this.props)
    }

    render() {
        const { nombre, edad } = this.props;
            return (
            <p>{`Hola Pepe${nombre} tu edad es ${edad}`}</p>
                )
    }
}

export default Instructions;