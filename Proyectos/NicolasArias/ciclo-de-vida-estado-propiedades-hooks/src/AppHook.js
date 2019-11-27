import React, { useCallback, useState, memo } from 'react';

import logo from './logo.svg';
import './App.css';
import Instructions from './InstructionsHook';
import Hyperlink from './HyperlinkHook';

const App = () => {
  const [showInstructions, setShowInstructions] = useState(true);

  const handleHide = useCallback(() => {
    setShowInstructions(false);
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

export default memo(App, false);
