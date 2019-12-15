import React, { useState, useRef, useEffect, memo } from 'react'; // useRef:almacena en memoria algo, no se referencia cada vez

import logo from './logo.svg'; // useeffect se dispara en cada render, eq a los componentdidmount...
import './App.css'; // memo compara como un should component update

// const arr=[1,2];
// const [uno,dos]=arr;  destructuring de arreglos

// componente a traves de funciones
// this.state.value no reconoce el this pq ese se usa en clases, hay que transformarlo a funciones
const App = () => {
  // estados ya no se usan como objetos, sino q como variables individuales
  const _varGlobalRef = useRef(''); // objeto de referencia para acceder o editar su valor se usa current
  const [value, setValue] = useState('Learn React'); // primer arg estado y segundo fx cambia el estado (equivalente al setState)
  const [setCompare] = useState('');

  // array vacio equivalente al componentDidMount()
  useEffect(() => {
    console.log('componentDidMount');
    setTimeout(() => {
      console.log('setState');
      setValue('Learn React Now!');
    }, 3000);
    setTimeout(() => {
      _varGlobalRef.current = 'Please';
    }, 4000);
    setTimeout(() => {
      console.log('setState compare');
      setCompare('');
    }, 5000);
  }, [setCompare]);
  // componentDidUpdate, useEffect se dispara al comienzo, si no quiero q pase se puede usar una var global
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  useEffect(() => {
    // solo cuando value cambia
    console.log('componentDidUpdateValue', value);
  }, [value]);

  return (
    // equivalente al render, copiar aqui lo del render en App.js
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {`${value} ${_varGlobalRef.current}`}
        </a>
      </header>
    </div>
  );
};

export default memo(App); // shouldComponentUpdate tb se le puede pasar la funcion como segundo argumento, si retorna falso se actualiza.son iguales? false-> actualiza
