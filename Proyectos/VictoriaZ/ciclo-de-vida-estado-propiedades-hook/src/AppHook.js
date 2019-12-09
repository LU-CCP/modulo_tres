// PARA HIPERLINK E INSTRUCCIONES
import React, { useState, useRef, useEffect, memo, useCallback } from 'react'; // useRef:almacena en memoria algo, no se referencia cada vez

import logo from './logo.svg'; // useeffect se dispara en cada render, eq a los componentdidmount...
import './App.css'; // memo compara como un should component update

import Hyperlink from './HyperlinkHook';
import Instructions from './InstructionsHooks';

const App = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  // const handleHide=()=> {  //esta siempre se va a redeclarar cuando se rendeeriza
  //     setShowInstructions(false);
  //     }

  const handleHide = useCallback(() => {
    // / se recrea solo cuando cambia algo de lo q se le pasa
    setShowInstructions(false);
  });

  return (
    // {showInstructions && <Instructions />}  primera if segunda retorno, cuando showInstructions es true hace lo sgdo sino sigue de largo
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {showInstructions && <Instructions />}
        <Hyperlink onHide={handleHide} showInstructions={showInstructions} />
      </header>
    </div>
  );
};

export default memo(App); // shouldComponentUpdate tb se le puede pasar la funcion como segundo argumento, si retorna falso se actualiza.son iguales? false-> actualiza
