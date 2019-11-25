import React, {useEffect} from 'react';

const Instruction = () => {


    useEffect (()=>{
        return() => {

            console.log('Instructions componentWillUnmount')

        }
        

    },[]);


return(

    <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>

)
}
export default Instruction;
