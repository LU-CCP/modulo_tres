import React from 'react'; //Librería
import logo from './logo.svg';
import './App.css';
// import Instructions from './components/Instructions.js';
// import Hyperlink from './components/Hyperlink.js';
// import AddressLabel from './components/AddressLabel.js';
import Envelope from './components/Envelope';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'Learn React',
      compare: ''
    };

    this._varGlobal = '';
    console.log('constructor');
  }

  shouldComponentUpdate(nextProps, nextState){ //Comprueba si se actualizó el component
    //console.log(nextProps, "next props")
    const { value, compare } = this.state;
    const should = nextState.value !== value || nextState.compare !== compare;
    console.log('shouldComponentUpdate', should);
    return should;
  }

  componentDidMount(){ //
    console.log('componentDidMount');

    setTimeout(()=>{
      this.setState({ value: 'Learn React Now!' });
    }, 3000);

    setTimeout(()=>{
      this._varGlobal = 'Please';
      console.log('forceUpdate');
      this.forceUpdate();
    }, 4000);

    setTimeout(()=>{
      console.log('setState compare');
      this.setState({ compare: '' });
    }, 5000);
  }



  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  render(){
    console.log('render');
    return(
      <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <Instructions
          nombre = 'Nicolás' //props
          hacerClick = { (nombre) => alert(nombre) }
        />

        <Hyperlink

        /> */}

        <Envelope
          toPerson = {
            {
              nombre: 'Felipe Pulgar',
              direccion1: 'Calle Falsa 123',
              direccion2: 'Concepción, Chile'
            }
          }
          fromPerson = {
            {
              nombre: 'Nicolás Arias',
              direccion1: 'Calle 4 414',
              direccion2: 'Talcahuano, Chile'
            }
          }
        />

      </header>
    </div>
    );
  }
}

export default App;