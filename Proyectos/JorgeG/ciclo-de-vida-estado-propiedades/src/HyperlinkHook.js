import React, { memo, useEffect, useState, useRef } from 'react';

const Hyperlink = (props) =>{
    const _varGlobalRef = useRef('');
    const [value, setValue] = useState('Learn React')
    const [compare, setCompare] = useState('Learn React')
    const [showInstructions, setShowInstructions] = useState(true)

    useEffect(() => {
      console.log('Hyperlink getDerivedStateFromProps', props.showInstructions, showInstructions);
      if(showInstructions !== setShowInstructions){
        setShowInstructions(props.showInstructions)
      }  
    },[props.showInstructions])

    useEffect(() =>{
      console.log('Hyperlink componentDidMount')
      setTimeout(() => {
        console.log('Hyperlink setState')
        setValue('Learn React Now!');
      }, 3000)
      setTimeout(() => {
        _varGlobalRef.current = 'Please';
      }, 4000)
      setTimeout(() => {
        console.log('Hyperlink setState compare')
        setCompare('');
        const { onHide }  = props;
        onHide();
      }, 5000)
    },[])

    useEffect(() => {
      console.log('Hyperlink componentDidUpdate')
    })

    console.log('Render')
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
    );
}

export default memo(Hyperlink);















