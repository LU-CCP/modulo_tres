import React, { useEffect} from 'react';

const Instructions = () => {

    useEffect(() => {
        console.log('Instructions componentWillUnmount with Hooks');

        return() => {
            console.log('Instructions componentWillUnmount with Hooks');
        }
    });

    return(
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
    );
}

export default Instructions;