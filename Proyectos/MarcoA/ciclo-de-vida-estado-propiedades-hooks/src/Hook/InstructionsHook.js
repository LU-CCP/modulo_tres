import React, { useEffect } from 'react';

const Instructions = () => {
    useEffect(() => {
        console.log('Instructions componentWillMount')

        return () => {
            console.log('Instructions componentWillUnmount')
        }
    }, []);


    return (
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
    );
}

export default Instructions;