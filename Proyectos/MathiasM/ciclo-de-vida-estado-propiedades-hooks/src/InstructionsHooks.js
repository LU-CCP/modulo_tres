import React, { useEffect } from 'react';

const Instructions=()=> {
  useEffect(() => {
    return () => {
      console.log('componentDidUnmount');
    }
  }, []); 
    
    return (
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    );
  }
export default Instructions;