import React, { Component,useEffect,memo } from 'react';

const Hola=()=>{


    return(
        
      <div>

        <h1>HOLA MUNDO!</h1>
        <br></br>
        <button >Pulsame</button>

      </div>
       
    )
}

export default memo(Hola);