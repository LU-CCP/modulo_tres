import React from 'react';

class Hyperlink extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         nombre: 'hernan'
    //     }
    // }

    render(){
        return(
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >

            {` Learn React `}
            
            </a>
        );
    }
}

export default Hyperlink;