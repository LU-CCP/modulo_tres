import React,{memo, useEffect,useState,useRef} from 'react';
import logo from './logo.svg';
import './App.css';

const App =()=>{
    const _varGlobalRef = useRef('');
    const[value,setValue]= useState('Learn React');
    const[compare,setCompare]= useState('Learn React');
// ComponentDidMount
    useEffect(()=>{
        console.log('componentDidMount')
    setTimeout(() => {
      console.log('setState')
      setValue('Learn React Now!');
    }, 3000)
    setTimeout(() => {
      _varGlobalRef.current = 'Please';
    }, 4000)
    setTimeout(() => {
      console.log('setState compare')
      setCompare('');
    }, 5000)
    },[]);
//ComponentDidUpdate
useEffect(()=>{

},);
//ComponentDidUpdate only for value
useEffect(()=>{

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
            {`${value} ${_varGlobalRef.current}`}
          </a>
        </header>
      </div>
    )
}

export default memo(App); //el boolean de memo es contrario a shouldComponentUpdate
