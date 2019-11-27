import React, { Component,useEffect,memo } from 'react';

const IntructionsHook=()=>{
useEffect(()=>{

  console.log('Instructions componentDidMount')

  return() =>{
    console.log('Instructions componentWillUnmount') //equivalente a willUnmont
  }

},[])



    return (
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      )

}


export default memo(IntructionsHook);