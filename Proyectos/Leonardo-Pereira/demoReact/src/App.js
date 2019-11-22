import React from 'react';
import logo from './logo.svg';
import './App.css';
import Instruction from './components/intructions';
import Hyperlink from './components/link';
import AddresLabel from './components/addresLabel'
import Envelope from './components/envelope'


class  App extends React.Component {

  constructor(props){

    super(props);
    this.state = {
      value: 'Learn React xD',
      compare: "" 
    };

    this._varGblobal="";

    console.log('constructor')
  }

  shouldComponentUpdate(nextProps,nextState){  //si no se implementa el componente siempre actualizara, aunque no hallan cambios
  console.log(nextProps);

    const {value, compare} = this.state;

    const should = nextState.value !== value || nextState.compare !== compare;

    console.log('shouldComponentUpdate',should)

    return should;


  }

  componentDidMount(){
    console.log('componentDidMount')
    setTimeout(()=>{

      this.setState({value: 'Learn React Now!'})

    },3000)

    setTimeout(()=>{

      this._varGblobal='please';
      console.log('orceUpdate');
      this.forceUpdate();

    },4000)

    setTimeout(()=>{

      console.log('setStat compare');
      this.setState({compare: ''} )

    },5000)
  }

  componentDidUpdate(){

    console.log('componentDidUpdate')
  }
 
 render(){ 
   console.log('render');//metodo principal para ser representado
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <Instruction 
            nombre= 'leonardo'
            hacerClick={(nombre)=>alert(nombre)}
            edad= {23}
            
            />  
          <Hyperlink/>
          <AddresLabel

          nombre='leonardo pereira'
          direccion1= 'av araucana #371'
          direccion2= 'av siempre viva #742'
          />

          <Envelope

              toPerson={{

                nombre:'leonardo pereira',
                direccion1:'av araucana #371',
                direccion2: 'av siempre viva #742'

                }
              }

              fromPerson={{

                nombre:'leonardo pereira',
                direccion1:'av araucana #371',
                direccion2: 'av siempre viva #742'

                }
              }
          
          />

          
          
        </header>
      </div>
    );
 }
}

export default App;
