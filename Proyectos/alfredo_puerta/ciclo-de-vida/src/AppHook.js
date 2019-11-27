import React, { useEffect, useState, useRef, memo } from 'react';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const _varGlobal = useRef('');
  const [value, setValue] = useState('Learn React');
  const [setCompare] = useState('');

  // componentDidMount()
  useEffect(() => {
    console.log('componentDidMount');
    setTimeout(() => {
      console.log('setState');
      setValue('Learn React Now!');
    }, 3000);
    setTimeout(() => {
      _varGlobal.current = 'Please';
    }, 4000);
    setTimeout(() => {
      console.log('setState compare');
      setCompare('');
    }, 5000);
  }, [setCompare]);

  // componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // component solo cuando vuelva cambia
  useEffect(() => {
    console.log('componentDidUpdate value', value);
  }, [value]);

  return (
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
          {`${value} ${_varGlobal.current}`}
        </a>
      </header>
    </div>
  );
};

// equivalente a ShouldComponentUpdate
export default memo(App);
