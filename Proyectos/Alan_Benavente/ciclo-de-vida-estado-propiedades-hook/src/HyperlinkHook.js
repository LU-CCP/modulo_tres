import React, {memo,useRef,useState,useEffect} from 'react';

const Hyperlink=(props)=>{
    const _varGlobalRef = useRef('');
    const[value,setValue]= useState('Learn React');
    const[compare,setCompare]= useState('');
    const[showInstructions,setShowIstructions]= useState(true);

    useEffect(()=>{
        if (showInstructions !== props.showInstructions) {
            setShowIstructions (props.showInstructions)           
        }
    },[props.showInstructions])
    useEffect(()=>{
        console.log('Hyperlink componentDidMount')
    setTimeout(() => {
      console.log('Hyperlink setState')
      setValue('Learn React Now!');
    }, 3000)
    setTimeout(() => {
      _varGlobalRef.current = 'Please';
      console.log('Hyperlink forceUpdate')
    }, 4000)
    setTimeout(() => {
      console.log('Hyperlink setState compare')
      setCompare('');
      const { onHide }  = props;
      onHide();
    }, 5000)
    },[])
    return(
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

export default memo(Hyperlink); //shouldComponentUpdate