import React, {useEffect} from 'react'

const Instructions = () => { 
    useEffect(() => {
        console.log('instructions componentdidmount');

        return () => {
            console.log('instructions componentwillunmount')
        }        
    }, []);
    
    return(
        <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    )
      
}


export default Instructions;

