import React, { Component } from 'react';

class Instructions extends Component {
  componentWillUnmount() {
    console.log('Instructions componentWillUnmount');
  }

  render() {
    return (
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    );
  }
}

export default Instructions;
