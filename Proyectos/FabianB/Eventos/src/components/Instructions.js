import React from 'react';

class Instructions extends React.Component {

    constructor(props) {
        super(props);

    }
    componentDidMount() {

        console.log(this.props)
    }




    render() {
        const { nombre, edad, hacerClicks } = this.props;
        return (<div>

            <button onClick={() => hacerClicks(nombre)}>
                click
            </button>
            <p> Hola {nombre} tu edad es {edad}</p>
        </div> )
    }


}

export default Instructions