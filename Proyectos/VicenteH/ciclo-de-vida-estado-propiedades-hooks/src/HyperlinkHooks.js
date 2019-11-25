import React, {memo, useEffect, useState, useRef} from 'react'

const Hyperlink = (props) => {  
    const _varGlobalRef = useRef('');
    const [value , setValue] = useState('Learn React')
    const [compare , setCompare] = useState('')
    const [showInstructions , sethowInstructions] = useState(true)

    useEffect(() => {
        console.log('Hyperlink getDerivedStateFromProps', props.showInstructions, showInstructions);
        if (showInstructions !== props.showInstructions) {
            sethowInstructions(props.showInstructions)
          }
    }, [props.showInstructions])

    useEffect(() => {
        console.log('hyperlink componentDidMount')
        setTimeout(() => {
          console.log('setState')
          setValue('Learn React Now!');
        }, 3000)
        setTimeout(() => {
          _varGlobalRef.current = 'Please';
        }, 4000)
        setTimeout(() => {
          console.log('hyperlink setState compare')
          setCompare('');
          const { onHide } = props;
          onHide();
        }, 5000)
    }, [])

    useEffect(() => {
        console.log('hyperlink componentdidupdate')
    });

    console.log('hyperlink render')  
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
    )

}



//shouldcomponent update recordad que memo toma lo contrario ya que pregunta al reves 
export default memo(Hyperlink)