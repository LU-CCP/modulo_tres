import React, { useEffect, memo, useState, useRef} from 'react';

const HyperlinkHook = (props) => {
    const _varGlobalRef = useRef('')
    const [value, setValue] = useState('Learn React')
    const [compare, setCompare] = useState('')
    const [showInstructions, setShowInstructions] = useState(true)

    useEffect(() => {
        if (showInstructions !== props.showInstructions){
            setShowInstructions(props.showInstructions)
        }
    }, [props.showInstructions])

    useEffect(() => {
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
    }, [])

    useEffect(() => {
        console.log('Hyperlink componentDidUpdate')
    }, [])

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

// shouldComponentUpdate recordar que memo retorna lo contrario ya que la pregunta es al reves
export default memo(HyperlinkHook);