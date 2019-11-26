import React, { memo, useEffect, useState, useRef } from 'react';

import logo from './logo.svg';
import './App.css';

// const arr = [1, 2];
// const [uno, dos] = arr

const App = () => {
  const _varGlobalRef = useRef('');
  const [value, setValue] = useState('Learn React');
  const [compare, setCompare] = useState('');

  // componenDidMount
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

  // componenDidUpdate
  useEffect(() => {
    console.log('componentDidupdate');
  }, []);

  // componenDidUpdate solo cuando value cambia
  useEffect(() => {
    console.log('componentDidupdate value', value);
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
          {`${value} ${_varGlobalRef.current}`}
        </a>
      </header>
    </div>
  );
};

// equivalente a shouldComponentUpdate y pureComponent
export default memo(App);
