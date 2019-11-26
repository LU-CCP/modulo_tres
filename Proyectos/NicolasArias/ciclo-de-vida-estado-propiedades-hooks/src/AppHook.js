import React, { useCallback, useState, useEffect, memo } from 'react';
import logo from './logo.svg';
import './App.css';
import Instructions from './InstructionsHook';
import Hyperlink from './HyperlinkHook';


const App = () =>{
    const [showInstructions, setShowInstructions] = useState(true);

    const handleHide = useCallback(() => {
        setShowInstructions(false);
    }, []);

    return( //Equivalente al render
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {showInstructions && <Instructions />}
          <Hyperlink onHide={handleHide} showInstructions={showInstructions} />
        </header>
        </div>
    );
}

//Equivalente a shouldComponentUpdate y PureComponent
export default memo(App, (false));