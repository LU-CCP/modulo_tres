import React,{useCallback,useState} from 'react';
import logo from './logo.svg';
import './App.cs';

import Hyperlink from './HyperlinkHook';
import  Instructions from './InstructionsHook';

const App =()=>{
    const [showIntructions,setShowInstructions]= useState(true);

    const handleHide = useCallback(()=>{
        setShowInstructions(false);
    },[])
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {showIntructions && <Instructions/>}
                <Hyperlink onHide={handleHide} showIntructions={ShowInstructions}/>

            </header>
        </div>
    
    );
}
export default App;