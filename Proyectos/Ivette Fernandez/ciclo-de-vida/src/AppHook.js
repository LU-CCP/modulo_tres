import React, { useState, useRef, useEffect, memo } from 'react';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [value, setValue] = useState('Learn React');
  const [setCompare] = useState('');
  const _varGlobalRef = useRef('');

  useEffect(() => {
    console.log('componentDidMount');
    setTimeout(() => {
      console.log('setState');
      setValue('Learn React Now!');
    }, 3000);
    setTimeout(() => {
      _varGlobalRef.current = 'Please';
      console.log('forceUpdate');
    }, 4000);
    setTimeout(() => {
      console.log('setState compare');
      setCompare('');
    }, 5000);
  }, [setCompare]); // es equivalente a componentDisMount()

  useEffect(() => {
    console.log('componentDidUpdate');
  }); // es equivalente a componentDisUpdate()

  useEffect(() => {
    console.log('componentDidUpdate', value);
  }, [value]); // es equivalente a componentDisUpdate(), solo para  value

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

export default memo(App); // Equivalente a shouldComponetUpdate (El boleano que retorna memo es lo contrario de shoulComponentUpdate)
