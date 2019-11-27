import React, { Component,memo,useEffect,useState,useRef,setState} from 'react';

const HyperlinkHook=(props)=>{

    const [value, setValue] = useState('Lean React')
    const _varGlobalRef= useRef('');
    const [compare, setCompare] = useState('')
    const [showInstructions,setshowInstructions]=useState(true)


    useEffect(()=>{

        if(showInstructions!==props.showInstructions){

            setshowInstructions(props.showInstructions)
        }
    },[props.showInstructions])


    useEffect(()=>{ //ComponentDidMount


        console.log('Hyperlink componentDidMount')
        setTimeout(() => {
          console.log('Hyperlink setState')
          setValue('Learn React Now!')
        }, 3000)
        setTimeout(() => {
          //_varGlobalRef = 'Please';
          setValue('Learn React Now! please')
          console.log('Hyperlink forceUpdate')
          
        }, 4000)
        setTimeout(() => {
          console.log('Hyperlink setState compare')
          //setState('');
          const { onHide }  = props;
          onHide();
        },5000)

 

    }, [])

    useEffect(()=>{

        console.log('Hyperlink componentUpdate')
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

export default memo(HyperlinkHook); //equivale a la comparacion