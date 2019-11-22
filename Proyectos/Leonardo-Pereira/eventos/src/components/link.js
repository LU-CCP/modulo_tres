import React from 'react';

class Hyperlink extends React.Component{

    render(){

        return(
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
              Link
            {/* { `${this.state.value} ${this._varGblobal}`} */}
          </a>
           
        )
    }
}

export default Hyperlink;