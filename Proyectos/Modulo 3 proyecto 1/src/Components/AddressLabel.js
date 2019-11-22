import React from 'react';


class AddressLabel extends React.Component{

    componentDidMount(){
        console.log('props');
    }

    render(){
        const {nombre, direccion1, direccion2} = this.props;
        return(
            <div>
                <div>
                  <p className="App-link">{`${nombre}`}</p>
                  <p className="App-link">{`${direccion1}`}</p>
                  <p className="App-link">{`${direccion2}`}</p>
                </div>
            </div>

        )
    }
}

export default AddressLabel;