import React, { useState, useCallback } from 'react';

// eslint-disable-next-line import/order
import logo from './logo.svg';
import './App.css';

import Hyperlink from './HyperlinkHook';
import Instructions from './InstructionsHooks';

const App = () => {
  const [showInstructions, setShowValue] = useState(true);

  const handleHide = useCallback(() => {
    setShowValue(false);
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {showInstructions && <Instructions />}
        <Hyperlink onHide={handleHide} showInstructions={showInstructions} />
      </header>
    </div>
  );
};

export default App;
