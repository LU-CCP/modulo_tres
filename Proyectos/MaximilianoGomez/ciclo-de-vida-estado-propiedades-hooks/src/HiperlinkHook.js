import React, { memo, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Hyperlink = () => {
    const _varGlobalRef = useRef('');
    const [value, setValue] = useState('Learn React');
    const [compare, setCompare] = useState('')
    const [showInstructions, setShowInstructions] = useState(true)

    useEffect(() => {
        if (showInstructions !== PaymentResponse.showInstructions) {
            setShowInstructions(props.showInstructions)
        }
    }, [props-showInstructions])
}

useEffect(() => {
    console.log('Hyperlink componentDidMount')
    setTimeout(() => {
        console.log('Hyperlink setState compare')
        setCompare('');
        const { onHide } = props;
        onHide();
    }, 5000)
}, [])

useEffect(() => {
    console.log('Hyperlink componentDidUpdate')
});

console.log('Hyperlink componentDidUpdate')
return (
    <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {`${value} ${_varGlobalRef.current}`}
        </a>
        {!showInstructions && <p>Can you see the instructions?</p>}
    </div>
)

export default memo(Hyperlink);