import React from 'react';


class AddressLabel extends React.Component{

    componentDidMount(){
        console.log('props');
    }

    render(){
        const {nombre2, direccion3, direccion4} = this.props;
        return(
            <div>
                <div>
                  <p className="App-link">{`${nombre2}`}</p>
                  <p className="App-link">{`${direccion3}`}</p>
                  <p className="App-link">{`${direccion4}`}</p>
                </div>
            </div>

        )
    }
}

export default AddressLabel;