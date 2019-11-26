import React, {useState, useRef, useEffect, memo} from 'react';

const Hyperlink = (props) => {
    const [value, setValue] = useState('Learn React');
    const [compare, setCompare] = useState('');
    const [showInstructions, setShowInstructions] = useState(true);

    const _varGlobal = useRef('');

    useEffect(() => {
        if (showInstructions !== props.showInstructions) {
            setShowInstructions(props.showInstructions);
        }
    },[props.showInstructions]);

    useEffect(() => {
        console.log('Hyperlink componentDidMount')
        setTimeout(() => {
        console.log('Hyperlink setState')
        setValue(value);
        }, 3000)
        setTimeout(() => {
        _varGlobal.current = 'Please';
        console.log('Hyperlink forceUpdate')
        }, 4000)
        setTimeout(() => {
        console.log('Hyperlink setState compare')
        setCompare();
        const { onHide }  = props;
        onHide();
        }, 5000) 
    },[]);

     // ComoponentDidUpdate only value is updated
     useEffect(() => {
        console.log('ComoponentDidUpdate (value was updated)');
    });

    return(
        <div>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            {`${value} ${_varGlobal.current}`}
            </a>
            {!showInstructions && <p>Can you see the instructions?</p>}
      </div>
    );
}
// shouldComeponentUpdate recordar que memo retorna lo contrario ya que la pregunta es al revés
export default memo(Hyperlink);