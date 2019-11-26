import React, { memo, useEffect, useState, useRef } from 'react';

const Instruction = () =>{
  useEffect(() =>{
    console.log('Instructions componentDidMount')
    return () =>{
      console.log('Instructions componentDidUnmount')
    }
  },[])
    return (
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    );
}

export default memo(Instruction);
