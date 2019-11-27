import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hyperlink from './HyperlinkHook';
import Instructions from './InstructionsHook';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInstructions: true
    };
  }

  handleHide = () => {
    this.setState({ showInstructions: false });
  }

  render() {
    return;
  }
}

export default App;
