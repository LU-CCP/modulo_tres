import React, { Component } from 'react';
const Instructions = () => {
    useEffect(() => {
    console.log('Instructions componenDidMount')

    return() => {
        console.log('Instructions componentWillUnmount')
    }
}, [])

    return (
        <p>
            Edit <code>src/App.js</code> and to reload
        </p>
    );

}
