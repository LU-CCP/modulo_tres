
import React, {memo, useEffect, useState, useRef} from 'react';
import logo from './logo.svg'
import './App.css'



const App = () => {
    const _varGlobalRef = useRef('');
    const [value, setValue] = useState('Ich bin Marco.');
    const [compare, setCompare] = useState('');

    //componentDidMount
    useEffect(() => {
        console.log('componentDidMount')
        setTimeout(() => {
          console.log('setState')
          setValue('Wie bitte?');
        }, 3000)
        setTimeout(() => {
          _varGlobalRef.current = 'Please';
        }, 4000)
        setTimeout(() => {
          console.log('setState compare')
          setCompare('');
        }, 5000)
    }, []);
    
    //componentDidUpdate
    useEffect(() => {
        console.log('componentDidUpdate')
    }, []);

    useEffect(() => {
        console.log('componentDidUpdate', value)
    }, [value]);
    
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hallo!, Wie heißen sie?
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${value} ${_varGlobalRef.current}`}
          </a>
        </header>
      </div>
    )
}

export default memo(App);