// PARA HIPERLINK E INSTRUCCIONES
import React, { useEffect, memo } from 'react'; // useRef:almacena en memoria algo, no se referencia cada vez

import logo from './logo.svg'; // useeffect se dispara en cada render, eq a los componentdidmount...
import './App.css'; // memo compara como un should component update

const Instructions = () => {
  // componentWillUnmount()
  useEffect(() => {
    // pro: 2 en una misma

    console.log('Instructions componentDidMount');

    return () => {
      console.log('Instructions componentWillUnmount'); // cuando se destruye
    };
  }, []);

  return (
    // equivalente al render, copiar aqui lo del render en App.js
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
  );
};

export default memo(Instructions);
