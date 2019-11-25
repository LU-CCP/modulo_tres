import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hyperlink from './HyperlinkHook';
import Instructions from './InstructionsHooks';

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
    const { showInstructions } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {showInstructions && <Instructions />}
          <Hyperlink onHide={this.handleHide} showInstructions={showInstructions} />
        </header>
      </div>
    );
  }
}

export default App;
