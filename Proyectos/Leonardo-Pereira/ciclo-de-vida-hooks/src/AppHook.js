import React,{memo,useEffect,useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';

const App =()=>{

   // const arr =[1,2];

   // const [uno,dos] = arr;

    const _varGlobalRef= useRef('');

    const [value, setValue] = useState('Lean React')
    const [compare, setCompare] = useState()


    useEffect(()=>{ //equibalente a ComponentDidMount


        console.log('componentDidMount')
      setTimeout(() => {
        console.log('setState')

        setValue('Learn React Now!');

      }, 3000)
      setTimeout(() => {
        _varGlobalRef.current = 'Please';
        console.log('forceUpdate')
        
      }, 4000)
      setTimeout(() => {
        console.log('setState compare')
      setCompare('');
      }, 5000)

    }, []);



    useEffect(()=>{ //equibalente a ComponentDidUpdate

      console.log('componentDidUpdate')

    });

    useEffect(()=>{ //equibalente a ComponentDidUpdate cuando value cambia

      console.log('componentDidUpdate value')

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
            {`${value} ${_varGlobalRef.current} `}
          </a>
        </header>
      </div>
    )


}

export default memo(App); //equivale 