import React from 'react';

class Hiperlink extends React.Component 
{   render () 
    {
        return (
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* {`${this.state.value}  ${this._varGlobal}`} */}
          </a>
        )
    }
}

export default Hiperlink;