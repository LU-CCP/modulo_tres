import React, {useState, useRef, useEffect, memo} from 'react';
import logo from './logo.svg'
import './App.css';


// const arr = [1,2];
// const [uno, dos] = arr;

const App = () => {
    const _varGlobal = useRef('a');
    
    const [value, setValue] = useState('Learn React');
    const [compare, setCompare] = useState('');

    // ComoponentDidMount
    useEffect(() => {
        console.log('componentDidMount')
        setTimeout(() => {
        console.log('setState');
        setValue({value});
        }, 3000)
        setTimeout(() => {
        _varGlobal.current = 'Please';
        }, 4000)
        setTimeout(() => {
        console.log('setState compare');
        setCompare();
        }, 5000)
    },[]);

    // ComoponentDidUpdate
    useEffect(() => {
        console.log('ComoponentDidUpdate');
    });

    // ComoponentDidUpdate only value is updated
    useEffect(() => {
        console.log('ComoponentDidUpdate (value was updated)');
    },[value]);

    return(
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${value} ${_varGlobal.current}`}
          </a>
        </header>
      </div>
    );
}

export default memo(App);
