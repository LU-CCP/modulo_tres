import React, { useState, useRef, useEffect, memo } from 'react';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const _varGlobalRef = useRef('');
  const [value, setValue] = useState('Learn React'); // Propiedad y set (en paréntesis el valor)
  const [setCompare] = useState('');

  // Equivalente al componentDidMount
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

  // Equivalente al componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // Equivalente al componentDidUpdate solo cuando value cambia
  useEffect(() => {
    console.log('componentDidUpdateValue', value);
  }, [value]);

  return (
    // Equivalente al render
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

// Equivalente a shouldComponentUpdate y PureComponent
export default memo(App);
