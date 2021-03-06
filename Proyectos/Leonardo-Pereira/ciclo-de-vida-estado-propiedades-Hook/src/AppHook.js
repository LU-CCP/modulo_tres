import React ,{useState,memo}from 'react';
import logo from './logo.svg';
import './App.css';
import HyperlinkHook from './HyperlinkHook';
import InstructionsHook from './InstructionsHook';
import Hola from './hola';


const AppHook=()=>{

    const [showInstructions, setshowInstructions] = useState(true);

    const  handleHide =()=>{

        setshowInstructions(false);
    }

    return(

        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {showInstructions && <InstructionsHook />}
          <HyperlinkHook onHide={handleHide} showInstructions={showInstructions} />
          <Hola></Hola>
        </header>

        



        </div>
    )


}

export default memo(AppHook);


