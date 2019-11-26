import React, { useEffect, useRef, useState, memo } from 'react';

const Hyperlink = (props) => {
    const _varGlobalRef = useRef('');
    const [value, setValue] = useState('Lean React');
    const [compare, setCompare] = useState('');
    const [showInstructions, setShowInstructions] = useState(true);
    
    //Es equivalente a componentDidUpdate
    useEffect(() => {    
        if (showInstructions !== props.showInstructions) {
            setShowInstructions(props.showInstructions)
        }
    }, [props.showInstructions])

    //Equivalente a componentDidMount
    useEffect(() => {    
        console.log('Hyperlink componentDidMount')
        setTimeout(() => {
        console.log('Hyperlink setState')
        setValue( 'Learn React Now!');
        }, 3000)
        setTimeout(() => {
        _varGlobalRef.current = 'Please';
        }, 4000)
        setTimeout(() => {
        console.log('Hyperlink setState compare')
        setCompare('');
        const { onHide } = props;
        onHide();
        }, 5000)
    }, [])


    useEffect(() => {
        console.log('Hyperlink componentDidUpdate')
    })

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
}

export default memo(Hyperlink);