import React, { memo, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Hyperlink from './HyperlinkHook';
import Instructions from './instructionsHook';

const App = () => {
    const[showInstructions, setShowInstructions] = useState(true);

    const handleHide = () => {
        setShowInstructions(false);
    }

    return (
        <div className="App">
            <header className="App-logo" alt="logo" >
            <img scr={logo} className="App-logo" alt="logo" />
            {showInstructions && <Instructions/>}
            <Hyperlink onGide={handleHide} showInstructions={showInstructions}/>
            </header>
        </div>
    );
}