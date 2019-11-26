import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
//import Instructions from './Instructions';

const Instructions =()=>{

    const [showInstructions, setShowInstructions] = useState(true);

 useEffect(() => {
     console.log('Instructions ComponentDidMount')

        return () =>console.log('Instructions componentWillUnmount')
      }, []);

  
      const handleHide = () => {
        setShowInstructions(false);
      }

  return(
    <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
)
}





export default Instructions;