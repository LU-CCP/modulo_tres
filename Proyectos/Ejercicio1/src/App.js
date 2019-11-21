import React from 'react';
import logo from './logo.svg';
import './App.css';
import Instruction from './components/Instructions';
import Hiperlink from './components/Hiperlink';
import AddressLabel from './components/AddressLabel';
import Envelope from './components/Envelope';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'Learn React',
      compare: ''
    };
    this._varGlobal = '';
    console.log('constructor')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nexProps')
    const {value,compare} = this.state;
    const should = nextState.value !== value || nextState.compare !== compare;
    console.log('shouldComponentUpdate', should)
    return should;
  }
  componentDidMount() {
    console.log('componentDidMount')
    setTimeout(() =>{
      console.log('setState')
      this.setState({value: 'Learn React Now'});
    },3000)
    setTimeout(() => {
      this._varGlobal = 'Please!'
      console.log('forceUpdate')
      this.forceUpdate();
    },4000)

    setTimeout(() => {
      console.log('setState compare')
      this.setState({compare:''});
    },5000)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render(){

    const to =
    {
      nombre:'Ivette Fernández',
      direccion1:'Rengo 1050',
      direccion2:'Concepción, Chile'
    };

    const from =
    {
      nombre:'Maria Loncomilla',
      direccion1:'Bilbao 779',
      direccion2:'Valdivia, Chile'
    };
    console.log('render')
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {/* <div><Instruction
        nombre = 'Ivette Fernández'
        edad = '24'
        hacerClick = { (nombre) => {
          alert(nombre)
        }}
       /></div>  */}
       {/* <div><Hiperlink/></div> */}
       {/* <div><AddressLabel
        nombre = 'Ivette Fernández'
        direccion1 = 'Rengo 1050'
        direccion2 = 'Concepción, Chile'
       /></div>  */}
        <div><Envelope
        fromPerson = {from}
        toPerson = {to}
       
       /></div> 
      </header>
    </div>
  );
  }
}

export default App;
