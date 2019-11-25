import React, {memo,useState} from 'react'
import logo from './logo.svg'
import './App.css'

import Hyperlink from './HyperlinkHooks';
import Instructions from './InstructionsHooks';

const App =()=> {
    const [value, setValue] = useState(true);
  
    const handleHide = () => {
      setValue( false );
    }
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {value && <Instructions />}
            <Hyperlink onHide={handleHide} showInstructions={value} />
          </header>
        </div>
      );
    
  }
  
  export default memo(App);