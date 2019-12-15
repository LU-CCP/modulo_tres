import React, { memo, useState, useCallback } from 'react';

import logo from './logo.svg';
import './App.css';

import Hyperlink from './HyperlinkHooks';
import Instructions from './InstructionsHooks';

const App = () => {
  const [showInstructions, setShowInstructions] = useState(true);

  const handleHide = useCallback(() => {
    setShowInstructions(false);
  });
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

export default memo(App);
