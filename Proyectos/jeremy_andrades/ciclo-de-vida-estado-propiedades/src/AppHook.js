import React, {useCallback, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Hyperlink from './HyperlinkHook';
import Instructions from './InstructionsHook';

const App = () => {
const [showInstructions, setShowInstructions] = useState(true)

const handleHide = useCallback(() => {
    setShowInstructions(false);
}, [])

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {showInstructions && <Instructions />}
            <Hyperlink onHide={handleHide} showInstructions={showInstructions} />
          </header>
        </div>
    )    
}

export default App;