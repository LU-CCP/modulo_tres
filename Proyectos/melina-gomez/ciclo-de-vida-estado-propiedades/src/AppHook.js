import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Hyperlink from './HyperlinkHook';
import Instructions from './InstructionsHook';

const App = () => {
    const [showInstructions,setShowInstruccions] = useState(true)

    const handleHide = () => {
        setShowInstruccions(false)
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {showInstructions && <Instructions />}
          <Hyperlink onHide={handleHide} showInstructions={showInstructions} />
        </header>
      </div>
    );
  }
   
 

export default App ;